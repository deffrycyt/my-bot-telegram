module.exports = {
  command: ['/start'],
  handler: async (msg, _, bot) => {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Ping', callback_data: 'ping' }],
          [{ text: 'Info', callback_data: 'info' }],
          [{ text: 'Random Quote', callback_data: 'quote' }]
        ]
      }
    };
    bot.sendMessage(msg.chat.id, `Hi ${msg.from.first_name}, welcome!`, options);
  }
};