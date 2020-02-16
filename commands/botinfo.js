const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("botinfo")
  const embed = new Discord.RichEmbed()
    .setAuthor("MattyBot", "https://lh3.googleusercontent.com/c1kzQmsGiCyTGUjs97gwCW2e-Daxx2jtlN5j_iFqaRmde3NiUH7c_p8QCOZ88BXlKrI", "https://www.csun.edu/")
    .setTitle("Main Commands:")
    .setDescription("Three main command categories.")
    .setColor(0x8942f4)
    .setFooter("© To serve the Matadors!")
    .setThumbnail ("https://s1.ticketm.net/tm/en-us/dam/a/4ff/403d3d47-7f19-495a-af68-f271bcae64ff_246081_CUSTOM.jpg")
    .addField("**~school**", "• school related commands", true)
    .addField("**~fun**", "• fun and games")
    .addField("**~misc**", "• anything miscellaneous");
  message.channel.send({embed}).catch(console.error);
};
