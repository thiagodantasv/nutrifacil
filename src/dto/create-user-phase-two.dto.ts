interface ICreateUserPhaseTwoDto{
    userId: string;
    specialty?: string;
    objective?: string;
}

export class CreateUserPhaseTwoDto implements ICreateUserPhaseTwoDto{
    userId: string;
    specialty?: string;
    objective?: string;
}