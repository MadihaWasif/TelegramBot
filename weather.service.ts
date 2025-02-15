import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WeatherService {
  constructor(@InjectModel('Weather') private weatherModel: Model<any>) {}

  async getWeather() {
    // Fetch the latest weather update
    return this.weatherModel.findOne().sort({ date: -1 });
  }
}
