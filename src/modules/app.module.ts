import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './../middlewares/logger.middleware';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [], // the list of modules that export the providers needed in this module
  controllers: [AppController],
  providers: [AppService],
  exports:[] // exports added -> they are very important and useful. They define which providers this module provide and need to be available to others modules that import this module
})
export class AppModule implements NestModule{
  // what if i want to program something here ? What can i program here ?
  // one of the possible answers of that question is: Middleware.
  //What is a middleware ? -> 
  //Middleware is a function which is called before the route handler. 
  //Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle.
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('test');
}
}
