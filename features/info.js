module.exports = {
  command: ['info'],
  handler: async (msg, _, bot) => {
    const info = `Name: ${msg.from.first_name}\nID: ${msg.from.id}`;
    bot.sendMessage(msg.chat.id, info);
  }
};