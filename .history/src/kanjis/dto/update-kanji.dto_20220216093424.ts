import { Kanji } from '../kanji.entity'

export class UpdateKanjiDto implements Kanji {
  katakana: string;
  kanji: string;
  mean_id: number;
  updated: Date;
}