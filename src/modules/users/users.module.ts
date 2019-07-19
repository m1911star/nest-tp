import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../../providers/user.providers';
import { UsersService } from '../../service/users/users.service';
import { UsersController } from "../../controller/users/users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...userProviders,
    UsersService,
  ]
})
export class UsersModule {}