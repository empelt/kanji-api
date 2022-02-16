import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mean } from './mean.entity';
import { CreateMeanDto } from './dto/create-mean.dto';
import { UpdateMeanDto } from './dto/update-mean.dto';

@Injectable()
export class MeansService {
  constructor(
    @InjectRepository(Mean)
    private meansRepository: Repository<Mean>,
  ) {}

  async findAll(): Promise<Mean[]> {
    return this.meansRepository.find();
  }

  async findOne(id: number): Promise<Mean> {
    return this.meansRepository.findOne(id);
  }

  async create(data: CreateMeanDto): Promise<Mean> {
    const now = new Date();
    data.created = now;
    data.updated = now;
    return this.meansRepository.save(data);
  }

  async update(id: number, data: UpdateMeanDto): Promise<Mean> {
    const origin = await this.meansRepository.findOne(id);
    const now = new Date();
    origin.mean = data.mean;
    origin.updated = now;
    return this.meansRepository.save(origin);
  }

  async delete(id: number): Promise<void> {
    await this.meansRepository.delete(id);
  }
}
