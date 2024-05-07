import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'jane_doe@gmail.com',
        description: 'provide the email of the user',
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
}