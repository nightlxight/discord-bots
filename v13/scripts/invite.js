/*

coming soon

*/
var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
let client_id = "882588156245971005";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends invite link to your bot!'),
        async execute(interaction) {
            return interaction.reply(`https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=0&scope=bot%20applications.commands`)
        },
};