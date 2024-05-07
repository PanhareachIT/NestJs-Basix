import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {LoginDto} from "./dto/login.dto";
import {AuthGuard} from '@nestjs/passport'
import {JwtAuthGuard} from './jwt-guard'
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  @Post('/login')
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({
    status: 201,
    description: 'It will return the user in the response',
  })
  login(@Body() loginDto: LoginDto){
    console.log("Hdsasdsa")
    return this.authService.login(loginDto)
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto){
    console.log("Hdsasdsa")
    return this.authService.create(createAuthDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
