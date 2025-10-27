import { PartialType } from '@nestjs/mapped-types';
import { CreateInversionistaDto } from './create-inversionista.dto';

export class UpdateInversionistaDto extends PartialType(CreateInversionistaDto) {}
