var fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { random_color, red, green, yellow, orange, aqua, lightcyan, cyan, purple, pink } = require('../config/colors/colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Sends information about yourself'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor(random_color) // random_color, red, green, yellow, orange, aqua, lightcyan, cyan, purple, pink
            .setTitle('Your information can be found below')
            .addFields(
                { name: "Your username", value: `${interaction.user.tag}` + " " + "😎", inline: true },
                { name: "Your ID", value: `${interaction.user.id}` + " " +"🎉", inline: false }, 
                { name: "Created at", value: `${interaction.user.createdAt}` + " " + "📑", inline: false },
            )
            .setFooter(`Command executed by ${interaction.user.tag}`)
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    },
};