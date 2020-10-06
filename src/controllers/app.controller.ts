import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { PostMethodDto }from './dto/postMethod.dto';

@Controller('/test')
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

  // Extract a single param from query
  @Get('/paramsTest/:number')
  getIdTest1(@Param() param: string): string{
    return this.appService.getId(param);
  }

  // Also extract a single param from the query, but this time, specifying which it is.
  @Get('/paramsTest2/:number')
  getIdTest2(@Param('number') param: string): string{
    return this.appService.getId(param);
  }

  // the difference between these two is the request: getIdTest1 is a object -> { number: '25' } while getIdTest2 is only a raw 25.
  // this makes me believe that the first method(getIdtTest1) is probably used or more efficient to multiple query params.

  @Get('/paramsTest3/:number/:name/:age')
  getIdTest3(@Param() params:number): string{
    return this.appService.getMultipleParams(params);
  }
  //getIdTest3 is an example of how we can get multiples params in one variable. the params is an object, and in the example he turns into -> {number:11, name:thiago, age: 23}

  //async
  //async always returns promises or observables
  @Get('/asyncTest')
  async getAsyncFunc(): Promise<any>{
    return await this.appService.getAsyncFunc();
  }

  //@Post decorator, for post requests.
  //it is necessary to create Data access objects to use post methods, because of a decorator called @Body, where he needs the dto.
  //post method is supposed to work like that.
  @Post('/postMethod')
  async postMethod(@Body() postMethodDto: PostMethodDto): Promise<string>{
    return this.appService.postMethod(postMethodDto);
  }

  //@Delete decorator, for delete requests.
  @Delete('/deleteMethod/:id')
  deleteMethod(@Param('id') id: string){
    return this.appService.deleteMethod(id);
  }

  //@Put decorator, for put requests.
  @Put('/putMethod/:id')
  putMethod(@Param('id') id: string){
    return this.appService.putMethod(id);
  }


}
