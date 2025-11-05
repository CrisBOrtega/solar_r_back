import {IsNotEmpty} from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    tipo_id: number;


}
