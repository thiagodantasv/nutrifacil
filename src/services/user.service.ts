import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {

    createUser(user: CreateUserDto){
        console.log("user ->", user);
        return "oi";
    }

}