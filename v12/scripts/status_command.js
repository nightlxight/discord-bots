const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'idle',
	description: 'Sets clients status to idle',
	execute(client, message, args) {
		if (message.author.id === 'your id') {
		message.channel.send("Set bot status to idle!")
		client.user.setStatus('idle') // online, idle, dnd, invisible
	  .then(console.log)
  	.catch(console.error);
	} else {
		message.channel.send("bot owner can use this command!");
	}
	},
};
