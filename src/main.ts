import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { transform } from 'framer-motion';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      disableErrorMessages: false,
    },
  ));
  await app.listen(3000);
}
bootstrap();
