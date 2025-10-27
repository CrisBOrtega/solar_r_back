import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectoModule } from './proyecto/proyecto.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import * as process from "node:process";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt/jwt.strategy";
import { InversionistasModule } from './inversionistas/inversionistas.module';

@Module({
  imports: [ProyectoModule, 
            PrismaModule, 
            UsuariosModule, 
            AuthModule,
            MailerModule.forRoot({
                transport: {
                    host: 'localhost',
                    port: 1025,
                    ignoreTLS: true,
                },
            }),
            JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: '24h'
                }
            }),
            InversionistasModule
          ],

  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
