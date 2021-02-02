const express = require('express')
const ctrl = require('./controller.js')

const app = express ()

app.use(express.json())

app.get('/api/characters', ctrl.readCharacters)
app.post('/api/characters', ctrl.addCharacter)
app.put('/api/characters/:id', ctrl.updateCharacter)
app.delete('/api/characters/:id', ctrl.deleteCharacter)

const port = 4000

app.listen(port, () => console.log(`Listening on port ${port}`))