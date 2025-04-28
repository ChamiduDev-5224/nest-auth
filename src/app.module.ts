import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports:  [AuthModule, PrismaModule, MyLoggerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
