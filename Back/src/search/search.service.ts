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
        WHERE countr.name ILIKE '${str}%'
        UNION
        SELECT cit.name AS name, 'city' AS table_name
        FROM city cit
        WHERE cit.name ILIKE '${str}%'
        UNION
        SELECT hot.name AS name, 'hotel' AS table_name
        FROM hotel hot
        WHERE hot.name ILIKE '${str}%';

      `)
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
