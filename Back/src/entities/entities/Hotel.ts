import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./City";
import { Hotelroom } from "./Hotelroom";
import { Tour } from "./Tour";

@Index("is_located_fk", ["cityId"], {})
@Index("hotel_pk", ["id"], { unique: true })
@Index("pk_hotel", ["id"], { unique: true })
@Entity("hotel", { schema: "public" })
export class Hotel {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "city_id" })
  cityId: number;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @Column("character varying", { name: "photo_url", length: 1000 })
  photoUrl: string;

  @ManyToOne(() => City, (city) => city.hotels, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: City;

  @OneToMany(() => Hotelroom, (hotelroom) => hotelroom.hotel)
  hotelrooms: Hotelroom[];

  @OneToMany(() => Tour, (tour) => tour.hotel)
  tours: Tour[];
}
