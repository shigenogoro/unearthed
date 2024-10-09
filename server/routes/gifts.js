import express from 'express'
import GiftsContorller from '../controllers/gifts.js'

const router = express.Router()

router.get('/', GiftsContorller.getGifts)

router.get('/:giftId', GiftsContorller.getGiftsById)

export default router