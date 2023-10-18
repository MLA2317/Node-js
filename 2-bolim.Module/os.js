// os - bu moduli operatsion tizim bilan bog'liq ma'lumotlarni taqdim etuvchi va uni so'rovchi metodlarni taqdim etadi.
// Ushbu modul tizimning umumiy ma'lumotlarini, CPU haqida ma'lumotlarni, xotira ma'lumotlarini va boshqa tizim ma'lumotlarini olish uchun ishlatiladi.
const os = require('node:os'); 
// const freeMem = os.freemem();
// const userInfo = os.userInfo();

// console.log(`Bo'sh xotira miqdori: ${freeMem} bayt.`);
// console.log(`Foydalanuvchi haqida ma'lumot: ${userInfo.username}`);

const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const usedMemInMB = (usedMem / (1024 * 1024)).toFixed(2);

console.log(`Band xotira miqdori: ${usedMemInMB} MB.`);