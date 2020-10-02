import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 10000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Listening at port ${port}`);
}
bootstrap();
