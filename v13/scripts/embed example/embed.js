const { MessageEmbed } = require('discord.js');
const { red, green, purple, random_color, cyan, lightcyan, aqua, pink, orange, yellow } = require('./colors.json');
const embed = new MessageEmbed()
    .setColor(random_color) // red, green, purple, random_color, cyan, lightcyan, aqua, pink, orange, yellow or other HTML colors like #00FFFF.
    .setTitle('') //set title
    .setURL('')
    .setAuthor('')
    .setDescription('') //set description here
    .setThumbnail('picture link here')
    .addFields(
        { name: "", value: '', inline: true},
        { name: '', value: '', inline: false},
        { name: ``, value: ""},
    )
    .setTimestamp()
    .setFooter('');
// YOU DON'T HAVE TO TYPE ALL OF THEM. FOR EXAMPLE, YOU DONT HAVE TO PUT ".setAuthor" IN YOUR CODE.
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    channel.send({ embeds: [embed] });