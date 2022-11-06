import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1667768925679 implements MigrationInterface {
  name = 'default1667768925679'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Comment" DROP CONSTRAINT "FK_4c827119c9554affb8018d4da82"`
    )
    await queryRunner.query(
      `ALTER TABLE "Comment" RENAME COLUMN "userId" TO "user_id"`
    )
    await queryRunner.query(
      `ALTER TABLE "Comment" ADD CONSTRAINT "FK_35807048116cf822fd0ef9c0299" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Comment" DROP CONSTRAINT "FK_35807048116cf822fd0ef9c0299"`
    )
    await queryRunner.query(
      `ALTER TABLE "Comment" RENAME COLUMN "user_id" TO "userId"`
    )
    await queryRunner.query(
      `ALTER TABLE "Comment" ADD CONSTRAINT "FK_4c827119c9554affb8018d4da82" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }
}
