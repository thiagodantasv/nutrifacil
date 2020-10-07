import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { UserService } from "./../services/user.service";
import { CreateUserPhaseOneDto } from '../dto/create-user-phase-one.dto';
import { CreateUserPhaseTwoDto } from './../dto/create-user-phase-two.dto';

@Controller('/user')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Post('/signupPhaseOne')
    createUserPhaseOne(@Body() createUserPhaseOneDto: CreateUserPhaseOneDto): string{
        return this.userService.createUserPhaseOne(createUserPhaseOneDto);
    }

    @Put('/signupPhaseTwo')
    createUserPhaseTwo(@Body() createUserPhaseTwo: CreateUserPhaseTwoDto){
        return this.userService.createUserPhaseTwo(createUserPhaseTwo);
    }
}