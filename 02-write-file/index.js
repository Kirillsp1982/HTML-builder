const path = require('path');
const fs = require('fs');
const { stdout, stdin, exit } = require('process');
const ws = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Введите ваше сообщение:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Успехов в изучении NodeJS!');
    exit();
  }
  ws.write(data);
});

process.on('SIGINT', () => {
  stdout.write('Успехов в изучении JavaScript!');
  exit();
});