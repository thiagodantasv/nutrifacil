import { IsDate, IsString } from "class-validator";

interface ICreateUserPhaseOneDto{
    name: string;
    surname: string;
    creationDate: Date;
    birthdate: Date;
    email: string;
    password: string;
}

export class CreateUserPhaseOneDto implements ICreateUserPhaseOneDto{
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsDate()
    birthdate: Date;

    @IsDate()
    creationDate: Date;

    @IsString()
    email: string;

    @IsString()
    password: string;
}