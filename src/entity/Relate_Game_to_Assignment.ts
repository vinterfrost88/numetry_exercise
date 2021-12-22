import { Entity, Column, ManyToOne } from 'typeorm';
import { Game } from './game';

@Entity()
export class Assignment {
  @Column()
  public gameId!: number;

  @Column()
  public assignmentId!: number;

  @ManyToOne(() => Game, (game) => game)
  public game!: Game;

  @ManyToOne(() => Assignment, (assignment) => assignment)
  public assignment!: Assignment;
}
