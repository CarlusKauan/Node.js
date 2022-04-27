const express = require('express')

const app = express()

app.use(express.json())

const warriors = [];



app.get('/warriors', (req, res) => {
    return res.json(warriors)
});

app.post('/warriors', checkWarriorsExists, (req, res ) => {

    const { name, style } = req.body;

    warriors.push( { name, style } )

    return res.json(warriors)

})

app.put('/warriors/:index', checkWarriorsInArray, (req, res) => {
    const { index } = req.params;
    const { name, style } = req.body;

    warriors[index] = { name, style };

    return res.status(200).json(warriors[index])

})

app.delete('/warriors/:index', checkWarriorsInArray, (req, res) => {
    const { index } = req.params;

    warriors.splice(index, 1);

    return res.json({
        message: 'remove'
    });
});

function checkWarriorsExists(req, res, next) {
    if(!req.body.name || !req.body.style){
        return res.status(400).json({
            message: 'warriors name and style is required'
        });
    }
    return next();
}


function checkWarriorsInArray(req, res, next){
    const warrior = warriors[req.params.index]

    if(!warrior) {
        return res.json({
            message: 'warriors does not exists'
        });
    }

    req.warriors = warrior;

    return next();
}


app.listen('3000', (req,res) => {
    console.log('⚔');
})


