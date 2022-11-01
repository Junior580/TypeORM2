import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1667260594580 implements MigrationInterface {
  name = 'default1667260594580'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "comment" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "commentId" integer, CONSTRAINT "REL_be3ddb399a139e2d0709ca3f10" UNIQUE ("commentId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_be3ddb399a139e2d0709ca3f102" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_be3ddb399a139e2d0709ca3f102"`
    )
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TABLE "comment"`)
  }
}
