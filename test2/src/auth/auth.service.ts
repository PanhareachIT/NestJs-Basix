import {Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto} from './dto/login.dto'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {PayloadType} from  './types'
import {User} from "../users/entities/user.entity";
import {UsersService} from "../users/users.service";
import {ArtistsService} from "../artists/artists.service";

@Injectable()
export class AuthService {
  constructor(
      private  userService: UsersService,
      private jwtService: JwtService,
      private artistsService: ArtistsService
      // private userRepository :Repository<User>
  ) {
  }
  // Promise<{ accessToken: string }>
  async login(loginDto: LoginDto): Promise<{ accessToken: string }>  {

    const user = await this.userService.findOne(loginDto)

    const matchPassword = await bcrypt.compare(
        loginDto.password, user.password
    )
    if(!user){
      throw  new UnauthorizedException('Could Not Found User')
    }

    if(matchPassword){
      delete user.password;
      const payload: PayloadType = { email: user.email, userId: user.id };
      const artist = await this.artistsService.findArtist(user.id); // 2
      if(artist){
        payload.artistId = artist.id
      }
      // const accessToken = this.jwtService.sign(payload)
      // return accessToken;
      return {accessToken: this.jwtService.sign(payload)}
      // return  {accessToken: "dfa"}
    }else{
      throw new UnauthorizedException('Password does not match');
    }

  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
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
