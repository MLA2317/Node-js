// fs - bu modul fayl tizimi bilan ishlash uchun metoduslarni taqdim etadi. Bu modul yordamida siz fayllarni o'qish, yozish, ochish, yopish, o'chirish va boshqa 
// ko'plab amaliyotlarni amalga oshirishingiz mumkin. fs modulining asosiy maqsadi Node.js-dagi dasturlarni fayl tizimi bilan ishlashga imkon berishdir.

const fs = require('fs');
const files = fs.readdirSync('./'); // readdirSync - parametrni ichidagi faillarni qaytarib beradi
console.log(files);


fs.readdir('./2-bolim.Module', function(err, files){
    if(err)
        console.log(err);
    else
        console.log(files);
})


fs.readdir('asfvg', function(err, files){
    if(err)
        console.log(err);
    else
        console.log(files);
})



fs.readFile('./2-bolim.Module/fs.js', 'utf8', function(err, fileContent){
    if(err)
        throw err;

    console.log(fileContent);


    // Ma'lumotni yangilash
    const updateContent = fileContent + '\n// File System';

    fs.writeFile('./2-bolim.Module/', updateContent, 'utf8', function(err){
        if(err)
            throw err;
        console.log('Fayl ozgartirildi')
    });
});    

// File System
// File System
// File System
// File System



// writeFile - bu yengi fail create qilib beradi
// fs.writeFile('./2-bolim.Module/fail.js', 'Hello, World!', 'utf8', function(err) {
//     if(err) {
//         console.error(`Faylga yozishda xato ro'y berdi:`, err);
//         return;
//     }
//     console.log('Fayl muvaffaqiyatli yozildi!');
// });


// rename - fail nomini ozgartirib beradi

// fs.rename('./2-bolim.Module/fail.js', './2-bolim.Module/fails.js', (err) => {
//     if(err) throw err;
//     console.log('Rename complete!')
// });

// unlink - deleted fail

// fs.unlink('./2-bolim.Module/fails.js', (err) => {
//     if (err) throw err;
//     console.log('fail deleted');
// });



