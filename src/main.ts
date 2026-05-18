// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Configuración de validaciones a nivel de red 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignora propiedades adicionales del JSON de red no declaradas en el DTO 
      forbidNonWhitelisted: true, // Rechaza y emite errores HTTP 400 si se detectan parámetros adicionales 
      transform: true, // Transforma automáticamente tipos primitivos de red en clases de tipado robusto [6, 20]
    }),
  );

  // 2. Activación global de políticas CORS y restricción de orígenes seguros [29, 32]
  const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
  app.enableCors({
    origin: allowedOrigin, // Solo admite llamadas originadas desde el servidor de desarrollo de React 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Restringe los verbos admitidos [30, 32]
    credentials: true, // Permite la transmisión de cabeceras seguras de red en caso de ser necesario 
    allowedHeaders: 'Content-Type, Authorization, Accept', // Cabeceras de red admitidas en la API 
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`Capa API NestJS operativa y escuchando en el puerto: ${port}`);
}
bootstrap();
