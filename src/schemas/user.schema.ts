import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    creationDate: string;

    @Prop({ required: true })
    birthdate: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    specialty: string;

    @Prop({ required: false })
    objective: string;
}

export const UserSchema = SchemaFactory.createForClass(User);