const fs=require('fs');

fs.writeFileSync('hello.txt','First line');
fs.appendFileSync('hello.txt', '\nSecond line');