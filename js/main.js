console.log('functions.js');

// function chickenMonkey(num) {
//     if (num % 5 === 0 && num % 7 === 0) {
//         return('ChickenMonkey');
//     } else if (num % 5 === 0) {
//         return 'Chicken';
//     } else if (num % 7 === 0) {
//         return 'Monkey';
//     } else {
//         return num
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(chickenMonkey(i));
// }

function chickenMonkey() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
            console.log('ChickenMonkey');
        } else if (i % 5 === 0) {
            console.log('Chicken');
        } else if (i % 7 === 0) {
            console.log('Monkey');
        } else {
            console.log(i)
        }
    } 
}

chickenMonkey();
    