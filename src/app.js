const express = require('express')
const routes = require('./routes')

const app = express();
app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' })
})
app.use('/api', routes);

module.exports = app;