import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateRecursosDto, Recurso } from "./dto/create-recursos.dto";

@Injectable()
export class RecursoService {

  constructor(private readonly prismaService: PrismaService) {
  }


  create( recursos: Recurso[], proyecto_id: number )  {
    recursos.forEach(async(recurso: Recurso) => {
      await this.prismaService.recurso.create({
        data: {
          nombre: recurso.nombre,
          valor: recurso.cantidad,
          cantidad: recurso.cantidad,
          proyecto_id: proyecto_id,
        }
      })
    })

  }



}
