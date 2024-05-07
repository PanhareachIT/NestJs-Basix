import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
export declare class PlaylistsController {
    private readonly playlistsService;
    constructor(playlistsService: PlaylistsService);
    create(createPlaylistDto: CreatePlaylistDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlaylistDto: UpdatePlaylistDto): string;
    remove(id: string): string;
}
