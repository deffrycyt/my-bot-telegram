const bot = require('../index');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    bot.processUpdate(req.body);
    return res.status(200).send('OK');
  }
  res.status(405).send('Method Not Allowed');
}
