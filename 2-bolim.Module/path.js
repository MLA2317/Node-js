const path = require('node:path'); // path modulini import qilindi, path bn ishlashga imkon beradi
// console.log(__filename);
// path.parse(__filename); // node js failname obyekti global obyekt hisoblanadi. parse - bu obyekt qaytarib beradi

// const pathObj = path.parse(__filename);
// console.log(pathObj);

// basename - fail nomini qaytaradi
// const pathObj = path.basename(__filename);
// console.log(pathObj);

// join - bu "/" qoyib joylashtirib beradi failani
const pathObj = path.join(__filename);
console.log(pathObj);

// normalize - bu 'a//b/c' ni 'a/b/c' ga o'zgartiradi.
// const pathObj = path.normalize(__filename);
// console.log(pathObj);



