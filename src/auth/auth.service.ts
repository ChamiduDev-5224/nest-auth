import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma:PrismaService){}

  passwordHash(password:string){
   return bcrypt.hash(password, 4);

  }


 async create(createAuthDto: CreateAuthDto) {

  try {
    //check email unique or not already 
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    // If adding email exist 
    if (existingUser) {
    return 'Email is already in use. Please use a different email.';
    }

    //password hashing 
    const hashPassword = await this.passwordHash(createAuthDto.password);
    //add data 
    return this.prisma.user.create({
    data:{
      email:createAuthDto.email,
      username:createAuthDto.username,
      hashedPassword:hashPassword,
      status:createAuthDto.status
    }
    });   
      
  } catch (error) {
    return error;
  } 
}

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
