import { Injectable } from '@nestjs/common';
import { CreateUserPhaseOneDto } from 'src/dto/create-user-phase-one.dto';
import { CreateUserPhaseTwoDto } from 'src/dto/create-user-phase-two.dto';

@Injectable()
export class UserService {

    createUserPhaseOne(user: CreateUserPhaseOneDto){
        
        return "oi";
    }

    createUserPhaseTwo(user: CreateUserPhaseTwoDto){
        
        return "oi";
    }

}