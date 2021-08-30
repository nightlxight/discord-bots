const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a member.')
		.addUserOption(option => option.setName('target').setDescription('The member to ban')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		guild.members.ban(user);
		return interaction.reply({ content: `You banned: ${user.tag}`, ephemeral: true });
	},
};