import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { Contact } from '../entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])], // Registra la entidad para generar la abstracción del repositorio ,
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}