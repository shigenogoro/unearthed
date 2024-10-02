import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express()

/**
 * Define Middlewares
 */
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/gifts', giftsRouter)

/**
 * Define route for the root URL
 */
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align-center; margin-top: 50px;" >UnEarthed API</h1>')
})

// 404 Error
app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
})

/**
 * Start a server on port process.env.PORT or 3001
 */
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})