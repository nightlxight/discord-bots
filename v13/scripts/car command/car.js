var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { red, green, random_color, aqua, cyan, lightcyan, purple, orange, yellow, pink } = require('./colors.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('car')
        .setDescription('Car Features'),
    async execute(interaction) {
        const {car} = require('./index.js');
        let embed = new MessageEmbed()
            .setColor(random_color) // red, green, random_color, aqua, cyan, lightcyan, purple, orange, yellow, pink
            .setTitle('Car Features')
            .setDescription("Your car features can be found below :)")
            .addFields(
                { name: `Car name:`, value: `${car.name}`, inline: true },
                { name: `Car model:`, value: `${car.model}`, inline: false },
                { name: `Car color:`, value: `${car.color}`, inline: false },
            )
            .setFooter()
            .setTimestamp();
        return interaction.reply({embeds: [embed] });
    }
}