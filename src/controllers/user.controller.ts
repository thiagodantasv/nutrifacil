import { Body, Controller, Get, Post, Put, UsePipes } from "@nestjs/common";
import { UserService } from "./../services/user.service";
import { CreateUserPhaseOneDto } from '../dto/create-user-phase-one.dto';
import { CreateUserPhaseTwoDto } from './../dto/create-user-phase-two.dto';
import { ValidationPipe } from './../services/pipe/validation.pipe';
import { User } from './../schemas/user.schema';

@Controller('/user')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Post('/signupPhaseOne')
    createUserPhaseOne(@Body(new ValidationPipe()) createUserPhaseOneDto: CreateUserPhaseOneDto): Promise<User>{
        return this.userService.createUserPhaseOne(createUserPhaseOneDto);
    }

    @Put('/signupPhaseTwo')
    createUserPhaseTwo(@Body(new ValidationPipe()) createUserPhaseTwo: CreateUserPhaseTwoDto){
        return this.userService.createUserPhaseTwo(createUserPhaseTwo);
    }
}