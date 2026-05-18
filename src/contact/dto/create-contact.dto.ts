import { IsNotEmpty, IsString, MaxLength, IsEmail, IsOptional, IsInt, Min, IsDateString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'El nombre es requerido.' })
  @IsString({ message: 'El nombre debe ser un texto válido.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  Nombre!: string;

  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail({}, { message: 'Debe ingresar un formato de correo electrónico válido.' })
  @MaxLength(100, { message: 'El correo electrónico no puede superar los 100 caracteres.' })
  Email!: string;

  @IsOptional()
  @IsString({ message: 'El teléfono debe ser un formato de texto válido.' })
  @MaxLength(20, { message: 'El teléfono no puede superar los 20 caracteres.' })
  Telefono?: string;

  @IsNotEmpty({ message: 'El tipo de pedido es requerido.' })
  @IsString({ message: 'El tipo de pedido debe ser un texto válido.' })
  @MaxLength(100, { message: 'El tipo de pedido no puede superar los 100 caracteres.' })
  Tipo_Pedido!: string;

  @IsNotEmpty({ message: 'El detalle del pedido no puede estar vacío.' })
  @IsString({ message: 'El detalle del pedido debe poseer un formato de texto.' })
  Detalle_Pedido!: string;

  @IsNotEmpty({ message: 'La calle es requerida para la entrega.' })
  @IsString({ message: 'La calle debe ser un texto válido.' })
  @MaxLength(100, { message: 'La calle no puede superar los 100 caracteres.' })
  Calle!: string;

  @IsNotEmpty({ message: 'El número de domicilio es requerido.' })
  @IsString({ message: 'El número de domicilio debe ser un formato de texto válido.' })
  @MaxLength(100, { message: 'El número de domicilio no puede superar los 100 caracteres.' })
  Num!: string;

  @IsNotEmpty({ message: 'El código postal es requerido.' })
  @IsString({ message: 'El código postal debe ser un formato de texto válido.' })
  @MaxLength(100, { message: 'El código postal no puede superar los 100 caracteres.' })
  CP!: string;

  @IsNotEmpty({ message: 'La fecha de entrega es requerida.' })
  @IsDateString({}, { message: 'Debe ingresar una fecha de entrega con formato válido (ISO 8601).' })
  Fecha_Entrega!: string;

  @IsNotEmpty({ message: 'El presupuesto estimado es requerido.' })
  @IsInt({ message: 'El presupuesto debe ser un número entero válido.' })
  @Min(0, { message: 'El presupuesto no puede ser un valor negativo.' })
  Presupuesto!: number;
}