var fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban a member.')
		.addUserOption(option => option.setName('target').setDescription('The member to unban')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        const id = interaction.options.get('target')?.value;
		guild.members.unban(id);
		return interaction.reply({ content: `You unbanned: ${user.tag}`, ephemeral: true });
	},
};

// MAKE SURE YOU RUN THE DEPLOY SCRIPT EVERYTIME YOU ADD A COMMAND
// For example, node deploy-commands.js