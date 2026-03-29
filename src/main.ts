import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors(); // ✅ allow all origins
  const port = process.env.PORT ?? 5000;
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application is running on: https://sample-api-9nzo.onrender.com`,
    'Bootstrap',
  );
}
bootstrap();
