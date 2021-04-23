const express = require('express')

require('./db/mongoose')

const app = express()
const routes = require('./routes/image')

const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => {
    console.log(`server on port ${port}`)
})