"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const artists_service_1 = require("../artists/artists.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, artistsService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.artistsService = artistsService;
    }
    async login(loginDto) {
        const user = await this.userService.findOne(loginDto);
        const matchPassword = await bcrypt.compare(loginDto.password, user.password);
        if (!user) {
            throw new common_1.UnauthorizedException('Could Not Found User');
        }
        if (matchPassword) {
            delete user.password;
            const payload = { email: user.email, userId: user.id };
            const artist = await this.artistsService.findArtist(user.id);
            if (artist) {
                payload.artistId = artist.id;
            }
            return { accessToken: this.jwtService.sign(payload) };
        }
        else {
            throw new common_1.UnauthorizedException('Password does not match');
        }
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        artists_service_1.ArtistsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map