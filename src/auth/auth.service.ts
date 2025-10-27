import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import {MailerService} from "@nestjs-modules/mailer";
import { JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService ,
        private readonly mailService: MailerService,
                private jwtService: JwtService,
       ) {}


    async register(registerDto: RegisterDto, request: any){
        let existe = await this.prismaService.usuario.findFirst({
            where: { email: registerDto.email}
          })
        if(existe){
            throw new BadRequestException('El email ya está en uso')
        }

        let token = uuidv4();
        let url_verificacion = `${request.protocol}://${request.get("Host")}/auth/verificacion/${token}`;

        ////////////////
        const usuario = await this.prismaService.usuario.create({
            data: {
                username: registerDto.username,

                email: registerDto.email,
                password: await bcrypt.hash(registerDto.password, 10),
                tipo: {
                    connect: { id: +registerDto.tipo_id }
                  },
                estado: {
                    connect: {
                        id: 2
                    }
                },
                token: token
            }
        })
        await this.mailService.sendMail({
            from:'Prueba solar_r "<michy@sena.edu.co>"',
            to: registerDto.email,
            subject: 'Verificación de cuenta',
            html: `Hola ${registerDto.username}! registro exitoso. <br />
                   <a href="${url_verificacion}">${url_verificacion}</a>
                  `,
        })
        console.log("correo enviado")


        return usuario
    }

    async verificarRegistroCuenta(token: any, response: any){
        console.log(token)

        let datos = await this.prismaService.usuario.findFirst({
            where: {token: token.token , estado_id: 2}
        })
        if(!datos){
            throw new BadRequestException('error inesperado: token invalido')
        }else{
            await this.prismaService.usuario.update({
                where: {
                    id:datos.id
                }, data:{
                    token: '',
                    estado_id: 1
                }
            })
            return response.redirect(`${process.env.URL_FRONTEND}/login`)
        }
    }

    async getlogin(correo: string , password: string){
        let datos = await this.prismaService.usuario.findFirst({
            where: {
                email: correo,
                estado_id: 1
            }
        })
        if(!datos){
            throw new NotFoundException('error inesperado: usuario no encontrado')
        }
        let isMatch = await bcrypt.compare(password, datos.password)
        if(isMatch){
            //  header , payload , firma
            let payload = {
                email: datos.email,
                role:datos.tipo_id
            }
            return {
                id: datos.id,
                nombre: datos.username,
                token: this.jwtService.sign(payload)
            }
        }else{
            throw new BadRequestException('error inesperado: credenciales invalidas')
        }
    }
    
}
