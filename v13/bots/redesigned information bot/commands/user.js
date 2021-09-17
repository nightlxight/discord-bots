var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription(),
    async execute(interaction) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your information can be found below')
            .addFields(
                
            )
    },
};