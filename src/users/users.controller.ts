import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(){
    return this.usersService.findAll()
  }
  @Get(':id')
  unUtilisateur(@Param('id') id:number){
    return this.usersService.getOneUser(id)
  }
  @Post()
  creerUtilisateur(@Body() utilisateur:any){
    return this.usersService.createUser(utilisateur)
  }
  @Put(':id')
  modifierUtilisateur(@Param('id') id:number, @Body() utilisateur: any){
    return this.usersService.updateUser(id, utilisateur)
  }
  @Delete(':id')
  supprimerUtilisateur(@Param('id') id:number){
    return this.usersService.deleteUser(id)
  }
}
