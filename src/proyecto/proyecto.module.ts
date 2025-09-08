import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { RecursoService } from './recurso.service';
import { TecnologiaService } from './tecnologia.service';
import { PasoService } from './paso.service';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ProyectoController],
  providers: [ProyectoService, RecursoService, TecnologiaService, PasoService],
})
export class ProyectoModule {}
