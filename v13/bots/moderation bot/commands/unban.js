const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unbans a member.')
		.addUserOption(option => option.setName('target').setDescription('The member to unban')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        const id = interaction.options.get('target')?.value;
		guild.members.unban(id);
		return interaction.reply({ content: `You unbanned: ${user.tag}`, ephemeral: true });
	},
};