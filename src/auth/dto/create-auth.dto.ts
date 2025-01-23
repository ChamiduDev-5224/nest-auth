import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
    username:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @MinLength(8)
    @IsStrongPassword()
    password:string;
    @IsNotEmpty()
    status:number;
}
