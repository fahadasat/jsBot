const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("pokemon");
  const embed = new Discord.RichEmbed()
    .setTitle("Pokemon Commands:")
    .setColor("#FFFF00")
    .addField("**~p start**", "• start a game in desired channel")
    .addField("**~p enter**", "• enter the game")
    .addField("**~p catch [name] [Poké Ball]**", "• catch a pokemon ([poke], [great], [ultra] , [master])")
    .addField("**~p nickname [box number] [nickname here]**", "• give your pokemon a nickname (20 character max)")
    .addField("**~p items **", "• display your items")
    .addField("**~p box **", "• display your pokemon")
    .addField("**~p present**", "• receive a present (at least every 3 hours)")
    .addField("**~p follower **", "• display details on your follower")
    .addField("**~p follower [box number]**", "• set your follower")
    .addField("**~p details [box number]**", "• display details on specific pokemon")
    .addField("**~p card**", "• display trainer's card")
    .addField("**~p avatar [boy/girl]**", "• displays male/female avatars")
    .addField("**~p avatar [boy/girl] [number]**", "• set your avatar by selecting either male or female and desired number")
    .addField("**~p remove nickname [box number]**", "• removes pokemon's nickname")
    .addField("**~p shop**", "• displays shop")
    .addField("**~p shop [buy/sell] [item number] [item amount]**", "• buy item from the shop")
  message.channel.send({embed}).catch(console.error);
};
