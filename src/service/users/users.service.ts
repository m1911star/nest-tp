import { Injectable, Inject, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(@Param('id') id): Promise<User> {
    return await this.userRepository.findOne(parseInt(id, 10));
  }
}