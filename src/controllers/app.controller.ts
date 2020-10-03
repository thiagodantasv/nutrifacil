import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getTest(): string{
    return this.appService.getTest();
  }

  @Get('/awesome')
  getTest2(): string{
    return this.appService.getTest2();
  }
}
