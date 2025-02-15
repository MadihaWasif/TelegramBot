import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
import { SubscriptionModule } from './subscribe/subscribe.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/weather-bot'),
    WeatherModule,
    SubscriptionModule,
    AdminModule,],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
