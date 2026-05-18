import { Injectable } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { getConnection } from '../db';
import * as sql from 'mssql';

@Injectable()
export class ContactosService {
  async create(createContactoDto: CreateContactoDto) {
    try {
      const pool = await getConnection();
      
      const query = `
        INSERT INTO Contactos (
          Nombre, Email, Telefono, Tipo_Pedido, Detalle_Pedido, 
          Calle, Num, CP, Ciudad, Fecha_Entrega, Presupuesto
        )
        VALUES (
          @Nombre, @Email, @Telefono, @Tipo_Pedido, @Detalle_Pedido, 
          @Calle, @Num, @CP, @Ciudad, @Fecha_Entrega, @Presupuesto
        );
      `;

      await pool.request()
        .input('Nombre', sql.VarChar(100), createContactoDto.nombre)
        .input('Email', sql.VarChar(255), createContactoDto.email)
        .input('Telefono', sql.VarChar(20), createContactoDto.telefono)
        .input('Tipo_Pedido', sql.VarChar(100), createContactoDto.tipo_pedido)
        .input('Detalle_Pedido', sql.Text, createContactoDto.detalles) // Mapeado a Detalle_Pedido
        .input('Calle', sql.VarChar(255), createContactoDto.calle)
        .input('Num', sql.Int, Number(createContactoDto.numero)) // Convertimos a número para asegurar el tipo INT
        .input('CP', sql.VarChar(10), createContactoDto.codigo_postal) // Mapeado a CP
        .input('Ciudad', sql.VarChar(100), createContactoDto.ciudad)
        .input('Fecha_Entrega', sql.DateTime, new Date(createContactoDto.fecha)) // Mapeado a Fecha_Entrega como DateTime
        .input('Presupuesto', sql.Decimal(10, 2), Number(createContactoDto.presupuesto))
        .query(query);

      return { success: true, message: 'Contacto e información de pedido guardados con éxito.' };
    } catch (error) {
      console.error('Error al insertar en la base de datos:', error);
      throw error;
    }
  }
}