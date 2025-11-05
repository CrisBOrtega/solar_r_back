import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmprendedorService } from './emprendedor.service';
import { CreateEmprendedorDto } from './dto/create-emprendedor.dto';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto';

@Controller('emprendedor')
export class EmprendedorController {
  constructor(private readonly emprendedorService: EmprendedorService) {}

  @Post()
  create(@Body() createEmprendedorDto: CreateEmprendedorDto) {
    return this.emprendedorService.create(createEmprendedorDto);
  }

  @Get(":id/proyectos")
  findAll(@Param('id') id: string) {
    return this.emprendedorService.findAllProjects(+id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emprendedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmprendedorDto: UpdateEmprendedorDto) {
    return this.emprendedorService.update(+id, updateEmprendedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emprendedorService.remove(+id);
  }
}
