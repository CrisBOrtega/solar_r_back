import {IsNotEmpty} from "class-validator";

export class CreateInversionistaDto {

    @IsNotEmpty()
    proyecto_id: string;

    @IsNotEmpty()
    usuario_id: string;

    @IsNotEmpty()
    cantidad: number;
}
