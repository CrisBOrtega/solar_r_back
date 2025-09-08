import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectoModule } from './proyecto/proyecto.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProyectoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
