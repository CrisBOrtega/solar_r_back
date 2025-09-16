import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { PrismaService } from "../prisma/prisma.service";
import { PasoService } from "./paso.service";
import { Recurso } from "./dto/create-recursos.dto";
import { RecursoService } from "./recurso.service";
import { TecnologiaService } from "./tecnologia.service";

@Injectable()
export class ProyectoService {

  constructor(private prismaService: PrismaService ,
              private pasosService : PasoService,
              private recursoService: RecursoService,
              private tecnologiaService: TecnologiaService,) {}

  async create(createProyectoDto: CreateProyectoDto) {

    /*return createProyectoDto;*/

   const newProject = await this.prismaService.proyecto.create({
      data: {
        nombre: createProyectoDto.nombre,
        descripcion: createProyectoDto.descripcion,
        tipo_energia: createProyectoDto.energia
      }
    })
    //Pasos
    const pasos = createProyectoDto.pasos;
    this.pasosService.create(pasos , newProject.id)
    //recursos
    const recursos: Recurso[] = createProyectoDto.recursos
    this.recursoService.create(recursos , newProject.id)
    //tecnologias
    this.tecnologiaService.create(createProyectoDto.hardware ,
                                  createProyectoDto.software ,
                                  newProject.id
      )

      //relacion proyectos
      await this.prismaService.usuario_creacion_proyecto.create({
          data:{
              usuario_id: createProyectoDto.usuario_id,
              proyecto_id: newProject.id
          }
      })


    return {
      message: "Proyecto creado con éxito",
      proyecto: newProject,
    };


  }

  findAll() {
    return this.prismaService.proyecto.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} proyecto`;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
