'use strict'

// let numberOfFilms = prompt('Skolko filmov vi posmotreli?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Odin iz filmov?', ''),
//     b = prompt('Ocenka?', ''),
//     c = prompt('Odin iz filmov?', ''),
//     d = prompt('Ocenka?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
//     console.log(personalMovieDB);


// let myAge = prompt('How old are you mtfckr?', '');

// if (myAge >= 60) {
//     alert('Right')
// } else {
//     alert('Fuck off!!!!!!!')
// }

// (myAge >= 60) ? alert('right') : alert('fuck off');

// let myAge = 50;
// let okay = prompt('what?')

// switch (okay) {
//     case '30': alert('not 30')
//     break;
//     case '50': alert('right')
//     break;
//     default: alert('aa')
// };

// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);

// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);


// let result = '';

// const leigh = 7;

// // for (let i = 1; i < leigh; i++) {
// //     for(let j = 0; j < i; j++) {
// //         result += '*'
// //     }

// //     result += '\n'
// // }

// console.log(result);

// for (let a = 5; a < 11; a++) {
//     console.log(a);
// };

// for (let b = 20; b > 9; b--) {
//     console.log(b)
// };

// for (let c = 2; c < 12; c++) {
//     if(c % 2) continue
//     console.log(c)
    
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let m = 2;
// while (m < 16) {
//     m++
//     if (m % 2 === 0) {
//         continue;
//     } else {
//         console.log(m);
//     }
// }


// function fifthTask() {
//     const arrayOfNumbers = [5, 6, 7, 8, 9, 10];

//     arrayOfNumbers[
//         0, 1, 2, 3, 4,
//         5, 6, 7, 8, 9
//     ]
    
//     // Не трогаем
//     return arrayOfNumbers;
// }

// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const risult = [];

// // for (let k = 0; k < arr.length; k++) {
// //     if (risult[k] = arr[k]) {
// //         console.log(risult)
// //     }
// // }

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const risult = [];

//     for (let k = 0; k < arr.length; k++) {
//         risult[k] = arr[k];
//     }

//     console.log(risult);
//     return risult;
// }


// let storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'Marina', 'John'],
//     products: {
//         coffee: 10,
//         cake: 12
//     },
//     open: true, 
// }



// const answers = [];

// answers[0] = prompt('What is your name?')
// answers[1] = prompt('What is your nick?')
// answers[2] = prompt('How old are you?')

// document.write(answers);

const numberOfFilms = prompt('Skolko filmov vi uje posmotreli?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}




for (let i = 0; i < 2; i++) {
    let aaa = prompt('Odin iz poslednix filmov?');
    let bbb = prompt('Na skolko ocenite ego?');
    if (aaa != null && bbb != null && aaa != '' && bbb != '' && aaa.length < 50 ) {
        
        personalMovieDB.movies[aaa] = bbb;
    } else {
        console.log('dadada')
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log(count['malo'])
}

    


console.log(personalMovieDB)

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i]
//     console.log(result)
// }