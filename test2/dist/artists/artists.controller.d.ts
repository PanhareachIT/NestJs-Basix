import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistsController {
    private readonly artistsService;
    constructor(artistsService: ArtistsService);
    create(createArtistDto: CreateArtistDto): string;
    findAll(): string;
    update(id: string, updateArtistDto: UpdateArtistDto): string;
    remove(id: string): string;
}
