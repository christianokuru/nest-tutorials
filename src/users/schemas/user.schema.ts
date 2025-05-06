import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Now, import this schema in users.module
// import { User, UserSchema } from './schemas/user.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//   ],
//   controllers: [UsersController],
//   providers: [UsersService],
// })