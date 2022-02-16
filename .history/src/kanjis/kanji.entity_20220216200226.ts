import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
