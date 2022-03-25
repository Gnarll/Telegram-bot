const TelegramAPI = require('node-telegram-bot-api');

const token = '5227120210:AAGvlScLIMhL4ud3pUKEapx3hzn-3gj9OpU';

const bot = new TelegramAPI(token, { polling: true });

const chats = {};

bot.setMyCommands([
  { command: '/start', description: 'Greeting' },
  { command: '/info', description: "Get user's info" },
  { command: '/game', description: 'Try to guess the number...' },
]);

bot.on('message', async (message) => {
  const text = message.text;
  const chatID = message.chat.id;

  if (text === '/start') {
    await bot.sendSticker(chatID, 'https://tlgrm.ru/_/stickers/2fe/58e/2fe58ef4-0f8d-3f56-806a-6dbc73e849fb/3.webp');
    return bot.sendMessage(chatID, "Hello, master, let's start");
  }

  if (text === '/info') {
    return bot.sendMessage(chatID, `Your name is ${message.from.first_name} ${message.from.last_name}`);
  }

  if (text === '/game') {
    await bot.sendMessage(chatID, "Let's play a game. Try to guess a number from 0 to 9 I guessed");
    const randomNumber = Math.floor(Math.random() * 10);
    chats[chatID] = randomNumber;
    return bot.sendMessage(chatID, 'So what do you think?');
  }

  return bot.sendMessage(chatID, 'There is no such command');
});
