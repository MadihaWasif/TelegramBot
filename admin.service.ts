import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from './admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async findByGoogleId(googleId: string): Promise<Admin | null> {
    return this.adminModel.findOne({ googleId }).exec();
  }

  async findByEmail(email: string): Promise<Admin | null> {
    return this.adminModel.findOne({ email }).exec();
  }

  async createAdmin(adminData: any): Promise<Admin> {
    const newAdmin = new this.adminModel(adminData);
    return newAdmin.save();
  }

  async getAllAdmins(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async deleteAdmin(id: string): Promise<Admin | null> {
    return this.adminModel.findByIdAndDelete(id).exec();
  }
}
