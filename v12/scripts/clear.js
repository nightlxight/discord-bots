var fs = require('fs');
const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'Clears messages.',
  async execute(client, message, args) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      const deleteCount = parseInt(args[0], 10);
      const deleteMessage = `Deleted **${deleteCount}** messages.`;

      if (!deleteCount || deleteCount > 100 || deleteCount < 2) return message.reply('The number should be between 2 and 100.');
      const fetched = await message.channel.messages.fetch({
        limit: deleteCount
      });
      message.channel.bulkDelete(fetched)
      .catch(err => message.channel.send(`Can't clear the messages because of: ${err}.`))
      .then(message.reply(deleteMessage));
    } else {
      message.reply("You don't have permission to use this command!");
    }
  },
};
