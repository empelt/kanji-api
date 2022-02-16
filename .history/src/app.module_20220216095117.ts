import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KanjisModule } from './kanjis/kanjis.module';
import { MeansModule } from './means/means.module';

import { Kanji } from './kanjis/kanji.entity';
import { Mean } from './means/mean.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.84.43.179',
      port: 3306,
      username: 'root',
      password: 'techf0rward!',
      database: 'Kanji',
      entities: [Kanji, Mean],
      synchronize: false,
    }),
    KanjisModule,
    MeansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
