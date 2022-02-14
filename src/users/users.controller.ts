import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteByUser(id);
  }

  @Patch('/:id/pw')
  updateUserPw(@Param('id') id: string, @Body('pw') pw: string): User {
    return this.usersService.updateUserPw(id, pw);
  }
}
