import { Schema } from 'mongoose';

export const SubscriptionSchema = new Schema({
  email: { type: String, required: true },
  subscribedAt: { type: Date, default: Date.now },
});
