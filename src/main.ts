import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import config from '@/config/config';
import { HttpExceptionFilter } from '@/filters/http-exception.filter';
import { ResponseInterceptor } from '@/filters/response.interceptor';
import { Logger } from '@/utils/logger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('server');

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger,
  });

  app.enableCors();
  app.setGlobalPrefix(config.server.prefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(config.server.port);
}
bootstrap();
