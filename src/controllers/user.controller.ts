import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./../services/user.service";
import { CreateUserDto } from './../dto/create-user.dto';

@Controller('/user')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Post('/signup')
    createUser(@Body() createUserDto: CreateUserDto): string{
        return this.userService.createUser(createUserDto);
    }
}