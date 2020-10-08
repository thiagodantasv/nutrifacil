import { IsString } from "class-validator";
import { isString } from "util";

interface ICreateUserPhaseTwoDto{
    userId: string;
    specialty?: string;
    objective?: string;
}

export class CreateUserPhaseTwoDto implements ICreateUserPhaseTwoDto{
    @IsString()
    userId: string;

    @IsString()
    specialty?: string;

    @IsString()
    objective?: string;
}