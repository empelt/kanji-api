import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeansService } from './means.service';
import { MeansController } from './means.controller';
import { Mean } from './mean.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mean])],
  exports: [TypeOrmModule],
  providers: [MeansService],
  controllers: [MeansController],
})
export class MeansModule {}
