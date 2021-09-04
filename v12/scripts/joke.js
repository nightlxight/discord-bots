const { MessageEmbed } = require("discord.js");
const { prefix } = require('../config.json');
module.exports = {
name: "joke",
category: "fun",
execute(client, message, args) {
  let question = message.content.slice(prefix.length + 5);
    let responses = [
        "How do you stop an astronaut's baby from crying?\nYourocket!",
        "How do you talk to a giant?\nUse big words!"
        // add more jokes here!
    ];
    let response = responses[Math.floor(Math.random() * responses.length)];

    let Embed = new MessageEmbed()
      .setTitle('Joke command!')
      .setDescription(`${response}`)
      .setColor('RANDOM')
      .setFooter(`Command executed by ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(Embed);
},
};
