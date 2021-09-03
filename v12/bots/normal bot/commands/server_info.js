var fs = require('fs');
const { token, prefix, client_id, guild_id } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Gets information of the server.',
    execute(client, message, args) {
        let embed = new MessageEmbed()
            .setTitle('Server information')
            .setColor('RANDOM')
            .setDescription('Server information can be founded in below')
            .addFields(
                { name: 'Server Name', value: `${message.guild.name}`, inline: true},
                { name: "Total Members", value: `${message.guild.memberCount}`, inline: true},
                { name: 'Created at', value: `${message.guild.createdAt}`, inline: false},
                { name: 'AFK Channel', value: `${message.guild.afkChannel}`, inline: true},
                { name: 'Server ID', value: `${message.guild.id}`, inline: true},
                { name: 'Server Owner', value: `${message.guild.owner}`, inline: true},
                { name: 'Server Region', value: `${message.guild.region}`, inline: true},
                { name: 'Member Count', value: `${message.guild.memberCount}`, inline: true},
                { name: 'Verification Level', value: `${message.guild.verificationLevel}`, inline: true},
            )
            .setTimestamp()
            .setFooter(`Command executed by **${message.author.tag}**`);
            message.channel.send(embed);
    },
};