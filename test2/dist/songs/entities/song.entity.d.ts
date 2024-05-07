import { Artist } from 'src/artists/entities/artist.entity';
import { Playlist } from 'src/playlists/entities/playlist.entity';
export declare class Song {
    id: number;
    title: string;
    releasedDate: Date;
    lyrics: string;
    artists: Artist[];
    playlist: Playlist;
}
