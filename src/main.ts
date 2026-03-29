import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors();

  // Render provides the PORT automatically
  const port = process.env.PORT || 5000;

  await app.listen(port, '0.0.0.0');

  Logger.log(`🚀 Server running on port ${port}`, 'Bootstrap');
}
bootstrap();
