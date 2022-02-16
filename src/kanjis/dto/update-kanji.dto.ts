import { Kanji } from '../kanji.entity'

export class UpdateKanjiDto implements Kanji {
  katakana: string;
  kanji: string;
  updated: Date;
}