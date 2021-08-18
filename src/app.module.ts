import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://joaoeduardodias:ge2parque63@cursonestjs.2e3ki.mongodb.net/carSales?authSource=admin&replicaSet=atlas-9wlsfb-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    ),
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
