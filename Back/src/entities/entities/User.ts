import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Passenger } from "./Passenger";
import { Sale } from "./Sale";

@Index("pk_user", ["id"], { unique: true })
@Index("user_pk", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "login", length: 100 })
  login: string;

  @Column("character varying", { name: "password", length: 100 })
  password: string;

  @Column("character varying", { name: "mail", length: 254 })
  mail: string;

  @Column("character varying", { name: "phone", length: 11 })
  phone: string;

  @Column("character varying", { name: "role", length: 50 })
  role: string;

  @OneToMany(() => Passenger, (passenger) => passenger.user)
  passengers: Passenger[];

  @OneToMany(() => Sale, (sale) => sale.user)
  sales: Sale[];
}
