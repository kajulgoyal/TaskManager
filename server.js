const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 2540;

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(PORT, () => console.log('Server started'))
