import { Recurso } from "./create-recursos.dto";

export class CreateProyectoDto {
  nombre: string;
  energia: string;
  descripcion: string;
  pasos : string[];
  software : string[];
  hardware: string[];
  recursos : Recurso[];
  usuario_id: number
}
