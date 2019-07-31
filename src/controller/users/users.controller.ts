import { Controller, Get, Param, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from '../../service/users/users.service';
import { User } from '@entity/user.entity';
import { Response } from 'express';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  getHelloAll(): Promise<any []> {
    return this.usersService.findAll();
  }

  @Get('hello')
  getHello(): string {
    return 'Hello Nest';
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.usersService.findUserById(id);
    if (result) {
      return res.status(HttpStatus.OK).json(result);
    } else {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal Error',
      }, 500);
    }
  }
}
