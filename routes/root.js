const express = require('express')
const router = express.Router()

const rootRouter = (app) => {

    app.use('/',

        router.get('/', (req, res) => {
            res.status(200).send('Welcome to FortuneClub Backend! It is a secured server, providing advance layers of securities.')
        })
    )

    app.use('*', (req, res) => {
        res.status(404).send('Not Found!')
    })
}


module.exports = rootRouter