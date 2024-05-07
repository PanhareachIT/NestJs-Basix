import { Song } from 'src/songs/entities/song.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Playlist {
    id: number;
    name: string;
    songs: Song[];
    user: User;
}
