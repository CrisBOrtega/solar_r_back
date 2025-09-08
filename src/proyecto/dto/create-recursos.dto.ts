export interface  Recurso {
  nombre: string;
  valor: number;
  cantidad: number;

}


export class CreateRecursosDto {

  recursos : Recurso[];
}