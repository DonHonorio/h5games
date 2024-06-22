import pool from '@/lib/mysql-pool'

export default async function juegosFavoritos() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM games');
    return rows;
    // res.status(200).json(rows);

  } catch (error:any) {
    throw new Error('Error al obtener juegos favoritos: ' + error.message);
    // res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
}