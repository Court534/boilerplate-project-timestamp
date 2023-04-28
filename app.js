const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = exspress()
app.use(cors())

app.get('/', (req, res) => {
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
        res.json({ unix: date.getTime, date: toUTCString() })
    }
})