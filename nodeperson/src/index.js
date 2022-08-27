const express = require('express') 
const app = express()

let persons = [];

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json(persons)
});

app.post('/', (req, res) => {
    const { id, name } = req.body
    persons.push({ id, name })

    return res.status(200).json(persons)
});

app.put('/:person_id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    persons[id] = { name };

    return res.status(200).json(persons[id])

})

app.delete('/:person_id', (req, res) => {
    const { id } = req.params

    persons.splice(id, 1)

    return res.json({ message: remove })
})

app.listen(3333, (req, res) => {
    console.log('running')
})







