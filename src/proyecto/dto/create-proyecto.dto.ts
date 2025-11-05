import { Recurso } from "./create-recursos.dto";
import {IsNotEmpty} from "class-validator";

export class CreateProyectoDto {

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  energia: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  pasos : string[];

  @IsNotEmpty()
  software : string[];

  @IsNotEmpty()
  hardware: string[];

  @IsNotEmpty()
  recursos : Recurso[];

  @IsNotEmpty()
  usuario_id: number
}
