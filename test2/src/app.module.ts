import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Song} from "./songs/entities/song.entity";
import { ArtistsModule } from './artists/artists.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { UsersModule } from './users/users.module';
import {Artist} from "./artists/entities/artist.entity";
import {Playlist} from "./playlists/entities/playlist.entity";
import {User} from "./users/entities/user.entity";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      entities: [Song, Artist, Playlist, User], // Provide the Song entity class here
      synchronize: true,
    }),
    SongsModule,
    ArtistsModule,
    PlaylistsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
