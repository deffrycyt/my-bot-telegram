module.exports = {
  command: ['tiktok'],
  handler: async (msg, text, bot) => {
    const url = text.split(' ')[1];
    if (!url) return bot.sendMessage(msg.chat.id, 'Berikan link TikTok');

    bot.sendMessage(msg.chat.id, `Unduh video dari: \${url}`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Tanpa Watermark', url }],
          [{ text: 'MP3', url }]
        ]
      }
    });
  }
};