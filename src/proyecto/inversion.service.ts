import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateInversionDto} from "./dto/create-inversion.dto";

@Injectable()
export class InversionService {

    constructor(private readonly prismaService: PrismaService) {
    }

    async invertir(createInversionDto: CreateInversionDto) {
        return this.prismaService.usuario_inversion_proyecto.create({
            data: {
                proyecto_id: +createInversionDto.proyecto_id,
                usuario_id: +createInversionDto.usuario_id,
                cantidad: +createInversionDto.cantidad
            }
        })

    }
}
