const Discord = require("discord.js");
module.exports = {
  name: "ping",
  category: "info",

  description: "Sends API ping and latency ping",
  timeout: 10000,
	execute(client, message, args) {                                                
    message.channel.send(`🏓 Getting ping....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency: ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI ping: ${Math.round(client.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });
  },
};