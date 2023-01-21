import { Logger as NestLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { middleware } from './app.middleware';
import { AppModule } from './app.module';

async function bootstrap(): Promise<string> {
  const isProduction = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  if (isProduction) {
    app.enable('trust proxy');
  }

  middleware(app);

  await app.listen(process.env.PORT || 1337);

  return app.getUrl();
}

(async (): Promise<void> => {
  try {
    const url = await bootstrap();

    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
