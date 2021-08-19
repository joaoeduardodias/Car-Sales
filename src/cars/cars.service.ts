import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

interface IRequest {
  brand?: string;
  model?: string;
  version?: string;
  mileage?: string;
  type_of_exchange?: string;
  year?: string;
  sale_price: string;
}

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

  async findAll({
    brand,
    mileage,
    model,
    type_of_exchange,
    version,
    year,
    sale_price,
  }: IRequest): Promise<Car[]> {
    // range
    if (year) {
      if (brand) {
        return await this.carModel.find({ brand }).sort({ year: year });
      }
      if (mileage) {
        return await this.carModel.find({ mileage }).sort({ year: year });
      }
      if (model) {
        return await this.carModel.find({ model }).sort({ year: year });
      }
      if (type_of_exchange) {
        return await this.carModel
          .find({ type_of_exchange })
          .sort({ year: year });
      }
      if (version) {
        return await this.carModel.find({ version }).sort({ year: year });
      }

      return await this.carModel.find().sort({ year: year });
    }
    if (sale_price) {
      if (brand) {
        return await this.carModel
          .find({ brand })
          .sort({ sale_price: sale_price });
      }
      if (mileage) {
        return await this.carModel
          .find({ mileage })
          .sort({ sale_price: sale_price });
      }
      if (model) {
        return await this.carModel
          .find({ model })
          .sort({ sale_price: sale_price });
      }
      if (type_of_exchange) {
        return await this.carModel
          .find({ type_of_exchange })
          .sort({ sale_price: sale_price });
      }
      if (version) {
        return await this.carModel
          .find({ version })
          .sort({ sale_price: sale_price });
      }

      return await this.carModel.find().sort({ sale_price: sale_price });
    }
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
