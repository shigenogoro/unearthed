/**
 * Store the controller functions to perform CRUD operations associated with the gifts table.
 */

import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        console.log(results)
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export default {
    getGifts
}