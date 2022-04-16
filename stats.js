// require (module)
const os = require('os');

// setInterval, vai executar a função repetidamente em um determinado tempo
setInterval(() => {
    // extraindo funções do module (os)
    const { freemem, totalmem } = os
    // memory ram
    const mem =  parseInt(freemem() / 1024 / 1024)
    // total memory 
    const total = parseInt(totalmem() / 1024 / 1024)
    // percent memory used
    const percent = parseInt((mem / total) * 100);
    
    const stats = {
        freemem: `${mem}`,
        total: `${total}`,
        used: `${percent}%`
    }
    
    console.clear()
    console.table(stats)    
}, 1000);


