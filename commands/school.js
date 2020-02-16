const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("school")
  const embed = new Discord.RichEmbed()
    .setTitle("School Commands:")
    .setColor("#f70000")
    .addField("**~matty**", "• whose a matador?")
    .addField("**~onceamatador**", "• always a matador!")
    .addField("**~maps**", "• lists commands for all maps")
    .addField("**~calendar**", "• lists all calendar commands");
  message.channel.send({embed}).catch(console.error);
};
