import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Song} from "./entities/song.entity";
import {Repository, DeleteResult, UpdateResult} from "typeorm";

@Injectable()
export class SongsService {
  constructor(
      @InjectRepository(Song)
      private songsRepository: Repository<Song>
  ) {}

  create(createSongDto: CreateSongDTO): Promise<Song> {
    const song = new Song();
    song.title = createSongDto.title;
    // song.artists = createSongDto.artists;
    // song.duration = createSongDto.duration;
    song.lyrics = createSongDto.lyrics;
    song.releasedDate = createSongDto.releasedDate;

    return this.songsRepository.save(song);
  }

  findAll():Promise<Song[]> {
    return this.songsRepository.find();
  }

  findOne(id: number) {
    return this.songsRepository.findOneBy({id})
  }

  update(id: number, updateSongDto: UpdateSongDto): Promise<UpdateResult> {
    return this.songsRepository.update(id, updateSongDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.songsRepository.delete(id)
  }
  // async paginate(options: IPaginationOption): Promise<Pagination<Song>> {
  //   const queryBuilder = this.songsRepository.createQueryBuilder('c');
  //   queryBuilder.orderBy('c.releasedDate', 'DESC');
  //
  //   return paginate<Song>(queryBuilder, options);
  // }
// }
}
