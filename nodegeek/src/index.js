const express = require('express')

const app = express();

app.use(express.json());

// array -> geeks
const geeks = [];

// req ➔ representa todos os dados da requisição.
// res ➔ todas as informações necessárias para informar uma resposta para o front-end.

app.get('/geeks', (req, res) => {
    return res.json(geeks);
});

app.post('/geeks', checkGeekExists, (req, res) => {
    const {
        name
    } = req.body;
    geeks.push(name);
    return res.json(geeks);
});

app.put('/geeks/:index', checkGeekInArray, (req, res) => {
    const {
        index
    } = req.params;
    const {
        name
    } = req.body;

    geeks[index] = name;

    return res.status(200).json(geeks)
});

app.delete('/geeks/:index', (req, res) => {
    const {
        index
    } = req.params;

    geeks.splice(index, 1);

    return res.json({
        message: 'removido com sucesso'
    });
});

function checkGeekExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'geek name is required'
        });
        // middleware local que irá checar se a propriedade name foi informada corretamente,
        // caso negativo, irá retornar um erro 400 – BAD REQUEST
    }
    return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
}

function checkGeekInArray(req, res, next) {
    const geek = geeks[req.params.index];
    if (!geek) {
        return res.status(400).json({
            error: 'geek does not exists'
        });
    } // checa se o Geek existe no array, caso negativo informa que o index não existe no array

    req.geek = geek;

    return next();
}

app.listen(3000, (req, res) => console.log('🤓'))