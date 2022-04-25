const express = require('express')
const app = express()
const port = 3000

app.use('/api', require('./api/index').router
    // Insert here the sub route (.use like above)
    )


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})