import { PartialType } from '@nestjs/mapped-types';
import { CreateEmprendedorDto } from './create-emprendedor.dto';

export class UpdateEmprendedorDto extends PartialType(CreateEmprendedorDto) {}
