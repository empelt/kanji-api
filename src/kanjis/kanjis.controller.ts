import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateKanjiDto } from './dto/create-kanji.dto';
import { UpdateKanjiDto } from './dto/update-kanji.dto';
import { KanjisService } from './kanjis.service';
import { Kanji } from './kanji.entity';

@Controller('kanjis')
export class KanjisController {
  constructor(private readonly kanjisService: KanjisService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Kanji[]> {
    return this.kanjisService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  find(@Param('id') id: number): Promise<Kanji> {
    return this.kanjisService.findOne(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createKanjiDto: CreateKanjiDto): Promise<Kanji> {
    return this.kanjisService.create(createKanjiDto);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: number,
    @Body() updateKanjiDto: UpdateKanjiDto,
  ): Promise<void> {
    this.kanjisService.update(id, updateKanjiDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    this.kanjisService.delete(id);
  }

  @Post('findAllByKana')
  @HttpCode(HttpStatus.OK)
  findAllByCompanyId(@Body() data): Promise<Kanji[]> {
    return this.kanjisService.findAllByKana(data['kana']);
  }
}
