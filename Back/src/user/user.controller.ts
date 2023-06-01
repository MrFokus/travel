import {Controller, Get, Post, Body, Patch, Param, Delete, Put, Query} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {log} from "util";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: UserService) {}
  @Post()
  auth(@Body() inputData:{login:string, password:string}){
    return this.authService.auth(inputData);
  }
}

@Controller('registration')
export class RegController {
  constructor(private readonly userService: UserService) {}

  @Post()
  registration(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.userService.registration(createUserDto);
  }


  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post("add-pass")
    addPass(@Body() {params}){
        console.log(params)
        return this.userService.addPass(params)
    }

    @Put('/update')
    registration(@Body() params: Object) {
        return this.userService.update(params);
    }
    @Get('passengers')
    getPassengers(@Query() id){
        console.log(id)
        return this.userService.getPassengers(id)
    }
    @Get(':id')
    getUser(@Param('id') id:any){
        console.log(this.userService.get(id))
        return this.userService.get(id)
    }

}
