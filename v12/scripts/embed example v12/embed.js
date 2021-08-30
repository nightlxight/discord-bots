const fs = require('fs'); const { MessageEmbed } = require('discord.js'); const { red, green, purple, random_color, cyan, lightcyan, aqua, pink, orange, yellow } = require('./colors.json');
const embed = new MessageEmbed()
    .setColor(random_color) // red, green, purple, random_color, cyan, lightcyan, aqua, pink, orange, yellow or other HTML colors like #00FFFF.
    .setTitle('')
    .setURL('')
    .setAuthor('')
    .setDescription('')
    .setThumbnail('picture link here')
    .addFields(
        { name: "", value: '', inline: true},
        { name: '', value: '', inline: false},
        { name: ``, value: ""},
    )
    .setTimestamp()
    .setFooter(`Message executed by **${message.author.tag}**`);
// YOU DON'T HAVE TO TYPE ALL OF THEM. FOR EXAMPLE, YOU DONT HAVE TO PUT ".setAuthor" IN YOUR CODE.
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
message.channel.send(embed);