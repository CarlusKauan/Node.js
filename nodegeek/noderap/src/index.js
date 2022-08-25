const express = require('express')
// rodando app
const app = express()

// api interpreta .json
app.use(express.json())

// fake database
let raps = [];


// routes
app.post('/raps', (req, res) => {
    // body 
    const { id, name, author } = req.body
    // criando objeto
    const rap = {id, name, author}
    // adicionando a array
    raps.push(rap)
    // return rap
    return res.status(201).json(rap)
});

app.get('/raps', (req, res) => { 
    const allraps = raps
    return res.status(200).json(allraps)
});

// listen
app.listen(3333, (req, res)=> {
    console.log('running')
})

