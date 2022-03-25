const TelegramAPI = require('node-telegram-bot-api')

const token = '5227120210:AAGvlScLIMhL4ud3pUKEapx3hzn-3gj9OpU'

const bot = new TelegramAPI(token, { polling: true })

bot.on('message', (message) => console.log(message))