import { Injectable } from '@nestjs/common';
import { CreateEmprendedorDto } from './dto/create-emprendedor.dto';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class EmprendedorService {

  constructor(private readonly prismaService: PrismaService) {}


  create(createEmprendedorDto: CreateEmprendedorDto) {
    return 'This action adds a new emprendedor';
  }

  //aqui se van a relacionar todos los ´proyectos
  //que pertenezcan al emprendedor
  async findAllProjects(idEmprendedor: number) {
    let relaciones = await this.prismaService.usuario_creacion_proyecto.findMany({
        where: { usuario_id: idEmprendedor },
        include: {
          proyecto_creado: true,
        }
    })


    // Extrae los proyectos directamente
    const proyectos = relaciones.map((r) => r.proyecto_creado);

    return {
      usuario_id: idEmprendedor,
      cantidad_proyectos: proyectos.length,
      proyectos,
    };

  }

  findOne(id: number) {
    return `This action returns a #${id} emprendedor`;
  }

  update(id: number, updateEmprendedorDto: UpdateEmprendedorDto) {
    return `This action updates a #${id} emprendedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} emprendedor`;
  }
}
