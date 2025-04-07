require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });

const features = fs.readdirSync('./features').map(file => require(`./features/${file}`));

bot.on('message', async (msg) => {
  const text = msg.text?.toLowerCase();
  if (!text) return;

  for (let feature of features) {
    if (feature.command.some(cmd => text.startsWith(cmd))) {
      await feature.handler(msg, text, bot);
      break;
    }
  }
});

module.exports = bot;
