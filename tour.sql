/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     21.03.2023 0:12:27                           */
/*==============================================================*/


drop index located_FK;

drop index City_PK;

drop table City;

drop index Country_PK;

drop table Country;

drop index is_located_FK;

drop table Hotel;

drop index rides_with_FK;

drop index Passenger_PK;

drop table Passenger;

drop index for_sale_FK;

drop index buys_FK;

drop index Sale_PK;

drop table Sale;

drop index is_present_FK;

drop index Relationship_4_FK;

drop index Tour_PK;

drop table Tour;

drop index Transport_PK;

drop table Transport;

drop index User_PK;

drop table "User";

drop index transport_passengers2_FK;

drop index transport_passengers_FK;

drop index transport_passengers_PK;

drop table transport_passengers;

/*==============================================================*/
/* Table: City                                                  */
/*==============================================================*/
create table City (
   id                   INT4                 not null,
   country_id           INT4                 not null,
   name                 VARCHAR(50)          not null,
   description          TEXT                 not null,
   constraint PK_CITY primary key (id)
);

/*==============================================================*/
/* Index: City_PK                                               */
/*==============================================================*/
create unique index City_PK on City (
id
);

/*==============================================================*/
/* Index: located_FK                                            */
/*==============================================================*/
create  index located_FK on City (
country_id
);

/*==============================================================*/
/* Table: Country                                               */
/*==============================================================*/
create table Country (
   id                   INT4                 not null,
   name                 VARCHAR(50)          not null,
   description          TEXT                 null,
   constraint PK_COUNTRY primary key (id)
);

/*==============================================================*/
/* Index: Country_PK                                            */
/*==============================================================*/
create unique index Country_PK on Country (
id
);

/*==============================================================*/
/* Table: Hotel                                                 */
/*==============================================================*/
create table Hotel (
   city_id              INT4                 not null,
   id                   INT4                 not null,
   name                 VARCHAR(50)          null,
   constraint PK_HOTEL primary key (id)
);

/*==============================================================*/
/* Index: is_located_FK                                         */
/*==============================================================*/
create  index is_located_FK on Hotel (
city_id
);

/*==============================================================*/
/* Table: Passenger                                             */
/*==============================================================*/
create table Passenger (
   id                   INT4                 not null,
   user_id              INT4                 not null,
   name                 VARCHAR(100)         not null,
   birthday             DATE                 not null,
   passport             VARCHAR(20)          not null,
   constraint PK_PASSENGER primary key (id)
);

/*==============================================================*/
/* Index: Passenger_PK                                          */
/*==============================================================*/
create unique index Passenger_PK on Passenger (
id
);

/*==============================================================*/
/* Index: rides_with_FK                                         */
/*==============================================================*/
create  index rides_with_FK on Passenger (
user_id
);

/*==============================================================*/
/* Table: Sale                                                  */
/*==============================================================*/
create table Sale (
   id                   INT4                 not null,
   tour_id              INT4                 not null,
   passenger_id         INT4                 not null,
   "from"               DATE                 not null,
   until                DATE                 not null,
   total_cost           FLOAT100             not null,
   constraint PK_SALE primary key (id)
);

/*==============================================================*/
/* Index: Sale_PK                                               */
/*==============================================================*/
create unique index Sale_PK on Sale (
id
);

/*==============================================================*/
/* Index: buys_FK                                               */
/*==============================================================*/
create  index buys_FK on Sale (
passenger_id
);

/*==============================================================*/
/* Index: for_sale_FK                                           */
/*==============================================================*/
create  index for_sale_FK on Sale (
tour_id
);

/*==============================================================*/
/* Table: Tour                                                  */
/*==============================================================*/
create table Tour (
   id                   INT4                 not null,
   city_id              INT4                 null,
   added                DATE                 not null,
   price                FLOAT10              not null,
   description          TEXT                 not null,
   name                 VARCHAR(100)         not null,
   id_hotel             INT4                 null,
   constraint PK_TOUR primary key (id)
);

