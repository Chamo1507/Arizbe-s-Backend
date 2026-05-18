import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactosController } from './contactos/contactos.controller';
import { ContactosService } from './contactos/contactos.service';

@Module({
  imports: [],
  controllers: [AppController, ContactosController],
  providers: [AppService, ContactosService],
})
export class AppModule {}
