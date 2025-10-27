import { Module } from '@nestjs/common';
import { InversionistasService } from './inversionistas.service';
import { InversionistasController } from './inversionistas.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [InversionistasController],
  providers: [InversionistasService],
})
export class InversionistasModule {}
