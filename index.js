const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())

app.get('/api/timestamp/:date_string?', (req, res) => {
    const dateString = req.params.date_string

    let date
    if(!dateString) {
        date = new Date()
    } else {
        if (!NaN(dateString)) {
            date = new Date(parseInt(dateString))
        } else {
            date = new Date(dateString)
        }
    }

    if (isNaN(date.getTime())) {
        res.json({ error: 'Invalid Date!' })
    }   else {
        res.json({ unix: date.getTime(), utc: date.toUTCString() })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is now running on ${PORT}`)
})