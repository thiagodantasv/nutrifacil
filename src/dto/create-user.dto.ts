interface ICreateUserDto{
    name: string;
    surname: string;
    age: number;
    creationDate: Date;
    email: string;
    password: string;
}

export class CreateUserDto implements ICreateUserDto{
    name: string;
    surname: string;
    age: number;
    creationDate: Date;
    email: string;
    password: string;
}