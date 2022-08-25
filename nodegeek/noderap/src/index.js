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

app.get('/raps/:rap_id', (req, res) => {
    const { rap_id } = req.params
    // filtragem do id
    const rap = raps.find((rap) => rap.id === rap_id);

    if(!rap) res.status(404).json('not found')

    return res.status(200).json(rap);
})

app.delete('/raps/:rap_id', (req, res) => {
    const { rap_id } = req.params;
    const filteredrap = raps.filter((rap) => rap.id !== rap_id )
    raps = filteredrap
    
    return res.status(204).json('deleted')
}); 

// listen
app.listen(3333, (req, res)=> {
    console.log('running')
})

