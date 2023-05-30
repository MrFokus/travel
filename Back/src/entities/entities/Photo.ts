import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hotelroom } from "./Hotelroom";

@Index("describes_fk", ["hotelRoomId"], {})
@Index("pk_photo", ["id"], { unique: true })
@Index("photo_pk", ["id"], { unique: true })
@Entity("photo", { schema: "public" })
export class Photo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "hotel_room_id" })
  hotelRoomId: number;

  @Column("character varying", { name: "photo_url", length: 1000 })
  photoUrl: string;

  @ManyToOne(() => Hotelroom, (hotelroom) => hotelroom.photos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "hotel_room_id", referencedColumnName: "id" }])
  hotelRoom: Hotelroom;
}
