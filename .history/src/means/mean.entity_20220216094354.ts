import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Mean'})
export class Mean {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  mean: string;

  @Column({ type: 'timestamp'})
  created?: Date;

  @Column({ type: 'timestamp'})
  updated: Date;
}