import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Contactos') // Asegúrate de que este sea el nombre exacto de tu tabla en SQL Server
export class Contact {
  @PrimaryGeneratedColumn({ name: 'id_contacto' })
  id_Contactos!: number;

  @Column({ type: 'varchar', length: 100, name: 'Nombre' })
  Nombre!: string;

  @Column({ type: 'varchar', length: 100, name: 'Email' })
  Email!: string;

  @Column({ type: 'varchar', length: 20, name: 'Telefono', nullable: true })
  Telefono?: string;

  @Column({ type: 'varchar', length: 100, name: 'Tipo_Pedido' })
  Tipo_Pedido!: string;

  @Column({ type: 'text', name: 'Detalle_Pedido' })
  Detalle_Pedido!: string;

    @Column({ type: 'varchar', length: 100, name: 'Calle' })
  Calle!: string;

  @Column({ type: 'varchar', length: 100, name: 'Num' })
  Num!: string;

    @Column({ type: 'varchar', length: 100, name: 'CP' })
  CP!: string;

  @Column({ type: 'varchar', length: 100, name: 'Ciudad' })
  Ciudad!: string;

  @Column({ 
    type: 'datetime', 
    name: 'Fecha_Entrega', 
    default: () => 'GETDATE()' 
  })
  Fecha_Entrega!: Date;

    @Column({ type: 'int', name: 'Presupuesto' })
  Presupuesto!: number;
}