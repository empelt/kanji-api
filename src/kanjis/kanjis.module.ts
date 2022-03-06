import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanjisService } from './kanjis.service';
import { MeansService } from '../means/means.service';
import { KanjisController } from './kanjis.controller';
import { Kanji } from './kanji.entity';
import { Mean } from '../means/mean.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kanji]),
    TypeOrmModule.forFeature([Mean]),
  ],
  exports: [TypeOrmModule],
  providers: [KanjisService,MeansService],
  controllers: [KanjisController],
})
export class KanjisModule {}
