const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const helper = require('./helper');

helper.logStart();

const bot = new TelegramBot(config.TOKEN, {
	polling: true
});
let texts = ["Test.", "Testing..", "Tested..."];
let counter = 0;

setInterval(() => {
	bot.editMessageText(texts[counter], {chat_id: -1001077488163, message_id: 256}); // [-1001077488163, 256]);
	counter++;
	if (counter >= 3) counter = 0;
	console.log(counter+1);
}, 5000)

bot.on('message', msg => {
	bot.editMessageText("Tests...", {chat_id: -1001077488163, message_id: 256}); // [-1001077488163, 256]);
	console.log('Working ', msg);
})