import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import {CreateInversionDto} from "./dto/create-inversion.dto";
import {InversionService} from "./inversion.service";
import {JwtAuthGuard} from "../guard/jwt-auth/jwt-auth.guard";

@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService,
              private readonly inversionService: InversionService,) {}

  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectoService.create(createProyectoDto);
  }

  @Get()
  //@UseGuards(JwtAuthGuard)
  findAll() {
    return this.proyectoService.findAllWithDetails();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectoDto: UpdateProyectoDto) {
    return this.proyectoService.update(+id, updateProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectoService.remove(+id);
  }

  @Post('invertir')
  invertir(@Body() createInversionDto: CreateInversionDto) {
      return this.inversionService.invertir(createInversionDto);
  }
}
