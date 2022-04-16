// require module (events)
const EventEmitter = require('events')
// require module (files)
const fs = require('fs')
const path = require('path')

// instanciando um objeto de EventEmitter
const emitter = new EventEmitter()


emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

const log = (message) => {
    emitter.emit('log', message)
}

module.exports = log