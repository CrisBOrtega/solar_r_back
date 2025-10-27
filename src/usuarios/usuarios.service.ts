import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import {LoginUsuarioDto} from "./dto/login-usuario.dto";
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UsuariosService {

  constructor(private prismaService: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
   
  }


  async login(loginDto_ : LoginUsuarioDto) {
    //verifica usuario por correo
    let existe = await this.prismaService.usuario.findFirst({
      where: {
        username: loginDto_.username,
      }
    })
    if(existe){
      let isMatch = await bcrypt.compare(loginDto_.password, existe.password)
      if(isMatch){
        return{
          success:true,
          message: "logeado con exito",
          usuario_id : existe.id,
          usuario_tipo_id: existe.tipo_id
        }
      }
    }



  }



  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
