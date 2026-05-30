import { Controller, Get, Post, Body, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get('me')
  async getProfile(@Request() req: any) {
    const user = await this.usersService.findOne(req.user.id);
    if (!user) throw new NotFoundException('User profile not found in database');
    return user;
  }

  @UseGuards(SupabaseAuthGuard)
  @Post()
  async createUser(@Request() req: any, @Body() body: any) {
    // Ideally this would be called by a Supabase trigger or right after frontend signup
    const userPayload = {
      id: req.user.id, // Enforce the JWT ID
      email: req.user.email,
      name: body.name || 'Unknown',
      role: body.role || 'investor',
      createdAt: new Date().toISOString(),
      ...body
    };
    return this.usersService.create(userPayload, req.headers.authorization);
  }
}
