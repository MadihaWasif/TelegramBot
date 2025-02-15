import { Controller, Post, Body } from '@nestjs/common';
import { SubscriptionService } from './subscribe.service';

@Controller('weather')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('subscribe')
  async subscribe(@Body('email') email: string) {
    await this.subscriptionService.subscribe(email);
    return { message: 'Subscribed successfully!' };
  }
}
