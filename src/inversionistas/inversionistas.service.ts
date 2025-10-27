import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateInversionistaDto } from './dto/create-inversionista.dto';
import { UpdateInversionistaDto } from './dto/update-inversionista.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class InversionistasService {

  constructor(private readonly prismaService: PrismaService) {}

  async createInversion(createInversionistaDto: CreateInversionistaDto) {
     let proyecto  = this.prismaService.proyecto.findFirst({
          where: { id: +createInversionistaDto.proyecto_id}
        }
     )
     if (!proyecto) {
        throw new NotFoundException("Proyecto not found")
     }
     let usuario = await this.prismaService.usuario.findFirst({
       where: { id: +createInversionistaDto.usuario_id}
     })
     if (!usuario) {
        throw new NotFoundException("usuario not found")
     }
     let ui =  await this.prismaService.usuario_inversion_proyecto.create({
       data:{
         usuario_id: +createInversionistaDto.usuario_id,
         proyecto_id: +createInversionistaDto.proyecto_id,
         cantidad: +createInversionistaDto.cantidad,
       }
     })
    return ui

  }

  findAll() {
    return `This action returns all inversionistas`;
  }

  async obtenerProyectosInvertidosPorUsuario(usuarioId: number) {
     /*const inversiones  = await this.prismaService.usuario_inversion_proyecto.findMany(
         {
             where: {
                 usuario_id: usuarioId,
             },
             include: {
                 proyecto_invertido: true
             }
         }
     )
      return inversiones*/
      const inversiones = await this.prismaService.usuario_inversion_proyecto.findMany({
          where: { usuario_id: usuarioId },
          include: { proyecto_invertido: true },
      });

      const resultado = Object.values(
          inversiones.reduce((acc, inv) => {
              const id = inv.proyecto_id;
              if (!acc[id]) {
                  acc[id] = {
                      proyecto: inv.proyecto_invertido,
                      total_invertido: inv.cantidad,
                  };
              } else {
                  acc[id].total_invertido = acc[id].total_invertido.plus(inv.cantidad); // si cantidad es Decimal
              }
              return acc;
          }, {} as Record<number, any>),
      );

      return resultado


  }



    async obtenerInversionesPorProyecto(proyectoId: number) {
        // 1️⃣ Traer todas las inversiones del proyecto, incluyendo el usuario inversor
        const inversiones = await this.prismaService.usuario_inversion_proyecto.findMany({
            where: {proyecto_id: proyectoId},
            include: {
                usuario_inversor: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    },
                },
            },
        });

// 2️⃣ Calcular el total invertido con una agregación
        const total = await this.prismaService.usuario_inversion_proyecto.aggregate({
            where: {proyecto_id: proyectoId},
            _sum: {
                cantidad: true,
            },
        });

        // 3️⃣ Retornar ambos resultados juntos
        return {
            proyecto_id: proyectoId,
            inversiones: inversiones.map((inv) => ({
                id_inversion: inv.id,
                usuario: inv.usuario_inversor,
                cantidad: inv.cantidad,
            })),
            total_invertido: total._sum.cantidad || 0,
        };

    }


  update(id: number, updateInversionistaDto: UpdateInversionistaDto) {
    return `This action updates a #${id} inversionista`;
  }

  remove(id: number) {
    return `This action removes a #${id} inversionista`;
  }
}
