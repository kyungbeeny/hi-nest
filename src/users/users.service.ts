import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private pk = 0;

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const date = new Date();
    const { u_id, u_pw } = createUserDto;
    const user: User = {
      u_index: this.pk++,
      u_id,
      u_pw,
    };
    this.users.push(user);
    return user;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.u_id === id);
  }

  deleteByUser(id: string): void {
    this.users = this.users.filter((user) => user.u_id !== id);
  }

  updateUserPw(id: string, pw: string): User {
    const user = this.getUserById(id);
    user.u_pw = pw;
    return user;
  }
}
