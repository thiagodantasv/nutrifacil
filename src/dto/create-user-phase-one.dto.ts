import { IsDate, IsString } from "class-validator";

interface ICreateUserPhaseOneDto{
    name: string;
    surname: string;
    creationDate: string;
    birthdate: string;
    email: string;
    password: string;
}

export class CreateUserPhaseOneDto implements ICreateUserPhaseOneDto{
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    birthdate: string;

    @IsString()
    creationDate: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}