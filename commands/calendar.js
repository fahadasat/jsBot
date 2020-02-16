const Discord = require("discord.js");
const request = require("request");
const cheerio = require("cheerio");

exports.run = (client, message, args) => {
  if (args.length == 0) {
    console.log("calendar");
    const embed = new Discord.RichEmbed()
      .setTitle("Calendar Commands:")
      .setColor("#ff4242")
      .addField("**~calendar day**", "• all events happening today")
      .addField("**~calendar upcoming**", "• all events happening this week");
    message.channel.send({embed}).catch(console.error);
  }
  switch (args[0]) {
    case "day":
      console.log("calendar day");
      message.channel.send(":xd: ");
      // request ("https://www.csun.edu/usu/calendar", (error, response, html) => {
      //   if (!error && response.statusCode == 200) {
      //     const $ = cheerio.load(html);
      //     const siteHeading = $(".views-field views-field-title");
      //     const output = siteHeading.next().text();
      //     console.log(output);
      //     // console.log(siteHeading.text());
      //     // console.log(siteHeading);
      //   }
      // });
      break;
    case "upcoming":
      console.log("calendar upcoming");
      message.channel.send(":xd:");
      break;
  }
};
