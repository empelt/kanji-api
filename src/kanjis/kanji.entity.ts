import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Mean } from '../means/mean.entity';

@Entity({ name: 'Kanji' })
export class Kanji {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  katakana: string;

  @Column()
  kanji: string;

  @Column({ type: 'timestamp' })
  created?: Date;

  @Column({ type: 'timestamp' })
  updated: Date;

  @OneToMany((type) => Mean, (mean) => mean.kanji)
  means?: Mean[];
}
