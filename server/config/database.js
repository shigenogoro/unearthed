import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

export const pool = new pg.Pool(config)