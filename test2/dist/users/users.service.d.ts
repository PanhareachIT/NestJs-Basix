import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { LoginDto } from "../auth/dto/login.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(data: LoginDto): Promise<User>;
    findById(id: number): Promise<User>;
    findAll(): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
