import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule]
})
export class AppModule {}
