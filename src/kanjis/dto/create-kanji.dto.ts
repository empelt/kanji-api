import { Kanji } from '../kanji.entity'

export class CreateKanjiDto implements Kanji {
  id: number;
  katakana: string;
  kanji: string;
  created: Date;
  updated: Date;
}