/*==============================================================*/
/* Index: Tour_PK                                               */
/*==============================================================*/
create unique index Tour_PK on Tour (
id
);

/*==============================================================*/
/* Index: Relationship_4_FK                                     */
/*==============================================================*/
create  index Relationship_4_FK on Tour (
city_id
);

/*==============================================================*/
/* Index: is_present_FK                                         */
/*==============================================================*/
create  index is_present_FK on Tour (
id_hotel
);

/*==============================================================*/
/* Table: Transport                                             */
/*==============================================================*/
create table Transport (
   id                   INT4                 not null,
   name                 VARCHAR(40)          not null,
   "from"               VARCHAR(100)         not null,
   "where"              VARCHAR(100)         not null,
   price                FLOAT10              not null,
   constraint PK_TRANSPORT primary key (id)
);

/*==============================================================*/
/* Index: Transport_PK                                          */
/*==============================================================*/
create unique index Transport_PK on Transport (
id
);

/*==============================================================*/
/* Table: "User"                                                */
/*==============================================================*/
create table "User" (
   id                   INT4                 not null,
   login                VARCHAR(100)         not null,
   password             VARCHAR(100)         not null,
   mail                 VARCHAR(254)         not null,
   phone                VARCHAR(11)          not null,
   constraint PK_USER primary key (id)
);

/*==============================================================*/
/* Index: User_PK                                               */
/*==============================================================*/
create unique index User_PK on "User" (
id
);

/*==============================================================*/
/* Table: transport_passengers                                  */
/*==============================================================*/
create table transport_passengers (
   transport_id         INT4                 not null,
   tour_id              INT4                 not null,
   constraint PK_TRANSPORT_PASSENGERS primary key (transport_id, tour_id)
);

/*==============================================================*/
/* Index: transport_passengers_PK                               */
/*==============================================================*/
create unique index transport_passengers_PK on transport_passengers (
transport_id,
tour_id
);

/*==============================================================*/
/* Index: transport_passengers_FK                               */
/*==============================================================*/
create  index transport_passengers_FK on transport_passengers (
transport_id
);

/*==============================================================*/
/* Index: transport_passengers2_FK                              */
/*==============================================================*/
create  index transport_passengers2_FK on transport_passengers (
tour_id
);

alter table City
   add constraint FK_CITY_LOCATED_COUNTRY foreign key (country_id)
      references Country (id)
      on delete cascade on update cascade;

alter table Hotel
   add constraint FK_HOTEL_IS_LOCATE_CITY foreign key (city_id)
      references City (id)
      on delete cascade on update cascade;

alter table Passenger
   add constraint FK_PASSENGE_RIDES_WIT_USER foreign key (user_id)
      references "User" (id)
      on delete cascade on update cascade;

alter table Sale
   add constraint FK_SALE_BUYS_PASSENGE foreign key (passenger_id)
      references Passenger (id)
      on delete cascade on update cascade;

alter table Sale
   add constraint FK_SALE_FOR_SALE_TOUR foreign key (tour_id)
      references Tour (id)
      on delete cascade on update cascade;

alter table Tour
   add constraint FK_TOUR_ADDED_CITY foreign key (city_id)
      references City (id)
      on delete cascade on update cascade;

alter table Tour
   add constraint FK_TOUR_IS_PRESEN_HOTEL foreign key (id_hotel)
      references Hotel (id)
      on delete cascade on update cascade;

alter table transport_passengers
   add constraint FK_TRANSPOR_TRANSPORT_TRANSPOR foreign key (transport_id)
      references Transport (id)
      on delete cascade on update cascade;

alter table transport_passengers
   add constraint FK_TRANSPOR_TRANSPORT_TOUR foreign key (tour_id)
      references Tour (id)
      on delete cascade on update cascade;

