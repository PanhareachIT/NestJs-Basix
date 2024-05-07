import { CreateSongDTO } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from "./entities/song.entity";
import { Repository, DeleteResult, UpdateResult } from "typeorm";
export declare class SongsService {
    private songsRepository;
    constructor(songsRepository: Repository<Song>);
    create(createSongDto: CreateSongDTO): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    update(id: number, updateSongDto: UpdateSongDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
