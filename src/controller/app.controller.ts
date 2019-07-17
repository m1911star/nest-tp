import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHelloAll(): string {
    return this.appService.getHello();
  }

  @Get('query')
  async findAll(): Promise<any []> {
    return []
  }
}
