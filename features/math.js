module.exports = {
  command: ['calc'],
  handler: async (msg, text, bot) => {
    try {
      const expr = text.split(' ').slice(1).join(' ');
      const result = eval(expr);
      bot.sendMessage(msg.chat.id, `Hasil: \${result}`);
    } catch {
      bot.sendMessage(msg.chat.id, 'Error dalam perhitungan');
    }
  }
};