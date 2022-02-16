import { Kanji } from '../kanji.entity'

export class CreateKanjiDto implements Kanji {
  id: number;
  katakana: string;
  kanji: string;
  mean_id: number;
  created: Date;
  updated: Date;
}