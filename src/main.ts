import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import config from '@/config/config';
import { HttpExceptionFilter } from '@/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix(config.server.prefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(config.server.port);
}
bootstrap();
