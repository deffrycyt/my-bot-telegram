module.exports = bot => {
  bot.on('callback_query', query => {
    if (query.data === 'menu') {
      bot.editMessageText('Silakan pilih fitur di bawah ini:', {
        chat_id: query.message.chat.id,
        message_id: query.message.message_id,
        reply_markup: {
          inline_keyboard: [
            [{ text: '✨ Quote', callback_data: 'quote' }],
            [{ text: '🤣 Joke', callback_data: 'joke' }],
            [{ text: '📽 TikTok Downloader', callback_data: 'tiktok' }],
            [{ text: '🔗 Shorten URL', callback_data: 'shorten' }],
            [{ text: '⚙️ Developer Channel', url: 'https://t.me/yourchannel' }]
          ]
        }
      });
    }
  });
};