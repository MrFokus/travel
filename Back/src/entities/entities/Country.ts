import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./City";

@Index("pk_country", ["id"], { unique: true })
@Index("country_pk", ["id"], { unique: true })
@Entity("country", { schema: "public" })
export class Country {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
