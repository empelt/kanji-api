import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kanji } from './kanji.entity';
import { CreateKanjiDto } from './dto/create-kanji.dto';
import { UpdateKanjiDto } from './dto/update-kanji.dto';

@Injectable()
export class KanjisService {
  constructor(
    @InjectRepository(Kanji)
    private kanjisRepository: Repository<Kanji>,
  ) {}

  async findAll(): Promise<Kanji[]> {
    return this.kanjisRepository.find();
  }

  async findOne(id: number): Promise<Kanji> {
    return this.kanjisRepository.findOne(id);
  }

  async create(data: CreateKanjiDto): Promise<Kanji> {
    const now = new Date();
    data.created = now;
    data.updated = now;
    return this.kanjisRepository.save(data);
  }

  async update(id: number, data: UpdateKanjiDto): Promise<Kanji> {
    const origin = await this.kanjisRepository.findOne(id);
    const now = new Date();
    origin.kanji = data.kanji;
    origin.katakana = data.katakana;
    origin.mean_id = data.mean_id;
    origin.updated = now;
    return this.kanjisRepository.save(origin);
  }

  async delete(id: number): Promise<void> {
    await this.kanjisRepository.delete(id);
  }
}
