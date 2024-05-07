// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { UsersModule } from "../users/users.module";
// import { JwtModule } from '@nestjs/jwt';
// import { authConstants } from "./auth.contants";
// import {UsersController} from "../users/users.controller";
// import {UsersService} from "../users/users.service";
//
//
// @Module({
//     imports: [
//
//         UsersModule,
//         // JwtModule.register({
//         //     secret: authConstants.secret,
//         //     signOptions: {
//         //         expiresIn: '1d',
//         //     },
//         // }),
//     ],
//     controllers: [AuthController],
//     providers: [AuthService, UsersService],
//     exports: [AuthService, UsersService]
// })
// export class AuthModule {}


import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.contants';
import { JwtStrategy } from './jwt-strategry';
import { ArtistsModule } from 'src/artists/artists.module';
import {UsersService} from "../users/users.service";
import {PlaylistsService} from "../playlists/playlists.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {Artist} from "../artists/entities/artist.entity";
import {ArtistsService} from "../artists/artists.service";
// import { ApiKeyStrategy } from './api-key-strategy';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([Artist]),
        JwtModule.register({
            secret: authConstants.secret,
            signOptions: {
                expiresIn: '1d',
            },
        }),
        ArtistsModule,
    ],
    providers: [AuthService, JwtStrategy, PlaylistsService, UsersService, ArtistsService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule { }
