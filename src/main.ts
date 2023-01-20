import { NestFactory } from '@nestjs/core';
import { middleware } from './app.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  middleware(app);
  await app.listen(3000);
}
bootstrap();
