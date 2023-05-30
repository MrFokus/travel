import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/entities/City';

@Injectable()
export class CityService {
  constructor(
      @InjectRepository(City)
      private cityRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.query("select country.name as country, city.name as city, city.photo as img from city\n" +
        "join country on city.country_id = country.id;");
  }

  findOne(id: number): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}