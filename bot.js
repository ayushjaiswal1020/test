const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('1785476005:AAFpmK-AlKL4UNLVCtuojubyHH20n_n4hxc');

bot.start((ctx) => {
 ctx.reply('hi');
})
bot.launch();