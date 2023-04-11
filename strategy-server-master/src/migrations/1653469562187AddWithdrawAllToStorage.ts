import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWithdrawAllToStorage1653469562187
  implements MigrationInterface
{
  name = 'AddWithdrawAllToStorage1653469562187';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TYPE "public"."operations_type_enum" RENAME TO "operations_type_enum_old"',
    );
    await queryRunner.query(
      "CREATE TYPE \"public\".\"operations_type_enum\" AS ENUM('STRATEGY_RUN', 'CLAIM_RUN', 'WITHDRAW_ALL_TO_STORAGE')",
    );
    await queryRunner.query(
      'ALTER TABLE "operations" ALTER COLUMN "type" TYPE "public"."operations_type_enum" USING "type"::"text"::"public"."operations_type_enum"',
    );
    await queryRunner.query('DROP TYPE "public"."operations_type_enum_old"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TYPE "public"."operations_type_enum_old" AS ENUM(\'STRATEGY_RUN\', \'CLAIM_RUN\')',
    );
    await queryRunner.query(
      'ALTER TABLE "operations" ALTER COLUMN "type" TYPE "public"."operations_type_enum_old" USING "type"::"text"::"public"."operations_type_enum_old"',
    );
    await queryRunner.query('DROP TYPE "public"."operations_type_enum"');
    await queryRunner.query(
      'ALTER TYPE "public"."operations_type_enum_old" RENAME TO "operations_type_enum"',
    );
  }
}
