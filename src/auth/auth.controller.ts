import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import express from 'express';
import {LoginDto} from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto , @Req() request: express.Request) {
    return this.authService.register(registerDto , request)
  }

  @Get('verificacion/:token')
  @HttpCode(HttpStatus.OK)
  verificarToken(@Param() token: string , @Res() response: express.Response) {
      return this.authService.verificarRegistroCuenta(token, response)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto, @Req() request: express.Request) {
      return this.authService.getlogin(dto.email, dto.password)
  }

}
