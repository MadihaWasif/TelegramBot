import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel('Subscription') private subscriptionModel: Model<any>) {}

  async subscribe(email: string) {
    const newSubscription = new this.subscriptionModel({ email });
    return await newSubscription.save();
  }
}
