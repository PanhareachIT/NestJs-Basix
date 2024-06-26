import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    findAll(): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
