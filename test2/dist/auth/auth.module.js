"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const auth_contants_1 = require("./auth.contants");
const jwt_strategry_1 = require("./jwt-strategry");
const artists_module_1 = require("../artists/artists.module");
const users_service_1 = require("../users/users.service");
const playlists_service_1 = require("../playlists/playlists.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const artist_entity_1 = require("../artists/entities/artist.entity");
const artists_service_1 = require("../artists/artists.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([artist_entity_1.Artist]),
            jwt_1.JwtModule.register({
                secret: auth_contants_1.authConstants.secret,
                signOptions: {
                    expiresIn: '1d',
                },
            }),
            artists_module_1.ArtistsModule,
        ],
        providers: [auth_service_1.AuthService, jwt_strategry_1.JwtStrategy, playlists_service_1.PlaylistsService, users_service_1.UsersService, artists_service_1.ArtistsService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map