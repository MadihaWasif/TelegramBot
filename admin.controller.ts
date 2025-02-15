import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  async registerAdmin(@Body() adminData: any) {
    return this.adminService.createAdmin(adminData);
  }

  @Get('all')
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Delete('delete/:id')
  async deleteAdmin(@Param('id') id: string) {
    return this.adminService.deleteAdmin(id);
  }
}
