import {Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import {LoginDto} from "../auth/dto/login.dto";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
  ) {
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password, salt)

    const saveUser = await this.userRepository.save(user);
    delete saveUser.password;
    return  saveUser;
  }
  async findOne(data: LoginDto): Promise<User> {

    const user = await this.userRepository.findOneBy({ email: data.email });
    if (!user) {
      throw new UnauthorizedException('Could not find user');
    }
    return user;
  }
  async findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  findAll() {
    return `This action returns all users`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
