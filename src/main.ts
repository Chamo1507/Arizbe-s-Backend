import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // La URL exacta de tu proyecto de React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //credentials: true, // Por si manejas cookies o sesiones más adelante
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();