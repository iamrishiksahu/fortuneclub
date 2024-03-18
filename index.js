require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

require('./routes/routes.js')(app);


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}!`);
})