import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel('Car')
    private carModel: Model<Car>,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = await this.carModel.create(createCarDto);
    return car;
  }

  async findAll(): Promise<Car[]> {
    return await this.carModel.find();
  }

  async findOne(id: string): Promise<Car> {
    return await this.carModel.findById({ _id: id });
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<void> {
    await this.carModel.findOneAndUpdate({ _id: id }, updateCarDto);
  }

  async remove(id: string): Promise<void> {
    await this.carModel.deleteOne({ _id: id });
  }
}
