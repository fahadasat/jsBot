const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("fun");
  const embed = new Discord.RichEmbed()
    .setTitle("Fun Commands:")
    .setColor("#1000ff")
    .addField("**~rateme**", "• have Matty give you a rating")
    .addField("**~say [something]**", "• have Matty say something")
    .addField("**~joke**", "• have Matty give you a joke")
    .addField("**~trivia**", "• lists trivia commonds")
    .addField("**~pokemon**", "• lists pokemon commands")
    .addField("**~avatar [@user]**", "• prints the user's avatar");
  message.channel.send({embed}).catch(console.error);
};
