const Discord = require('discord.js');
let { prefix } = require('./prefix.json');
let { red, green, yellow, orange, aqua, cyan, lightcyan, random_color, purple, pink } = require('./colors.json');

module.exports = {
    name: "number",
    execute(client, message, args) {
        let number = Math.floor(Math.random() * 1000);
        let embed = new Discord.MessageEmbed()
            .setColor(random_color) // red, green, yellow, orange, aqua, cyan, lightcyan, random_color, purple, pink
            .setTitle('Random Number')
            .setDescription(number)
            .setFooter(number + ` | ${message.author.tag} ${prefix}number`)
            .setTimestamp();
        message.channel.send(embed);
    },
};