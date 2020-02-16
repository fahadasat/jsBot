const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("misc")
  const embed = new Discord.RichEmbed()
    .setTitle("Miscellaneous Commands:")
    .setColor("#1dff00")
    .addField("**~questions**", "• all question commands")
    .addField("**~updaterole**", "• update your role \n• abusing will get you in trouble with mods :)");
  message.channel.send({embed}).catch(console.error);
};
