import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ name: 'number_of_modes', nullable: true })
  numberOfModes!: number;

  @Column({ default: true })
  active!: boolean;

  @Column({ name: 'created_at'})
  createdAt!: Date;
}