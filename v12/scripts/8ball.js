var fs = require('fs');
const { MessageEmbed } = require('discord.js');
const prefix = "your prefix here"; // const { prefix } = require('your prefix location')

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
                    "yes" //,
                    // add more responses here
                    // the last response should not contain a comma
                ];
                let response =
                responses[Math.floor(Math.random() * responses.length)];
                let titles = [
                    "8ball",
                    "8ball command!" //,
                    // add more titles here
                    // the last title should not contain a comma
                ];
                let title = titles[Math.floor(Math.random() * titles.length)];

                let embed = new MessageEmbed()
                    .setTitle(title)
                    .setDescription(response)
                    .setColor('RANDOM')
                    .setTimestamp();
                    message.channel.send(embed);
            }
    },
};