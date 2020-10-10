import { Module } from "@nestjs/common";
import { UserController } from "./../controllers/user.controller";
import { UserService } from "./../services/user.service";
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './../schemas/user.schema';

@Module({
    imports:[
        MongooseModule.forRoot('mongodb://localhost:27010/nutristuff'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [UserController],
    providers: [UserService],
    exports:[]
})  
export class UserModule{

}