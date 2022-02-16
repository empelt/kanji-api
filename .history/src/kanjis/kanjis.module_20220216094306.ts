import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanjisService } from './kanjis.service';
import { KanjisController } from './kanjis.controller';
import { Kanji } from './kanji.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kanji])],
  exports: [TypeOrmModule],
  providers: [KanjisService],
  controllers: [KanjisController],
})
export class KanjisModule {}