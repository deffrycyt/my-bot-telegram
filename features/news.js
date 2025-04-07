module.exports = {
  command: ['news'],
  handler: async (msg, _, bot) => {
    bot.sendMessage(msg.chat.id, 'Berita hari ini: https://news.google.com');
  }
};