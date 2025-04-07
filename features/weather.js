module.exports = {
  command: ['cuaca'],
  handler: async (msg, text, bot) => {
    const kota = text.split(' ')[1] || 'Jakarta';
    bot.sendMessage(msg.chat.id, `Cuaca di \${kota} cerah berawan (contoh).`);
  }
};