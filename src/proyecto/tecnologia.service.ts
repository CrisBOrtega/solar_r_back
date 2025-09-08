import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { TecnologiasInt } from "./dto/create-tecnologias.dto";

@Injectable()
export class TecnologiaService {

  constructor(private prismaService: PrismaService) {
  }

  create(tecnologiasSoft: string[],
         tecnologiasHard: string[] ,
         proyecto_id : number) {


      tecnologiasHard.forEach(async (element) => {
        let tecnoFind =  await this.prismaService.tecnologia.findFirst({
          where: {tecnologia : element }
        })
        let id_tech = tecnoFind.id
        await this.prismaService.tecnologia_proyecto.create(
          {data: {
              proyecto_id: proyecto_id,
              tecnologia_id: id_tech,
            }}
        )
      })

    tecnologiasSoft.forEach(async (element) => {
      let tecnoFind =  await this.prismaService.tecnologia.findFirst({
        where: {tecnologia : element }
      })
      let id_tech = tecnoFind.id
      await this.prismaService.tecnologia_proyecto.create(
        {data: {
            proyecto_id: proyecto_id,
            tecnologia_id: id_tech,
          }}
      )
    })
  }





}
