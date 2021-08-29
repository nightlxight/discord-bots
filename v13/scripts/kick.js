const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a member.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		member.kick();
		return interaction.reply({ content: `You kicked: ${member.user}`, ephemeral: true });
	},
};

// MAKE SURE YOU RUN THE DEPLOY SCRIPT EVERYTIME YOU ADD A COMMAND
// For example, node deploy-commands.js