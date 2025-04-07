const axios = require('axios');

module.exports = bot => {
  bot.on('message', async msg => {
    if (isCommand(msg.text, 'shorten')) {
      const url = msg.text.split(' ')[1];
      if (!url) return bot.sendMessage(msg.chat.id, 'Kirim link yang ingin dipendekkan!');

      try {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
        bot.sendMessage(msg.chat.id, `🔗 Link pendek: ${res.data.result.short_link}`);
      } catch (e) {
        bot.sendMessage(msg.chat.id, '❌ Gagal memperpendek link.');
      }
    }
  });
};