import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './../middlewares/logger.middleware';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UserModule } from './user.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27010/nutristuff')
  ],
  controllers: [],
  providers: [],
  exports:[] 
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('test');
  }
}
