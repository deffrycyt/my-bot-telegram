const jokes = [
  'Kenapa programmer jarang mandi? Karena takut konflik.',
  'Bug adalah sahabat sejati, selalu ada.'
];

module.exports = bot => {
  bot.on('callback_query', query => {
    if (query.data === 'joke') {
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      bot.sendMessage(query.message.chat.id, `🤣 ${joke}`);
    }
  });

  bot.on('message', msg => {
    if (isCommand(msg.text, 'joke')) {
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      bot.sendMessage(msg.chat.id, `🤣 ${joke}`);
    }
  });
};