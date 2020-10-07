interface ICreateUserPhaseOneDto{
    name: string;
    surname: string;
    creationDate: Date;
    birthdate: Date;
    email: string;
    password: string;
}

export class CreateUserPhaseOneDto implements ICreateUserPhaseOneDto{
    name: string;
    surname: string;
    birthdate: Date;
    creationDate: Date;
    email: string;
    password: string;
}