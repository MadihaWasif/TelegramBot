import { Schema } from 'mongoose';

export const WeatherSchema = new Schema({
  temp: Number,
  condition: String,
  date: { type: Date, default: Date.now },
});
