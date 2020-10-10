import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserPhaseOneDto } from 'src/dto/create-user-phase-one.dto';
import { CreateUserPhaseTwoDto } from 'src/dto/create-user-phase-two.dto';
import { User, UserDocument } from './../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}


    async createUserPhaseOne(user: CreateUserPhaseOneDto): Promise<User>{
        const createdUser = new this.userModel(user);
        console.log("new user ->", createdUser);
        
        return createdUser.save();
    }

    createUserPhaseTwo(user: CreateUserPhaseTwoDto){
        
        return "oi";
    }

}