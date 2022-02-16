import { Mean } from '../mean.entity'

export class CreateMeanDto implements Mean {
  id: number;
  mean: string;
  created: Date;
  updated: Date;
}