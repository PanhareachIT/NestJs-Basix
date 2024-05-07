import { Playlist } from 'src/playlists/entities/playlist.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    twoFASecret: string;
    enable2FA: boolean;
    apiKey: string;
    playLists: Playlist[];
}
