import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from "./entities/song.entity";
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(createSongDTO: CreateSongDTO): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: string): Promise<Song>;
    update(id: string, updateSongDto: UpdateSongDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
