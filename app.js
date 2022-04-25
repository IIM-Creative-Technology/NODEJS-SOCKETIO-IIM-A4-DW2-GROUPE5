const express = require('express')
const app = express()
const Api = require("./api/index")
const port = 3000

app.use('/api', Api.router
    // Insert here the sub route (.use like above)
)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})