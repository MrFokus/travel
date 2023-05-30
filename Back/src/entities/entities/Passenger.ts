import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("pk_passenger", ["id"], { unique: true })
@Index("passenger_pk", ["id"], { unique: true })
@Index("rides_with_fk", ["userId"], {})
@Entity("passenger", { schema: "public" })
export class Passenger {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id" })
  userId: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("date", { name: "birthday" })
  birthday: string;

  @Column("character varying", { name: "passport", length: 20 })
  passport: string;

  @ManyToOne(() => User, (user) => user.passengers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
