import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveysUsers1614253663868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "surveys_users",
        columns: [
          {
            name: "id",
            type: "int(11)",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "int(11)",
          },
          {
            name: "survey_id",
            type: "int(11)",
          },
          {
            name: "value",
            type: "int(11)",
            isNullable: true,
            default: null,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE", //Ao deletar na tabela pai, users, apaga dessa tabela também
            onUpdate: "CASCADE",
          },
          {
            name: "FKSurvey",
            referencedTableName: "surveys",
            referencedColumnNames: ["id"],
            columnNames: ["survey_id"],
            onDelete: "CASCADE", //Ao deletar na tabela pai, users, apaga dessa tabela também
            onUpdate: "CASCADE",
          },
        ],
      })

      //Caso utiliza a criação da FK fora do CreateTable, seria necessário colocar a deleção das FK's no down
      //Primeiro excluir todas as FK's no down, e depois apagar a tabela
      //await queryRunner.createForeignKey
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("surveys_users");
  }
}
