module.exports = {
  command: ['ping'],
  handler: async (msg, _, bot) => {
    bot.sendMessage(msg.chat.id, 'Pong!');
  }
};