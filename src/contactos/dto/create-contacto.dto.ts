import { IsString, IsEmail, IsNotEmpty, MaxLength, IsDateString } from 'class-validator';

export class CreateContactoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  telefono: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  tipo_pedido: string;

  @IsString()
  @IsNotEmpty()
  detalles: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  calle: string;

  // Aunque en BD sea INT, el formulario envía todo como string por defecto,
  // la tubería de validación de NestJS (ValidationPipe) con transform: true puede convertirlo a número.
  @IsNotEmpty()
  numero: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  codigo_postal: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  ciudad: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: string; // Se recibe como 'YYYY-MM-DD' desde el input type="date"

  @IsNotEmpty()
  presupuesto: number;
}
