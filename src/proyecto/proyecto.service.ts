import {Injectable, NotFoundException} from '@nestjs/common';
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




    async findAllWithDetails() {
      const proyectos = await this.prismaService.proyecto.findMany({
          include: {
              proyectos_usuario:{
                  include: {
                      usuario_creador: {
                          select: { id: true, username: true, email: true },
                      },
                  },
              },
              tecnologias: {
                  include: {
                      tecnologia: true
                  }
              },
              recursos: true,
              proyectos_inversion: true
          }
      });

        return proyectos.map((proyecto)=>{
            const totalInvertido = proyecto.proyectos_inversion.reduce((sum, inv) => {
                return sum + Number(inv.cantidad);
            }, 0);
            // Total costos recursos
            const totalRecursos = proyecto.recursos.reduce((sum, r) => {
                return sum + (Number(r.valor) * r.cantidad);
            }, 0);
            return {
                id: proyecto.id,
                nombre: proyecto.nombre,
                tipo_energia: proyecto.tipo_energia,

                creador: proyecto.proyectos_usuario[0].usuario_creador?{
                    id: proyecto.proyectos_usuario[0].usuario_creador.id,
                    nombre: proyecto.proyectos_usuario[0].usuario_creador.username,
                    email: proyecto.proyectos_usuario[0].usuario_creador.email,
                }: null,
                tecnologias: proyecto.tecnologias.map(t => ({
                    id: t.tecnologia.id,
                    nombre: t.tecnologia.tecnologia,
                    tipo: t.tecnologia.tipo ? 'software' : 'hardware'
                })),
                recursos: proyecto.recursos,

                total_invertido: totalInvertido,
                total_costos_recursos: totalRecursos,
                balance: totalInvertido - totalRecursos
            }
        })

    }




  async findOne(id: number) {
     const proyecto = await this.prismaService.proyecto.findUnique({
         where : {id},
         include: {
             pasos: true,
             recursos: true,
             tecnologias: {
                 include: {
                     tecnologia: true
                 },
             },
         }
     })

      if (!proyecto) {
          throw new NotFoundException(`No se encontró el proyecto con id ${id}`);
      }

      const totalRecursos = proyecto.recursos.reduce((total, recurso) => {
          const valor = Number(recurso.valor);
          return total + valor * recurso.cantidad;
      }, 0);

      return {
          id: proyecto.id,
          nombre: proyecto.nombre,
          tipo_energia: proyecto.tipo_energia,
          descripcion: proyecto.descripcion,
          pasos: proyecto.pasos,
          recursos: proyecto.recursos,
          tecnologias: proyecto.tecnologias.map((t) => ({
              id: t.tecnologia.id,
              nombre: t.tecnologia.tecnologia,
              tipo: t.tecnologia.tipo ? 'software' : 'hardware',
          })),
          total_recursos: totalRecursos,

      };

  }








  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
