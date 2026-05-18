import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post()
  async create(@Body(new ValidationPipe({ transform: true })) createContactoDto: CreateContactoDto) {
    return await this.contactosService.create(createContactoDto);
  }
}
