import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  getTest(): string{
    return 'hello test';
  }
  getTest2(): string{
    return 'hello test2';
  }

  getId(request:any): string{
    console.log(typeof request);
    console.log("who are you", request);
    return request;
  }

  getMultipleParams(param1){
    console.log(param1);
    return param1 ;
  }

  async getAsyncFunc(): Promise<any>{
    let promise = await new Promise(() => {
      console.log('async function only return promises');
      return "Hey, i only return promises";
    });
    return promise;
  }

  postMethod(request): string{
    console.log(request);
    
    return 'i am an working post, whenever i reach here, my response status will be 201 because of the post protocol, and i shall probably create something';
  }

  deleteMethod(request): string{
    console.log("Delete method");
    return `the ${request} id has been deactivated in our database!`;
  }

  putMethod(request): string{
    console.log('put method');
    return `the ${request} has been updated !`;
  }
}
