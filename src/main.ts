import { NestFactory } from '@nestjs/core';
import { UserModule } from './modules/user.module';


async function bootstrap() {
  const port = 10000;
  const app = await NestFactory.create(UserModule);
  await app.listen(port);
  console.log(`Listening at port ${port}`);
}
bootstrap();
