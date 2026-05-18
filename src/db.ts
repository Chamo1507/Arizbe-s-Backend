import * as sql from 'mssql';
import * as dotenv from 'dotenv';

dotenv.config();

const dbSettings: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Usar true para Azure, false para local (normalmente)
    trustServerCertificate: true, // Recomendado en true para desarrollo local
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    throw error;
  }
}
