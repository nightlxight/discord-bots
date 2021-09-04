var fs = require('fs');

module.exports = {
	name: 'catjam',
	description: 'Sends catJAM gif',
	execute(client, message, args) {
		let gifLink = "https://media.tenor.com/images/7645a8d8641078195b89b1b7f096c7b2/tenor.gif"
        message.channel.send(gifLink);
	},
};
