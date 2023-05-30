import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sale } from "./Sale";
import { City } from "./City";
import { Hotel } from "./Hotel";

@Index("included_fk", ["cityId"], {})
@Index("is_present_fk", ["hotelId"], {})
@Index("tour_pk", ["id"], { unique: true })
@Index("pk_tour", ["id"], { unique: true })
@Entity("tour", { schema: "public" })
export class Tour {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "city_id" })
  cityId: number;

  @Column("integer", { name: "hotel_id" })
  hotelId: number;

  @Column("date", { name: "added" })
  added: string;

  @Column("real", { name: "price", precision: 24 })
  price: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @OneToMany(() => Sale, (sale) => sale.tour)
  sales: Sale[];

  @ManyToOne(() => City, (city) => city.tours, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: City;

  @ManyToOne(() => Hotel, (hotel) => hotel.tours, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "hotel_id", referencedColumnName: "id" }])
  hotel: Hotel;
}
