module.exports = {
  command: ['joke'],
  handler: async (msg, _, bot) => {
    bot.sendMessage(msg.chat.id, 'Kenapa programmer ga bisa pacaran? Karena dia terus debugging cintanya.');
  }
};