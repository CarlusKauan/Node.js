// require (module)
const os = require('os');
const log = require('./logger')

// string global 
const str = "=+"

// setInterval, vai executar a função repetidamente em um determinado tempo
setInterval(() => {
    // extraindo funções do module (os)
    const {
        freemem,
        totalmem
    } = os
 
    // memory ram
    const mem = parseInt(freemem() / 1024 / 1024)
    // total memory 
    const total = parseInt(totalmem() / 1024 / 1024)
    // percent memory used
    const percent = parseInt((mem / total) * 100);

    const stats = {
        freemem: `${mem} MB`,
        total: `${total} MB`,
        usaged: `${percent}%`
    }

    console.clear()
    console.log(`Hello, \nthis program checks the total ram memory in use !`)

    console.table(stats)
    console.log("freemem: free memory 'ram'")
    console.log("total: total memory 'ram'")
    console.log("percent: percent memory 'ram' used")
    
    log(`${JSON.stringify(stats)}\n`)
}, 1000);