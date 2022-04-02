import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../graphql';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({
      email,
    });
    const validPassword = await bcrypt.compare(password, user.password);
    if (user && validPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ...rest } = user;
      return rest;
    }
    return null;
  }
  async login(user: User) {
    return {
      msg: 'logged in!',
      user: user,
    };
  }
  async logout(user: User) {
    return {
      msg: 'logout!',
      user: user,
    };
  }
}
