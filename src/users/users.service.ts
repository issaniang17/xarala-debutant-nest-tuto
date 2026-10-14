import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(){
        return [{id:1, name:'user1'},{id:2, name:'user2'}, {id:3, name:'user3'}, {id:4, name:'user4'}]
    }
    getOneUser(id:number){
        return {id, name:'user1'}
    }
    createUser(user:any){
        return {message:'Utilisateur creer', data: {id:3, ...user}}
    }

    updateUser(id:number, user:any){
        return {message:'Utilisateur modifier', data:{id, ...user}}
    }

    deleteUser(id:number){
        return {message:'Utilisateur supprimer', data:{id}}
    }
}
