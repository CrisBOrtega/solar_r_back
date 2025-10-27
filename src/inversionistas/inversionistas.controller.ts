import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InversionistasService } from './inversionistas.service';
import { CreateInversionistaDto } from './dto/create-inversionista.dto';
import { UpdateInversionistaDto } from './dto/update-inversionista.dto';

@Controller('inversionistas')
export class InversionistasController {
  constructor(private readonly inversionistasService: InversionistasService) {}

  @Post()
  create(@Body() createInversionistaDto: CreateInversionistaDto) {
    return this.inversionistasService.createInversion(createInversionistaDto);
  }

  @Get()
  findAll() {
    return this.inversionistasService.findAll();
  }


  //obtener los proyectos en los cuales ha invertido el usuario por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inversionistasService.obtenerProyectosInvertidosPorUsuario(+id);
  }

  @Get('proyecto-inversiones/:id')
  findInversionesProyectoId(@Param('id') id: string) {
    return this.inversionistasService.obtenerInversionesPorProyecto(+id)
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInversionistaDto: UpdateInversionistaDto) {
    return this.inversionistasService.update(+id, updateInversionistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inversionistasService.remove(+id);
  }
}
