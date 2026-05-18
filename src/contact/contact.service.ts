// src/contact/contact.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>, // Inyección segura del repositorio [5, 21]
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    try {
      // Crea una copia de la entidad basada en los campos validados del DTO 
      const newContact = this.contactRepository.create(createContactDto);
      // Ejecuta la inserción relacional física asíncrona en SQL Server 
      return await this.contactRepository.save(newContact);
    } catch (error) {
      // Previene la divulgación de excepciones internas de base de datos
      throw new InternalServerErrorException('Ha ocurrido un error inesperado al almacenar el formulario de contacto.');
    }
  }
}