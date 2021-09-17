var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Sends information about yourself'),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your information can be found below')
            .addFields(
                { name: "Your username", value: `${interaction.user.tag}` + " " + "😎", inline: true },
                { name: "Your ID", value: `${interaction.user.id}` + " " + "🎉", inline: false },
                { name: "Created at", value: `${interaction.user.createdAt}` + " " + "📑", inline: false },
            )
            .setFooter(`Command executed by ${interaction.user.tag}`)
            .setTimestamp();
        return interaction.reply({ embeds: [embed] });
    },
};