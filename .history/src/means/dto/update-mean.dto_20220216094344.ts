import { Mean } from '../mean.entity'

export class UpdateMeanDto implements Mean {
  mean: string;
  updated: Date;
}