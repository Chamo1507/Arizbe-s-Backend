// src/contact/contact.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from '../entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Retorna un código HTTP 201 Created al culminar exitosamente la operación 
  async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return await this.contactService.create(createContactDto);
  }
}