import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import {Song} from "./entities/song.entity";
import {ApiTags} from "@nestjs/swagger";

@Controller('songs')
@ApiTags('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
    console.log("controller post")
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }
}
