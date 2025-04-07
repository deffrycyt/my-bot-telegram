module.exports = {
  command: ['help'],
  handler: async (msg, _, bot) => {
    const list = [
      '/ping',
      '/info',
      '/quote',
      '/tiktok [url]',
      '/calc 1+2',
      '/news',
      '/cuaca [kota]'
    ].join('\n');
    bot.sendMessage(msg.chat.id, `Perintah:\n\${list}`);
  }
};