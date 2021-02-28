import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Survey } from "./Survey";
import { User } from "./User";

//Tabela pivô, relacionamento entre duas tabelas
@Entity("surveys_users")
class SurveyUser {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Survey)
  @JoinColumn({ name: "survey_id" })
  survey: Survey;

  @Column({ default: null, nullable: true })
  value: number;

  @CreateDateColumn()
  created_at: Date;
}

export { SurveyUser };
