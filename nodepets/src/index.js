const express = require('express') 

const app = express()
app.use(express.json())

const pets = []

app.get('/pets', (req, res) => {
    try {
        return res.json(pets)
        
    } catch (error) {
        return res.json(error)
    }
});

app.post('/pets', (req, res) => {
    try {
        const pet = { nome, categoria } = req.body
        pets.push(pet)
        return res.json(pets)
    } catch (error) {
        return res.json(error)
    }
});

app.delete('/pets/:index', (req, res) => {
    try {
        const { index } = req.params

        pets.splice(index, 1);
        return res.json({ message: 'removido com sucesso'})
    } catch (error) {
        return res.json(error)
    }
});

app.put('/pets/:index', (req, res) => {
    try {
        const { index } = req.params
        const { nome, categoria } = req.body
        pets[index] = { nome, categoria }
        return res.json(pets)
    } catch (error) {
        return res.json(error)
    }
});

app.listen(3000)