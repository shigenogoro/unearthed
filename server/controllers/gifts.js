/**
 * Store the controller functions to perform CRUD operations associated with the gifts table.
 */

import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

const getGiftsById = async(req, res) => {
    try {
        const selectQuery = `
            SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
            FROM gifts
            WHERE id=$1
        `
        const giftId = req.params.giftId

        const results = await pool.query(selectQuery, [giftId])
        res.status(200).json(results.rows[0])
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export default {
    getGifts,
    getGiftsById
}