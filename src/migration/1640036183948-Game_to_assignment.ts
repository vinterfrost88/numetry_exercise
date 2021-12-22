import { MigrationInterface, QueryRunner } from 'typeorm';

export class Assigment1640036183948 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE relate_game_to_assignment (
      game_id INT NOT NULL,       
      assignment_id INT NOT NULL,       
      PRIMARY KEY ( game_id, assignment_id )     )
    `);

    await queryRunner.query(`INSERT INTO relate_game_to_assignment VALUES(1,2),(1,3),(2,2)
    `);

    await queryRunner.query(`SELECT rga.game_id, 
    rga.assignment_id,
     g.id AS 'game id', 
     g.name AS 'game name',
     g.number_of_modes,
     g.active AS 'game activation',
     g.created_at AS 'game creation',
     a.id AS 'assignment id',
     a.name AS 'assignment name'
    FROM relate_game_to_assignment rga
    JOIN game g ON rga.game_id = g.id
    JOIN assignment a ON rga.assignment_id = a.id
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM assignment `);
    await queryRunner.query(` DROP TABLE assignment `);
  }
}
