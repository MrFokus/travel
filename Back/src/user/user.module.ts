import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {AuthController, RegController, UserController} from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/entities/User";


@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController,AuthController,RegController],
  providers: [UserService]
})
export class UserModule {}
