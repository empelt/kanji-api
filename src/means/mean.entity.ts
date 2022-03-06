import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Kanji } from '../kanjis/kanji.entity'

@Entity({name: 'Mean'})
export class Mean {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  mean: string;

  @Column()
  kanji_id: number;

  @Column({ type: 'timestamp'})
  created?: Date;

  @Column({ type: 'timestamp'})
  updated: Date;

  @ManyToOne((type) => Kanji, (kanji) => kanji.means)
  @JoinColumn({ name: 'kanji_id' })
  kanji?: Kanji;
}