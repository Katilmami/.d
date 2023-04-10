const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
let interval;
let messageCount = 0;

const messages = [
  "owo hunt", 
  "owo cash", 
  "owo battle",
  "owo cf 1",
  "owo kiss <@408785106942164992>",
  "owo hug <@408785106942164992>",
  "owo h",
  "owo kiss <@408785106942164992>"
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.id === process.env.ALLOWED_USER && message.content === 'Mxmw!baslatowo' && !interval) {
    interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      message.channel.send(randomMessage);
      console.log(`Mesaj gönderildi: ${randomMessage}`);
      messageCount++;
      if (messageCount === 11) {
        clearInterval(interval);
        interval = null;
        messageCount = 0;
        console.log('3 dakika boyunca duraklatıldı.');
        setTimeout(() => {
          interval = setInterval(() => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage);
            console.log(`Mesaj gönderildi: ${randomMessage}`);
          }, Math.floor(Math.random() * (18000 - 16000 + 1)) + 16000);
          console.log('3 dakikalık aradan sonra devam edildi.');
        }, 180000);
      }
    }, Math.floor(Math.random() * (18000 - 16000 + 1)) + 16000);
    console.log('Döngü başlatıldı.');
  } else if (message.author.id === process.env.ALLOWED_USER && message.content === 'Mxmw!stopowo' && interval) {
    clearInterval(interval);
    interval = null;
    messageCount = 0;
    console.log('Döngü durduruldu.');
    message.channel.send('Sohbet durduruldu.');
  }
});

client.login(process.env.TOKEN);
