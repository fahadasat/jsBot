const fs = require("fs");

exports.run = (client, message, args) => {
  if (message.channel.id != 479420164744544278) return;

  console.log("updaterole")

  fs.readFile("./files/names.txt", function (err, data) {
    if (err) throw err;
    if(data.indexOf(message.author.username) >= 0) {
      console.log(true)
    }
    else {
      console.log(false)
      fs.appendFile("./files/names.txt", "\r\n" + message.author.username + " " + message.author.id,function(err) {
        if(err) throw err;
      });
      let Freshman = message.guild.roles.find(r => r.name === "Freshman");
      let Sophomore = message.guild.roles.find(r => r.name === "Sophomore");
      let Junior = message.guild.roles.find(r => r.name === "Junior");
      let Senior = message.guild.roles.find(r => r.name === "Senior");
      let Alumni = message.guild.roles.find(r => r.name === "Alumni");
      let Masters = message.guild.roles.find(r => r.name === "Masters");

      //if (message.author.id != 330011881341452288) return;
      message.channel.send(message.guild.roles.find(r => r.name === "Admin") + " " + message.author.username + " changed their role.").catch(console.error);

      // if (message.author.id == 330011881341452288) {
      //   message.member.addRole(Senior).catch(console.error);
      //   message.member.removeRole(Freshman).catch(console.error);
      //   return;
      // }

      //message.channel.send(message.guild.roles.find(r => r.name === "Admin")).catch(console.error);
      if(message.member.roles.has(Freshman.id)) {
        message.member.addRole(Sophomore).catch(console.error);
        message.member.removeRole(Freshman).catch(console.error);
      }
      else if(message.member.roles.has(Sophomore.id)) {
        message.member.addRole(Junior).catch(console.error);
        message.member.removeRole(Sophomore).catch(console.error);
      }
      else if(message.member.roles.has(Junior.id)) {
        message.member.addRole(Senior).catch(console.error);
        message.member.removeRole(Junior).catch(console.error);
      }
      else if(message.member.roles.has(Senior.id)) {
        message.member.addRole(Alumni).catch(console.error);
        message.member.removeRole(Senior).catch(console.error);
      }
      else if(message.member.roles.has(Alumni.id)) {
        message.member.addRole(Masters).catch(console.error);
        message.member.removeRole(Alumni).catch(console.error);
      }
    }
  });
};
