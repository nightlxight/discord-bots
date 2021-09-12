const Discord = require('discord.js');
let prefix = "your bots command prefix here";

module.exports = {
    name: "number",
    execute(client, message, args) {
        let number = Math.floor(Math.random() * 1000);
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Random Number')
            .setDescription(number)
            .setFooter(number + ` | ${message.author.tag} ${prefix}number`)
            .setTimestamp();
        message.channel.send(embed);
    },
};