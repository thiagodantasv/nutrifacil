import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [], // the list of modules that export the providers needed in this module
  controllers: [AppController],
  providers: [AppService],
  exports:[] // exports added -> they are very important and useful. They define which providers this module provide and need to be available to others modules that import this module
})
export class AppModule {
  // what if i want to program something here ? What can i program here ?
}
