const { MessageEmbed } = require('discord.js');
const prefix = "your-prefix-here"; // const { prefix } = require('your prefix location')

module.exports = {
    name: "8ball",
    description: "enter description here",
    category: "fun",
    execute(client, message, args) {
        let question = message.content.slice(prefix.length + 6);
        if (!question)
            return message.channel.send(`**<@${message.author.id}>, please ask a question.**`)
            else {
                let responses = [
                    "sure",
                    "no",
                    "yes" // <-- Add responses here
                ];
                let response =
                responses[Math.floor(Math.random() * responses.length)];
                let titles = [
                    "8ball",
                    "8ball command!"
                ];
                let embed = new MessageEmbed()
                    .setTitle('8 ball command!')
                    .setDescription(response)
                    .setColor('RANDOM')
                    .setTimestamp();
                    message.channel.send(embed);
            }
    },
};