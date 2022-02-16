import { Mean } from '../mean.entity'

export class UpdateMeanDto implements Mean {
  mean: string;
  kanji_id: number;
  updated: Date;
}