import {  IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string

    @MinLength(6)
    @IsNotEmpty()
    password: string
}

// This will be used to create the request from rhe client and make sure that the email is a valid email and the password is at least 6 characters