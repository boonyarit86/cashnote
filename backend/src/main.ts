import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NODE_PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(NODE_PORT, () => {
    console.log(`Server is running on port ${NODE_PORT}`);
  });
}
bootstrap();
