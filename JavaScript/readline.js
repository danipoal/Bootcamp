const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Introduce el numero? ', (n) => {
    const num = parseInt(n, 10);

    switch (num) {
        case 1:
            console.log("uno");
    
        break;
        case 2:
            console.log("dos");
    
        break;
        case 3:
            console.log("tres");
    
        break;
        case 4:
            console.log("cuatro");
    
        break;
        case 5:
            console.log("cinco");
    
        break;
    
    
        default:
            console.log("Error");
            break;
    }
});

