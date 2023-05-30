import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hotelroom } from "./Hotelroom";
import { Tour } from "./Tour";
import { User } from "./User";

@Index("selected_fk", ["hotelRoomId"], {})
@Index("pk_sale", ["id"], { unique: true })
@Index("sale_pk", ["id"], { unique: true })
@Index("for_sale_fk", ["tourId"], {})
@Index("buys_fk", ["userId"], {})
@Entity("sale", { schema: "public" })
export class Sale {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "tour_id" })
  tourId: number;

  @Column("integer", { name: "user_id" })
  userId: number;

  @Column("integer", { name: "hotel_room_id" })
  hotelRoomId: number;

  @Column("date", { name: "from_date" })
  fromDate: string;

  @Column("date", { name: "until_date" })
  untilDate: string;

  @Column("real", { name: "total_cost", precision: 24 })
  totalCost: number;

  @ManyToOne(() => Hotelroom, (hotelroom) => hotelroom.sales, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "hotel_room_id", referencedColumnName: "id" }])
  hotelRoom: Hotelroom;

  @ManyToOne(() => Tour, (tour) => tour.sales, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "tour_id", referencedColumnName: "id" }])
  tour: Tour;

  @ManyToOne(() => User, (user) => user.sales, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
