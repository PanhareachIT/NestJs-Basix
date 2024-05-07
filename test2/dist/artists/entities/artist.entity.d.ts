import { Song } from 'src/songs/entities/song.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Artist {
    id: number;
    user: User;
    songs: Song[];
}
