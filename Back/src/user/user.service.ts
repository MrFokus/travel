import {Body, Injectable} from '@nestjs/common';
import {User} from "../entities/entities/User";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";
import * as crypto from 'crypto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
    }

    async registration(createUserDto: CreateUserDto):Promise<any> {
        try {
            let check_user = await this.userRepository.query(`SELECT * FROM "user" WHERE 'login'='${createUserDto.login}' OR 'phone'='${createUserDto.tel}'`);
            console.log(check_user)
            if (check_user.length === 0) {
                const hash_password = crypto.createHash('md5').update(createUserDto.password).digest('hex');
                await this.userRepository.query(`INSERT INTO "user" (login, password, mail, phone, role) VALUES ('${createUserDto.login}', '${hash_password}', '${createUserDto.mail}', '${createUserDto.tel}', 'customer')`)
                return await this.auth({login:createUserDto.login,password:createUserDto.password})
            }
        }
        catch (e) {
            console.log(e)
        }


    }

    async auth(inputData: { login: string, password: string }):Promise<any> {
        try {
            let hash_password = crypto.createHash('md5').update(inputData.password).digest('hex');
            console.log(hash_password)
            for (let i = 0; i < 10; i++) {
                console.log(crypto.createHash('md5').update(inputData.password).digest('hex'))
            }
            let check_user = await this.userRepository.query(`SELECT * FROM "user" WHERE "login" = '${inputData.login}' AND "password" = '${hash_password}'`);
            console.log(check_user)
            if (check_user.length !== 0) {
                return {
                    status: 200,
                    id:check_user[0].id,
                    login: check_user[0].login,
                    mail:check_user[0].mail,
                    phone:check_user[0].phone,
                    role:check_user[0].role,
                }
            } else {
                return {
                    status: 400,
                    message:"Не верный логин или пароль",
                }
            }
        }
        catch (e) {
            console.log(e)
        }

    }

    async update(params) {
        try {
            let checkFields  = await this.userRepository.query(`SELECT * FROM public."user" WHERE login='${params.login}' OR mail='${params.mail}' OR phone='${params.phone}'`)
            if (checkFields.length <=1 ) {
                await this.userRepository.query(`UPDATE public."user" SET login='${params.login}', mail='${params.mail}', phone='${params.phone}' WHERE id = ${params.id}`)
                return await this.userRepository.query(`SELECT * FROM public."user" WHERE id = ${params.id}'`)
            }
        }
        catch (e){
            console.log(e)
        }
    }

    async get(id:any){
        let res= await this.userRepository.query(`SELECT * FROM "user" WHERE id = ${id}`)
        return res[0]

    }
}
