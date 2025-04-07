const axios = require('axios');
module.exports = {
  command: ['quote'],
  handler: async (msg, _, bot) => {
    try {
      const res = await axios.get('https://api.quotable.io/random');
      bot.sendMessage(msg.chat.id, `"\${res.data.content}" — \${res.data.author}`);
    } catch {
      bot.sendMessage(msg.chat.id, 'Failed to fetch quote');
    }
  }
};