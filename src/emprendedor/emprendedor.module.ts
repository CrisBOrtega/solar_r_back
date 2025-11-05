import { Module } from '@nestjs/common';
import { EmprendedorService } from './emprendedor.service';
import { EmprendedorController } from './emprendedor.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [EmprendedorController],
  providers: [EmprendedorService],
})
export class EmprendedorModule {}
