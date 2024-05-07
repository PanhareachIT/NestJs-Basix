import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../users/users.service";
import { ArtistsService } from "../artists/artists.service";
export declare class AuthService {
    private userService;
    private jwtService;
    private artistsService;
    constructor(userService: UsersService, jwtService: JwtService, artistsService: ArtistsService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
