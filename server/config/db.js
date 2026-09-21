import pool from '../db.js';

export async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('[DB] PostgreSQL connected successfully');
    client.release();
  } catch (err) {
    console.error('[DB] PostgreSQL connection failed:', err.message);
  }
}

export async function query(text, params) {
  return pool.query(text, params);
}

export default pool;
