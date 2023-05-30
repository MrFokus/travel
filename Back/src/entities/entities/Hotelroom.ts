import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hotel } from "./Hotel";
import { Photo } from "./Photo";
import { Sale } from "./Sale";

@Index("includes_fk", ["hotelId"], {})
@Index("pk_hotelroom", ["id"], { unique: true })
@Index("hotelroom_pk", ["id"], { unique: true })
@Entity("hotelroom", { schema: "public" })
export class Hotelroom {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "hotel_id" })
  hotelId: number;

  @Column("character varying", { name: "name", length: 200 })
  name: string;

  @Column("character varying", { name: "description", length: 1000 })
  description: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelrooms, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "hotel_id", referencedColumnName: "id" }])
  hotel: Hotel;

  @OneToMany(() => Photo, (photo) => photo.hotelRoom)
  photos: Photo[];

  @OneToMany(() => Sale, (sale) => sale.hotelRoom)
  sales: Sale[];
}
