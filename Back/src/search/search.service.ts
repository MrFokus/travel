import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Country} from "../entities/entities/Country";

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>,
    ) {
    }

    // create() {
    //   return 'This action adds a new search';
    // }

    async search(str) {
        return await this.countryRepository.query(`
        SELECT countr.name AS name, 'country' AS table_name
        FROM country countr
        WHERE countr.name ILIKE '%${str}%'
        UNION
        SELECT cit.name AS name, 'city' AS table_name
        FROM city cit
        WHERE cit.name ILIKE '%${str}%'
        UNION
        SELECT hot.name AS name, 'hotel' AS table_name
        FROM hotel hot
        WHERE hot.name ILIKE '%${str}%'
        UNION
        SELECT T.name AS name, 'tour' AS table_name
        FROM Tour T
        JOIN City C ON T.city_id = C.id
        JOIN Country CO ON C.country_id = CO.id
        WHERE T.name ILIKE '%${str}%';


      `)
    }
    async searchTour(name, from, to){
        return await this.countryRepository.query(`
        SELECT T.*, H.name AS hotel_name, H.photo_url AS hotel_photo
        FROM Tour T
        JOIN Hotel H ON T.hotel_id = H.id
        WHERE T.name = '${name}'
        AND T.id NOT IN (
            SELECT S.tour_id
            FROM Sale S
        WHERE (S.from_date <= '${from}' AND S.until_date >= '${from}')
                OR (S.from_date <= '${to}' AND S.until_date >= '${to}')
                OR (S.from_date >= '${from}' AND S.until_date <= '${to}')
);
        `)
    }

    async searchDifferentResult(name) {
        return await this.countryRepository.query(`
        SELECT countr.id AS id, countr.name AS name, countr.photo AS photo, countr.description AS description, CAST(NULL AS TEXT) AS price, 'country' AS table_name
        FROM country countr
        WHERE countr.name ILIKE '%${name}%'
        UNION
        SELECT cit.id AS id, cit.name AS name, cit.photo AS photo, cit.description AS description, CAST(NULL AS TEXT) AS price, 'city' AS table_name
        FROM city cit
        WHERE cit.name ILIKE '%${name}%'
        UNION
        SELECT hot.id AS id, hot.name AS name, hot.photo_url AS photo, CAST(NULL AS TEXT) AS description, CAST(NULL AS TEXT) AS price, 'hotel' AS table_name
        FROM hotel hot
        WHERE hot.name ILIKE '%${name}%'
        UNION
        SELECT T.id AS id, T.name AS name, CO.photo AS photo, T.description AS description, CAST(T.price AS TEXT) AS price, 'tour' AS table_name
        FROM Tour T
        JOIN City C ON T.city_id = C.id
        JOIN Country CO ON C.country_id = CO.id
        WHERE T.name ILIKE '%${name}%';


        `)
    }

    async searchCity(name, from, to) {
        return await this.countryRepository.query(`
        SELECT T.*, 'tour' AS table_name,countr.photo AS photo
        FROM Tour T
        JOIN city cit ON T.city_id=cit.id
        JOIN country countr ON cit.country_id=countr.id
        WHERE T.city_id = (
            SELECT C.id
            FROM City C
            WHERE C.name = '${name}'
        )
        AND T.id NOT IN (
            SELECT S.tour_id
            FROM Sale S
            WHERE (S.from_date <= '${from}' AND S.until_date >= '${from}')
                OR (S.from_date <= '${to}' AND S.until_date >= '${to}')
                OR (S.from_date >= '${from}' AND S.until_date <= '${to}')
);
        `)
    }

    async searchHotels(name, from, to, peoples) {
        let res = await this.countryRepository.query(`
        SELECT DISTINCT r.id AS id, r.name AS name,r.description AS description, p.photo_url AS photo,r.price AS price, 'hotel_room' AS table_name
        FROM hotel h
        JOIN hotelroom r ON h.id = r.hotel_id
        JOIN photo p ON r.id = p.hotel_room_id
        WHERE r.id NOT IN (
          SELECT s.hotel_room_id
          FROM sale s
          WHERE (s.from_date, s.until_date) OVERLAPS ('${from}'::DATE, '${to}'::DATE)
        )
        AND h.name = '${name}'
        AND r.max_people>=${+peoples};
        `)
        console.log(res)
        let arrIdRoom=[]
        for (let i = 0; i < res.length; i++) {
            if(!arrIdRoom.some(el=>el.id === res[i].id)){
                arrIdRoom.push({
                    id:res[i].id,
                    name:res[i].name,
                    description:res[i].description,
                    photo:[res[i].photo],
                    price:res[i].price,
                })
            }
            else {
                for (let j = 0; j < arrIdRoom.length; j++) {
                    if(arrIdRoom[j].id===res[i].id){
                        arrIdRoom[j].photo.push(res[i].photo)
                    }
                }
            }
        }
        return arrIdRoom
        console.log(arrIdRoom)

    }

    //
    // findOne(id: number) {
    //   return `This action returns a #${id} search`;
    // }
    //
    // update(id: number, updateSearchDto: UpdateSearchDto) {
    //   return `This action updates a #${id} search`;
    // }
    //
    // remove(id: number) {
    //   return `This action removes a #${id} search`;
    // }
}
