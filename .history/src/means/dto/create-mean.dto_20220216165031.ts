import { Mean } from '../mean.entity'

export class CreateMeanDto implements Mean {
  id: number;
  mean: string;
  kanji_id: number;
  created: Date;
  updated: Date;
}