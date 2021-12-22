import { MigrationInterface, QueryRunner } from 'typeorm';

export class Game1640044161796 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE game (
        id serial NOT NULL,
        name VARCHAR ( 150 ) NOT NULL,
        number_of_modes INT NOT NULL,
        active BOOLEAN NOT NULL DEFAULT TRUE,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ( id ) 
      )
    `);
    await queryRunner.query(`
      INSERT INTO game (name,number_of_modes) 
      VALUES ("game2",3),("game3",5)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM game `);
    await queryRunner.query(` DROP TABLE game `);
  }
}
