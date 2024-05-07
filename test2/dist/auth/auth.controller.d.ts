import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from "./dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
