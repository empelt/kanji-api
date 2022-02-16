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
import { CreateMeanDto } from './dto/create-mean.dto';
import { UpdateMeanDto } from './dto/update-mean.dto';
import { MeansService } from './means.service';
import { Mean } from './mean.entity';

@Controller('means')
export class MeansController {
  constructor(private readonly meansService: MeansService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Mean[]> {
    return this.meansService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  find(@Param('id') id: number): Promise<Mean> {
    return this.meansService.findOne(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMeanDto: CreateMeanDto): Promise<Mean> {
    return this.meansService.create(createMeanDto);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: number,
    @Body() updateMeanDto: UpdateMeanDto,
  ): Promise<void> {
    this.meansService.update(id, updateMeanDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    this.meansService.delete(id);
  }
}
