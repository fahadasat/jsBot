const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("questions");
  const embed = new Discord.RichEmbed()
    .setTitle("Question Commands:")
    .setColor("#8bff7c")
    .addField("**~q add [question]**", "• add a question to list\n• you will be pinged once it gets answered")
    .addField("**~q ans [answer]**", "• answer and remove the first question from list")
    .addField("**~q select [number] [answer]**", "• answer and remove desired question from list")
    .addField("**~q list**", "• shows unanswered questions in list");
  message.channel.send({embed}).catch(console.error);
};
