import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
// @ApiTags('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './upload/files',
          filename: (req, file, cb) => {
            cb(null, file.originalname);
          },
        }),
      }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return {
      messge: 'file uploaded successfully!',
    };
  }
}
