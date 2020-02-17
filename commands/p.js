let gameStart = false;
let channell;
let tools = require('../pokemonFuncs.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (args.length == 0) return;
  switch (args[0]) {
    case "start":
      try {
        if (gameStart) {
          message.channel.send("Game has already started.").catch(console.error);
        }
        else if (message.author.id == 330011881341452288 && !gameStart) {
          gameStart = true;
          channell = message.channel;
          channell.send("Game is starting.").catch(console.error);
          tools.spawn(channell);
          tools.setTree(tools.createTree());
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH START: ' + e);
      }
      break;
    case "enter":
      try {
        console.log("enter");
        if (gameStart) {
          if (!tools.returnContain(message.author.id)) {
            message.channel.send("Entered into the game!").catch(console.error);
            tools.insertTree(message.author.id, tools.returnObj(message.author.id, message.author.username, message));
            tools.load(message.author.id, message.author.username);
          }
          else {
            message.channel.send("Already entered.").catch(console.error);
          }
        }
        else {
          message.channel.send("Game hasn't started.").catch(console.error);
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH ENTER: ' + e);
      }
      break;
    case "catch":
      try {
        console.log("catch");
        if (args.length < 2) {
          message.channel.send("Catch what?").catch(console.error);
          return;
        }
        else if (args.length < 3) {
          message.channel.send("Catch using what?").catch(console.error);
          return;
        }
        else {
          if(message.channel != channell) {
            message.channel.send("Wrong channel.").catch(console.error);
            return;
          }
          if (tools.returnPokemonObj() == null) {
            channell.send("No pokemon has spawned.").catch(console.error);
            return;
          }
          else if (!tools.returnContain(message.author.id)) {
            channell.send("Must be entered into the game before you can catch.").catch(console.error);
            return;
          }
          else {
            if (tools.returnPokemonObj().owner != null) {
              channell.send(tools.returnPokemonObj().name + " has been already caught by " + tools.returnPokemonObj().owner + ".").catch(console.error);
              return;
            }
            if ("poke" === args[2].toString().toLowerCase() || "great" === args[2].toString().toLowerCase() || "ultra" === args[2].toString().toLowerCase() || "master" === args[2].toString().toLowerCase()) {
              if ("poke" === args[2].toString().toLowerCase()) {
                if (tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall > 0) {
                  tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall--;
                  catchPoke(60);
                  tools.savepokeBalls(message.author.id, message.author.username);
                  return;
                }
                else {
                  channell.send("Not enough poke balls.").catch(console.error);
                  return;
                }
              }
              else if ("great" === args[2].toString().toLowerCase()) {
                if (tools.returnTreeVal(message.author.id).items.pokeballs.greatBall > 0) {
                  tools.returnTreeVal(message.author.id).items.pokeballs.greatBall--;
                  catchPoke(70);
                  tools.savepokeBalls(message.author.id, message.author.username);
                  return;
                }
                else {
                  channell.send("Not enough great balls.").catch(console.error);
                  return;
                }
              }
              else if ("ultra" === args[2].toString().toLowerCase()) {
                if (tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall > 0) {
                  tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall--;
                  catchPoke(86);
                  tools.savepokeBalls(message.author.id, message.author.username);
                  return;
                }
                else {
                  channell.send("Not enough ultra balls.").catch(console.error);
                  return;
                }
              }
              else if ("master" === args[2].toString().toLowerCase()) {
                if (tools.returnTreeVal(message.author.id).items.pokeballs.masterBall > 0) {
                  tools.returnTreeVal(message.author.id).items.pokeballs.masterBall--;
                  catchPoke(100);
                  tools.savepokeBalls(message.author.id, message.author.username);
                  return;
                }
                else {
                  channell.send("Not enough master balls.").catch(console.error);
                  return;
                }
              }
            }
            channell.send("Need to use a poke, great, ultra, or master.").catch(console.error);
          }
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH CATCH: ' + e);
      }
      break;
    case "box":
      try {
        console.log("box");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        if(message.channel != channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can see your PokeBox.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size == 0) {
          channell.send("Haven't caught anything yet.").catch(console.error);
          return;
        }
        let box = tools.returnTreeVal(message.author.id).pokemon;
        let embed = new Discord.RichEmbed()
            .setTitle("**" + message.author.username + "'s Box**")
            .setColor(0xffff00)
            .setThumbnail("https://i.imgur.com/nQUBt.png")
            .setTimestamp()

        for (let i = 1; i < box._size+1; i++) {
          if (box.get(i).nickName === null || !box.get(i).nickName || 0 === box.get(i).nickName.length || box.get(i).nickName === "null") {
            embed.addField("\u200b", i + ") " + box.get(i).name + " Level: " + box.get(i).level, true);
          }
          else {
            embed.addField(box.get(i).nickName, "\n" + i + ") " + box.get(i).name + " Level: " + box.get(i).level, true);
          }
          if (i%25 == 0) {
            channell.send({embed}).catch(console.error);
            embed = new Discord.RichEmbed()
                .setTitle("**" + message.author.username + "'s Box Continued**")
                .setColor(0xffff00)
                .setThumbnail("https://i.imgur.com/nQUBt.png")
                .setTimestamp()
          }
        }
        if ((box._size)%25 != 0) {
          channell.send({embed}).catch(console.error);
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH BOX: ' + e);
      }
      break;
    case "nickname":
      try {
        console.log("nickname");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        if(message.channel != channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can change nicknames.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size == 0) {
          channell.send("Haven't caught anything yet.").catch(console.error);
          return;
        }
        try {
          if (tools.returnTreeVal(message.author.id).pokemon.get(args[1]) != null) {
            if (!args[2] || 0 === args[2].length || isNaN(args[1])) {
              channell.send("Invalid arguments.");
            }
            else
            {
              let nickname = "";
              for (let i = 2; i < args.length; i++) {
                nickname += args[i] + " ";
              }
              nickname = nickname.substring(0,20);
              tools.returnTreeVal(message.author.id).pokemon.get(args[1]).nickName = nickname;
              channell.send("Nickname saved!");
            }
          }
        }
        catch {
          channell.send("Invalid arguments.");
        }
        tools.save(message.author.id, true, message.author.username);
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH NICKNAME: ' + e);
      }
      break;
    case "present":
      try {
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        if(message.channel != channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can claim presents.").catch(console.error);
          return;
        }
        let pokeBall = 0;
        let greatBall = 0;
        let ultraBall = 0;
        let masterBall = 0;
        let potion = 0;
        let superPotion = 0;
        let hyperPotion = 0;
        let maxPotion = 0;
        if (tools.returnTreeVal(message.author.id).present < (new Date() - tools.returnTreeVal(message.author.id).date)) {
          for (let i = 0; i < 5; i++) {
            let bias = tools.rand(0,100, 0.6);
            if (bias < 2) {
              tools.returnTreeVal(message.author.id).items.pokeballs.masterBall++;
              masterBall++;
            }
            else if (bias < 15) {
              tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall++;
              ultraBall++;
            }
            else if (bias < 50) {
              tools.returnTreeVal(message.author.id).items.pokeballs.greatBall++;
              greatBall++;
            }
            else {
              tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall++;
              pokeBall++;
            }
          }

          for (let i = 0; i < 2; i++) {
            let bias = tools.rand(0,100);
            if (bias < 5) {
              tools.returnTreeVal(message.author.id).items.medicine.maxPotion++;
              maxPotion++;
            }
            else if (bias < 20) {
              tools.returnTreeVal(message.author.id).items.medicine.hyperPotion++;
              hyperPotion++;
            }
            else if (bias < 55) {
              tools.returnTreeVal(message.author.id).items.medicine.superPotion++;
              superPotion++;
            }
            else {
              tools.returnTreeVal(message.author.id).items.medicine.potion++;
              potion++;
            }
          }
          tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + tools.randomInt(500, 1000);
          console.log(tools.returnTreeVal(message.author.id).money);

          tools.savepokeBalls(message.author.id, message.author.username);
          tools.saveMedicine(message.author.id, message.author.username);
          tools.saveUserData(message.author.id, message.author.username);

          tools.returnTreeVal(message.author.id).present = tools.randomInt(900000,10800000); //900000,10800000)
          tools.returnTreeVal(message.author.id).date = new Date();
          // console.log(tools.returnTreeVal(message.author.id).date);
          channell.send("Present claimed.");
          //channell.send("\nYou received:\n" + masterBall + " master balls\n" + ultraBall + " ultra balls\n" + greatBall + " great balls\n" + ultraBall + " poke balls.");
          //channell.send("\nYou received:\n" + maxPotion + " max potions\n" + hyperPotion + " hyper potions\n" + superPotion + " super potions\n" +  potion + " potions.");
        }
        else {
          channell.send("Present not ready.");
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH PRESENT: ' + e);
      }
      break;
    case "items":
      try {
      if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        if(message.channel != channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can claim presents.").catch(console.error);
          return;
        }
        const balls = new Discord.RichEmbed()
            .setTitle("**" + message.author.username + "'s Poke Ball List**")
            .setColor(0xffff00)
            .setThumbnail("https://www.pikpng.com/pngl/b/135-1357590_pokeballs-pikachu-pixel-game-boy-clipart.png")
            .setTimestamp()
            .addField("Poke Balls:",  tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall, false)
            .addField("Great Balls:",  tools.returnTreeVal(message.author.id).items.pokeballs.greatBall, false)
            .addField("Ultra Balls:",  tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall, false)
            .addField("Master Balls:",  tools.returnTreeVal(message.author.id).items.pokeballs.masterBall, false);
        channell.send(balls).catch(console.error);

        const medicine = new Discord.RichEmbed()
            .setTitle("**" + message.author.username + "'s Medicine List**")
            .setColor(0xffff00)
            .setThumbnail("https://ghostwalker186.files.wordpress.com/2013/10/potion.png")
            .setTimestamp()
            .addField("Potions:",  tools.returnTreeVal(message.author.id).items.medicine.potion, false)
            .addField("Super Potions:",  tools.returnTreeVal(message.author.id).items.medicine.superPotion, false)
            .addField("Hyper Potions:",  tools.returnTreeVal(message.author.id).items.medicine.hyperPotion, false)
            .addField("Max Potions:",  tools.returnTreeVal(message.author.id).items.medicine.maxPotion, false);
        channell.send(medicine).catch(console.error);
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH ITEMS: ' + e);
      }
    break;
    case "follower":
      console.log("follower");
      if (!gameStart) {
        message.channel.send("Game not started.").catch(console.error);
        return;
      }
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can switch or look at your follower.").catch(console.error);
        return;
      }
      else if (args.length === 1 && tools.returnTreeVal(message.author.id).follower !== null) {
        // let embed = new Discord.RichEmbed()
        //     .setTitle("**" + message.author.username + "'s Follower**")
        //     .setColor(0xffff00)
        //     .setThumbnail("https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png")
        //     .setTimestamp()
        //     .setURL("https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png")
        //     .addField("test", "test")
        // channell.send(embed).catch(console.error);
        let pic = "";
        if (tools.returnTreeVal(message.author.id).follower.pokedex < 10) {
          pic = "https://serebii.net/pokemon/art/00" + tools.returnTreeVal(message.author.id).follower.pokedex + ".png";
        }
        else if (tools.returnTreeVal(message.author.id).follower.pokedex < 100) {
          pic = "https://serebii.net/pokemon/art/0" + tools.returnTreeVal(message.author.id).follower.pokedex + ".png";
        }
        else {
          pic = "https://serebii.net/pokemon/art/" + tools.returnTreeVal(message.author.id).follower.pokedex + ".png";
        }
        const file = new Discord.Attachment(tools.returnTreeVal(message.author.id).follower.icon);
        const embed = {
          color: 0x0099ff,
          title: "Pokedex #" + tools.returnTreeVal(message.author.id).follower.pokedex + ") " + tools.returnTreeVal(message.author.id).follower.name,
          // url: 'https://discord.js.org',
          author: {
            name: tools.returnTreeVal(message.author.id).follower.nickName,
          //   icon_url: 'https://i.imgur.com/wSTFkRM.png',
          //   url: 'https://discord.js.org',
          },
          // description: "```~p follower [box number]``` \n To switch followers.",
          // thumbnail: {
          //   url: 'https://i.imgur.com/wSTFkRM.png',
          // },
          fields: [
            {
              name: "Level:",
              value: 'Some value here',
              inline: true,
            },
            {
              name: "XP to next level:",
              value: 'Some value here',
              inline: true,
            },
            {
              name: "⣀ ⣄ ⣆ ⣇ ⣧ ⣷ ⣿",
              value: "\u200b",
            },
            {
              name: 'Move 1',
              value: 'Some value here',
              inline: true,
            },
            {
              name: 'Move 2',
              value: 'Some value here',
              inline: true,
            },
            {
              name: "\u200b",
              value: "\u200b",
            },
            {
              name: 'Move 3',
              value: 'Some value here',
              inline: true,
            },
            {
              name: 'Move 4',
              value: 'Some value here',
              inline: true,
            },
            {
              name: "Original Owner:",
              value: tools.returnTreeVal(message.author.id).follower.owner,
            },
          ],
          image: {
            url: pic,
            // url: 'attachment://' + tools.returnTreeVal(message.author.id).follower.pokedex + '.png',
            // url: 'attachment://108.png',
          },
          timestamp: new Date(),
          footer: {
            text: '\u200b',
            icon_url: 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
          },
        };
        channell.send({/*files: [file],*/ embed: embed });
        // console.log(tools.returnTreeVal(message.author.id).follower.name);
        return;
      }
      else if (args.length !== 2 || isNaN(args[1]) || parseInt(args[1], 10) < 0 || parseInt(args[1], 10) >  tools.returnTreeVal(message.author.id).pokemon.size() || tools.returnTreeVal(message.author.id).pokemon.get(args[1]) == null) {
        channell.send("Invalid arguments.");
        return;
      }
      try {
        if (tools.returnTreeVal(message.author.id).follower !== null) {
          console.log("changing");
          tools.returnTreeVal(message.author.id).pokemon.insert(tools.returnTreeVal(message.author.id).pokemon.size() + 1, tools.returnTreeVal(message.author.id).follower);
        }
        tools.returnTreeVal(message.author.id).follower = tools.returnTreeVal(message.author.id).pokemon.get(args[1]);
        let temp = tools.createTree();
        for (let i = 1; i < tools.returnTreeVal(message.author.id).pokemon.size(); i++) {
          if (i === parseInt(args[1], 10) || i > parseInt(args[1], 10)) {
            temp.insert(i, tools.returnTreeVal(message.author.id).pokemon.get(i+1));
            // console.log(i + ": " + tools.returnTreeVal(message.author.id).pokemon.get(i+1).name);
          }
          else {
            temp.insert(i, tools.returnTreeVal(message.author.id).pokemon.get(i));
            // console.log(i + ": " + tools.returnTreeVal(message.author.id).pokemon.get(i).name);
          }
        }
        tools.returnTreeVal(message.author.id).pokemon = temp;
        tools.save(message.author.id, true, message.author.username);
        tools.saveUserData(message.author.id, message.author.username);
      }
      catch {
        console.log("catch");
        message.channel.send("Invalid arguments.");
      }
    break;
    case "details":
      console.log("details");
      if (!gameStart) {
        message.channel.send("Game not started.").catch(console.error);
        return;
      }
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can look at your pokemon.").catch(console.error);
        return;
      }
      else if (tools.returnTreeVal(message.author.id).pokemon._size == 0) {
        channell.send("Haven't caught anything yet.").catch(console.error);
        return;
      }
      try {
        if (tools.returnTreeVal(message.author.id).pokemon.get(args[1]) != null) {
          if (!args[1] || args.length < 2 || isNaN(args[1])) {
            channell.send("Invalid arguments.");
          }
          else
          {
            console.log("test");

            // let test =1;
            // const file = new Discord.Attachment(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).icon);
            let pic = "";
            if (parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex, 10) < 10) {
              pic = "https://serebii.net/pokemon/art/00" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex, 10) + ".png";
            }
            else if (parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex, 10) < 100) {
              pic = "https://serebii.net/pokemon/art/0" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex, 10) + ".png";
            }
            else {
              pic = "https://serebii.net/pokemon/art/" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex,10) + ".png";
            }
            const embed = {
              color: 0x0099ff,
              title: "Pokedex #" + tools.returnTreeVal(message.author.id).pokemon.get(args[1]).pokedex + ") " + tools.returnTreeVal(message.author.id).pokemon.get(args[1]).name,
              author: {
                name: tools.returnTreeVal(message.author.id).pokemon.get(args[1]).nickName,
              },
              fields: [
                {
                  name: "Level:",
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: "XP to next level:",
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: "⣀ ⣄ ⣆ ⣇ ⣧ ⣷ ⣿",
                  value: "\u200b",
                },
                {
                  name: 'Move 1',
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: 'Move 2',
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: "\u200b",
                  value: "\u200b",
                },
                {
                  name: 'Move 3',
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: 'Move 4',
                  value: 'Some value here',
                  inline: true,
                },
                {
                  name: "Original Owner:",
                  value: tools.returnTreeVal(message.author.id).pokemon.get(args[1]).owner,
                },
              ],
              image: {
                url: pic,
              },
              timestamp: new Date(),
              footer: {
                text: '\u200b',
                icon_url: 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
              },
            };
            channell.send({/*files: [file],*/ embed: embed });
            return;
          }
        }
      }
      catch (e) {
        // console.log(e);
        channell.send(" Invalid arguments.");
      }
    break;
    case "card":
      console.log("card");
      if (!gameStart) {
        message.channel.send("Game not started.").catch(console.error);
        return;
      }
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can look at your card.").catch(console.error);
        return;
      }
      let captured = 0;
      let followName = "\u200b";
      if (tools.returnTreeVal(message.author.id).follower === null) {
        captured = tools.returnTreeVal(message.author.id).pokemon.size();
      }
      else {
        captured = tools.returnTreeVal(message.author.id).pokemon.size() + 1;
        followName = tools.returnTreeVal(message.author.id).follower.name;
      }
      const embed = {
        color: 0x0099ff,
        title: tools.returnTreeVal(message.author.id).name + "'s Card",
        thumbnail: {
          url: message.author.avatarURL,
        },
        image: {
          url: tools.returnTreeVal(message.author.id).icon,
        },
        fields: [
          {
            name: "Pokemon caught:",
            value: captured,
            inline: true,
          },
          {
            name: "Current Follower:",
            value: followName,
            inline: true,
          },
          {
            name: "Money:",
            value: tools.returnTreeVal(message.author.id).money,
            inline: false,
          },
        ],
        timestamp: new Date(),
      };
      channell.send({embed: embed });
    break;
    case "avatar":
      console.log("avatar");
      if (!gameStart) {
        message.channel.send("Game not started.").catch(console.error);
        return;
      }
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can look at avatars.").catch(console.error);
        return;
      }
      else {
        console.log(args[1]);
        const embed = new Discord.RichEmbed()
            .setTitle("Avatars:")
        switch (args[1]) {
          case "boy":
            if (args.length > 2) {
              if (tools.returnTreeVal(message.author.id).follower === null) {
                channell.send("Must have a follower before you can customize your card.").catch(console.error);
                return;
              }
              switch (args[2]) {
                case "1":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74502639-f7f63e00-4ea2-11ea-8d2e-e0871c0b61d2.png";
                  tools.saveUserData(message.author.id, message.author.username);
                break;
                case "2":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74502682-1e1bde00-4ea3-11ea-9983-baed904e1782.png";
                  tools.saveUserData(message.author.id, message.author.username);
                break;
                case "3":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74502695-2d9b2700-4ea3-11ea-9aeb-85873436a4a9.png";
                  tools.saveUserData(message.author.id, message.author.username);
                break;
                case "4":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74502706-368bf880-4ea3-11ea-88f5-a85147205903.png";
                  tools.saveUserData(message.author.id, message.author.username);
                break;
              }
              channell.send("Changed Avatars.").catch(console.error);
              return;
            }
            embed.setImage("https://user-images.githubusercontent.com/39246580/74501272-756b7f80-4e9e-11ea-9cf7-e54257eceea7.png");
          break;
          case "girl":
            if (args.length > 2) {
              switch (args[2]) {
                case "1":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74503093-b1094800-4ea4-11ea-9f53-d9c969e40813.png";
                  tools.saveUserData(message.author.id, message.author.username);
                  break;
                case "2":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74503103-b8c8ec80-4ea4-11ea-9ddc-f5175419beba.png";
                  tools.saveUserData(message.author.id, message.author.username);
                  break;
                case "3":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74503115-c1212780-4ea4-11ea-9093-0d55292824ed.png";
                  tools.saveUserData(message.author.id, message.author.username);
                  break;
                case "4":
                  tools.returnTreeVal(message.author.id).icon = "https://user-images.githubusercontent.com/39246580/74503128-caaa8f80-4ea4-11ea-83cc-fac2a2ae56f9.png";
                  tools.saveUserData(message.author.id, message.author.username);
                  break;
              }
              channell.send("Changed Avatars.").catch(console.error);
              return;
            }
            embed.setImage("https://user-images.githubusercontent.com/39246580/74502305-ec564780-4ea1-11ea-9851-db862eb54329.png");
          break;
        }
        channell.send({embed}).catch(console.error);
      }
    break;

    case "remove":
      try {
        console.log("remove");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        if(message.channel != channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can change nicknames.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size == 0) {
          channell.send("Haven't caught anything yet.").catch(console.error);
          return;
        }
        try {
          if (args[1] === "nickname") {
            if (!args[2] || args.length < 3 || isNaN(args[2])) {
             channell.send("Invalid arguments.");
           }
           else
           {
             tools.returnTreeVal(message.author.id).pokemon.get(args[2]).nickName = "\u200b";
             channell.send("Nickname saved!");
           }
          }
        }
        catch {
          channell.send("Invalid arguments.");
        }
        tools.save(message.author.id, true, message.author.username);
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH REMOVE: ' + e);
      }
      break;
    case "shop":
      console.log("shop");
      if (!gameStart) {
        message.channel.send("Game not started.").catch(console.error);
        return;
      }
      if(message.channel != channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can see the shop.").catch(console.error);
        return;
      }
      try {
        if (args.length === 1)
        {
          const embed = {
            color: 0x34c0eb,
            title: "Poké Mart",
            description: "Welcome to the Poké Mart, how may we help you?",
            thumbnail: {
              url: "https://www.narita-airport.jp/img/original/3786",
            },
            // image: {
            //   url: tools.returnTreeVal(message.author.id).icon,
            // },
            fields: [
              {
                name: "1) Poké Ball",
                value: "Buy: 200\nSell: 100",
                inline: true,
              },
              {
                name: "2) Great Ball",
                value: "Buy: 600\nSell: 300",
                inline: true,
              },
              {
                name: "3) Ultra Ball",
                value: "Buy: 1200\nSell: 600",
                inline: true,
              },
            ],
            timestamp: new Date(),
          };
          channell.send({embed: embed });
          break;
        }
        else if (isNaN(args[3])) {
          channell.send("Invalid arguments.");
          break;
        }
        else if (args[1] === "buy") {
          if (args[2] === "1" && tools.returnTreeVal(message.author.id).money >= 200*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall) + parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 200*parseInt(args[3]);
            channell.send("Bought " + args[3] + " poke balls.");
          }
          else if (args[2] === "2" && tools.returnTreeVal(message.author.id).money >= 600*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.greatBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.greatBall) + parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 600*parseInt(args[3]);
            channell.send("Bought " + args[3] + " great balls.");
          }
          else if (args[2] === "3" && tools.returnTreeVal(message.author.id).money >= 1200*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall) + parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 1200*parseInt(args[3]);
            channell.send("Bought " + args[3] + " ultra balls.");
          }
        }
        else if (args[1] === "sell") {
          if (args[2] === "1" && tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall) - parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 100*parseInt(args[3]);
            channell.send("Sold " + args[3] + " poke balls.");
          }
          else if (args[2] === "2" && tools.returnTreeVal(message.author.id).items.pokeballs.greatBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.greatBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.greatBall) - parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 300*parseInt(args[3]);
            channell.send("Sold " + args[3] + " great balls.");
          }
          else if (args[2] === "3" && tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall) - parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 600*parseInt(args[3]);
            channell.send("Sold " + args[3] + " ultra balls.");
          }
        }
        tools.savepokeBalls(message.author.id, message.author.username);
        tools.saveMedicine(message.author.id, message.author.username);
        tools.saveUserData(message.author.id, message.author.username);
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH NICKNAME: ' + e);
      }
    // break;
    // case :
  }

  function catchPoke (bias) {
    /*
    MAKE CATCH RATE CHANGE BASED ON LVL HP AND SHIT
     */
    try {
      if (tools.returnPokemonObj().name === args[1] || tools.returnPokemonObj().name.toLowerCase() === args[1]) {
        if (tools.rand(0, 100, .65) < bias )
        {
          tools.returnPokemonObj().owner = message.author.username;
          tools.returnTreeVal(message.author.id).pokemon.insert(tools.returnTreeVal(message.author.id).pokemon._size + 1, tools.returnPokemonObj());
          tools.save(message.author.id, false, message.author.username);
          channell.send("**" + tools.returnPokemonObj().owner + "** caught a level " + tools.returnPokemonObj().level + " " + tools.returnPokemonObj().name + "!").catch(console.error);
          console.log(tools.returnPokemonObj().owner + " caught: " + tools.returnPokemonObj().name + "!");
          let money = tools.randomInt(100, 10000/tools.returnPokemonObj().spawnRarity);
          channell.send("**" + tools.returnPokemonObj().owner + "** received $" + money +"!").catch(console.error);
          tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + money;
          tools.saveUserData(message.author.id, message.author.username);
          return;
        }
        channell.send("Oh no! " + tools.returnPokemonObj().name + " broke free!");
      }
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH catchPoke(): ' + e);
    }
  }
};