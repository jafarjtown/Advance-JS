const express = require('express')
const PORT = 5000
const {contacts} = require('./controllers/contactController')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/persons', require('./routes/contactRoute'))
app.get('/info', (req, res) => {
    res.send(`
    <p>Phonebook has info ${ contacts.length } people</p>
    <p>${ new Date() }</p>
    `)
})

app.listen(PORT, ()=> console.log('server started'))