const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("maps")
  const embed = new Discord.RichEmbed()
    .setTitle("Map Commands:")
    .setColor("#ff4242")
    .addField("**~m campus**", "• [campus map](https://www.csun.edu/csun-maps)")
    .addField("**~m housing**", "• [housing map](https://www.csun.edu/sites/default/files/upa-map-conference.pdf)")
    .addField("**~m shuttle**", "• [shuttle map](https://www.csun.edu/sites/default/files/campus-map.pdf)")
    .addField("**~m water**", "• [water refill map](https://www.csun.edu/sustainability/bottle-refilling)")
    .addField("**~m lactation**", "• [lactation center's map](https://www.csun.edu/sites/default/files/LactationMapUpdatedFALL2018.pdf)");
  message.channel.send({embed}).catch(console.error);
};
