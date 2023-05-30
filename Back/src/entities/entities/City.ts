import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { Hotel } from "./Hotel";
import { Tour } from "./Tour";

@Index("has_fk", ["countryId"], {})
@Index("city_pk", ["id"], { unique: true })
@Index("pk_city", ["id"], { unique: true })
@Entity("city", { schema: "public" })
export class City {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "country_id" })
  countryId: number;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: Country;

  @OneToMany(() => Hotel, (hotel) => hotel.city)
  hotels: Hotel[];

  @OneToMany(() => Tour, (tour) => tour.city)
  tours: Tour[];
}
