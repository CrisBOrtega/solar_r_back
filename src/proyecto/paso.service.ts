import { Injectable } from '@nestjs/common';
import { CreatePasosDto, Paso } from "./dto/create-pasos.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PasoService {


  constructor(private prismaService: PrismaService) {
  }

  create(pasos: string[] , proyecto_id: number) {
      pasos.forEach(async (p) => {
        await this.prismaService.paso.create({
          data: {
            paso: p,
            proyecto_id
          }
        })
      })

  }



}
