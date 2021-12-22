import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ name: 'start_period' })
  startPeriod!: Date;

  @Column({ name: 'end_period' })
  endPeriod!: Date;

  @Column({ default: true })
  active!: boolean;

  @Column({ name: 'created_at'})
  createdAt!: Date;
}