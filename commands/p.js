let gameStart = false;
let channell;
let battling;
let tools = require('../pokemonFuncs.js');
let properties = require('../pokemonDetails.js');
let moves = require('../movesList.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (args.length == 0) return;
  switch (args[0]) {
    case "start":
      try {
        if (gameStart && (gameStart && !tools.returnPause())) {
          message.channel.send("Game has already started.").catch(console.error);
        }
        else if (message.author.id == 330011881341452288 && (!gameStart || tools.returnPause())) {
          tools.setPause(false);
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
        if (message.author.id !== "330011881341452288") {
          message.channel.send("Sike").catch(console.error);
          return;
        }
        if (args.length < 2) {
          message.channel.send("Catch what?").catch(console.error);
          return;
        }
        else if (args.length < 3) {
          message.channel.send("Catch using what?").catch(console.error);
          return;
        }
        else {
          if(message.channel !== channell) {
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
              console.log(tools.returnPokemonObj().owner);
              channell.send(tools.returnPokemonObj().name + " has been already caught by " + tools.returnPokemonObj().owner + ".").catch(console.error);
              return;
            }
            if ("poke" === args[2].toString().toLowerCase() || "great" === args[2].toString().toLowerCase() || "ultra" === args[2].toString().toLowerCase() || "master" === args[2].toString().toLowerCase()) {
              if ("poke" === args[2].toString().toLowerCase()) {
                if (tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall > 0) {
                  tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall--;
                  catchPoke();
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
                  catchPoke();
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
                  catchPoke();
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
                  catchPoke();
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
        if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can see your PokeBox.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size === 0) {
          channell.send("Empty PokeBox.").catch(console.error);
          return;
        }
        let count = 0;
        let box = tools.returnTreeVal(message.author.id).pokemon;
        let embed = new Discord.RichEmbed()
            .setTitle("**" + message.author.username + "'s Box**")
            .setColor(0xffff00)
            .setThumbnail("https://i.imgur.com/nQUBt.png")
            .setTimestamp();

        for (let i = 1; i < box._size+1; i++) {
          if (box.get(i).nickName === null || !box.get(i).nickName || 0 === box.get(i).nickName.length || box.get(i).nickName === "null") {
            embed.addField("\u200b", i + ") " + box.get(i).name + " Level: " + box.get(i).level, true);
          }
          else {
            embed.addField(box.get(i).nickName, "\n" + i + ") " + "**" + box.get(i).name + "**" + " Level: " + box.get(i).level, true);
          }
          count++;
          if (i%25 === 0) {
            count = 0;
            channell.send({embed}).catch(console.error);
            embed = new Discord.RichEmbed()
                .setTitle("**" + message.author.username + "'s Box Continued**")
                .setColor(0xffff00)
                .setThumbnail("https://i.imgur.com/nQUBt.png")
                .setTimestamp()
          }
        }
        if ((box._size)%25 !== 0) {
          while (count % 3 !== 0 && count < 25) {
            count++;
            embed.addField("\u200b", "\u200b", true);
          }
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
        if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can change nicknames.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size === 0) {
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
        if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can claim presents.").catch(console.error);
          return;
        }
        let ballsCounter = 7;
        let potionsCounter = 3;
        let moneyMultiplier = 1;
        if (message.author.id === "216271896151326720" || message.author.id === "334173911766007809"
            || message.author.id === "497158229881651220" || message.author.id === "477905443847536641"
            || message.author.id === "555123106738339850") {
          ballsCounter = 15;
          potionsCounter = 6;
          moneyMultiplier = 1.5;
        }
        let present = {
          pokeBall: 0,
          greatBall: 0,
          ultraBall: 0,
          masterBall: 0,
          potion: 0,
          superPotion: 0,
          hyperPotion: 0,
          maxPotion: 0,
          money: 0,
        };
        if (tools.returnTreeVal(message.author.id).present < (new Date() - tools.returnTreeVal(message.author.id).date)) {
          for (let i = 0; i < ballsCounter; i++) {
            let bias = tools.rand(0,100, 0.6);
            if (bias < 3) {
              tools.returnTreeVal(message.author.id).items.pokeballs.masterBall++;
              present.masterBall++;
            }
            else if (bias < 30) {
              tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall++;
              present.ultraBall++;
            }
            else if (bias < 65) {
              tools.returnTreeVal(message.author.id).items.pokeballs.greatBall++;
              present.greatBall++;
            }
            else {
              tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall++;
              present.pokeBall++;
            }
          }

          for (let i = 0; i < potionsCounter; i++) {
            let bias = tools.rand(0,100, 0.6);
            if (bias < 20) {
              tools.returnTreeVal(message.author.id).items.medicine.maxPotion++;
              present.maxPotion++;
            }
            else if (bias < 40) {
              tools.returnTreeVal(message.author.id).items.medicine.hyperPotion++;
              present.hyperPotion++;
            }
            else if (bias < 75) {
              tools.returnTreeVal(message.author.id).items.medicine.superPotion++;
              present.superPotion++;
            }
            else {
              tools.returnTreeVal(message.author.id).items.medicine.potion++;
              present.potion++;
            }
          }

          present.money += tools.randomInt(500, 1000) * moneyMultiplier;
          tools.returnTreeVal(message.author.id).money += present.money;
          const presentEmbed = new Discord.RichEmbed()
              .setTitle("**" + message.author.username + "'s Present**")
              .setColor(0xffff00)
              .setTimestamp()
          if (present.pokeBall > 0) {
            presentEmbed.addField("Poke balls gained: ", present.pokeBall);
          }
          if (present.greatBall > 0) {
            presentEmbed.addField("Great balls gained: ", present.greatBall);
          }
          if (present.ultraBall > 0) {
            presentEmbed.addField("Ultra balls gained: ", present.ultraBall);
          }
          if (present.masterBall > 0) {
            presentEmbed.addField("Master balls gained: ", present.masterBall);
          }
          if (present.potion > 0) {
            presentEmbed.addField("Potions gained: ", present.potion);
          }
          if (present.superPotion > 0) {
            presentEmbed.addField("Super potions gained: ", present.superPotion);
          }
          if (present.hyperPotion > 0) {
            presentEmbed.addField("Hyper potions gained: ", present.hyperPotion);
          }
          if (present.maxPotion > 0) {
            presentEmbed.addField("Max potions gained: ", present.maxPotion);
          }
          presentEmbed.addField("Money gained: ", present.money);
          channell.send(presentEmbed).catch(console.error);

          tools.savepokeBalls(message.author.id, message.author.username);
          tools.saveMedicine(message.author.id, message.author.username);
          tools.saveUserData(message.author.id, message.author.username);

          tools.returnTreeVal(message.author.id).present = tools.randomInt(0,1); //900000,10800000)
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
        if(message.channel !== channell) {
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
            .addField("Potions:",  tools.returnTreeVal(message.author.id).items.medicine.potion + "\nGain 20 health points.", false)
            .addField("Super Potions:",  tools.returnTreeVal(message.author.id).items.medicine.superPotion + "\nGain 60 health points.", false)
            .addField("Hyper Potions:",  tools.returnTreeVal(message.author.id).items.medicine.hyperPotion + "\nGain 120 health points.", false)
            .addField("Max Potions:",  tools.returnTreeVal(message.author.id).items.medicine.maxPotion + "\nGain max health points.", false);
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
      // console.log(isNaN(args[1]));
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can switch or look at your follower.").catch(console.error);
        return;
      }
      else if ((tools.returnTreeVal(message.author.id).follower.id === "null" || tools.returnTreeVal(message.author.id).follower.id === null) && isNaN(args[1])) {
        channell.send("Must have a follower before you can see it.").catch(console.error);
        return;
      }
      else if (args.length === 1) {
        let embed = {
          color: 0x0099ff,
          title: "Pokedex #" + tools.returnTreeVal(message.author.id).follower.id + " " + tools.returnTreeVal(message.author.id).follower.name,
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
              name: "**Level:**",
              value: tools.returnTreeVal(message.author.id).follower.level,
              inline: true,
            },
            {
              name: "**XP to next level:**",
              //Math.pow(parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).level) + 1, 3) - parseInt(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).exp)
              value: Math.pow(parseInt(tools.returnTreeVal(message.author.id).follower.level) + 1, 3) - parseInt(tools.returnTreeVal(message.author.id).follower.exp),
              inline: true,
            },
            {
              // name: "**⣀ ⣄ ⣆ ⣇ ⣧ ⣷ ⣿**",
              name: "**HP: **",
              value: tools.returnTreeVal(message.author.id).follower.currentHP + "/" + tools.hpformula(tools.returnTreeVal(message.author.id).follower),
              inline: true,
            },
            {
              name: '\u200b',
              value: tools.returnTreeVal(message.author.id).follower.description,
              inline: false,
            },
            {
              name: '\u200b',
              value: "Weight: " + tools.returnTreeVal(message.author.id).follower.weight + " Height: " + tools.returnTreeVal(message.author.id).follower.height,
              inline: false,
            },
          ],
          image: {
            url: tools.returnTreeVal(message.author.id).follower.boxIcon,
          },
          timestamp: new Date(),
          footer: {
            text: '\u200b',
            icon_url: 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
          },
        };
        for (let j = 1; j < 5; j++) {
          if (tools.returnTreeVal(message.author.id).follower.currentMoves[j] !== null && tools.returnTreeVal(message.author.id).follower.currentMoves[j] !== "null" && tools.returnTreeVal(message.author.id).follower.currentMoves[j].move !== null && tools.returnTreeVal(message.author.id).follower.currentMoves[j].move !== "null"  && tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.name !== null && tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.name !== "null") {
            let moves = {
              name: "**Move " + j + "**",
              value: tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.name + "\n" + tools.decodeType(tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.type) + " " +
                  tools.decodeCategory(tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.category) + "\nPower:  " + tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.power + " Accuracy:  " +
                  tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.accuracy + " PP:  " + tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.powerPoints + "\n*" + tools.returnTreeVal(message.author.id).follower.currentMoves[j].move.effect + "*",
              inline: true,
            };
            let empty = {
              name: "\u200b",
              value: "\u200b",
              inline: false,
            };
            embed.fields.push(moves);
            if (j === 2) {
              embed.fields.push(empty);
            }
          }
        }
        let owner = {
          name: "**Original Owner:**",
          value: tools.returnTreeVal(message.author.id).follower.owner,
        };
        embed.fields.push(owner);

        let base = {
          name: "**Base Values**",
          value: "**Atk:** " + tools.returnTreeVal(message.author.id).follower.base.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).follower.base.spatk +
              "\n**Def:** " + tools.returnTreeVal(message.author.id).follower.base.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).follower.base.spdef +
              "\n**Spd:** " + tools.returnTreeVal(message.author.id).follower.base.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).follower.base.hp,
          inline: true,
        };
        embed.fields.push(base);
        let ivs = {
          name: "**Individual Values**",
          value: "**Atk:** " + tools.returnTreeVal(message.author.id).follower.iv.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).follower.iv.spatk +
              "\n**Def:** " + tools.returnTreeVal(message.author.id).follower.iv.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).follower.iv.spdef +
              "\n**Spd:** " + tools.returnTreeVal(message.author.id).follower.iv.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).follower.iv.hp,
          inline: true,
        };
        embed.fields.push(ivs);
        let evs = {
          name: "**Effort Values**",
          value: "**Atk:** " + tools.returnTreeVal(message.author.id).follower.ev.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).follower.ev.spatk +
              "\n**Def:** " + tools.returnTreeVal(message.author.id).follower.ev.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).follower.ev.spdef +
              "\n**Spd:** " + tools.returnTreeVal(message.author.id).follower.ev.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).follower.ev.hp,
          inline: true,
        };
        embed.fields.push(evs);

        channell.send({/*files: [file],*/ embed: embed });
        // // console.log(tools.returnTreeVal(message.author.id).follower.name);
        return;
      }
      else if (args.length !== 2 || isNaN(args[1]) || parseInt(args[1], 10) < 0 || parseInt(args[1], 10) >  tools.returnTreeVal(message.author.id).pokemon.size() || tools.returnTreeVal(message.author.id).pokemon.get(args[1]) == null) {
        channell.send("Invalid arguments.");
        return;
      }
      try {
        if (tools.returnTreeVal(message.author.id).inBattle) {
          channell.send("Can't change followers while in a battle.").catch(console.error);
          return;
        }
        channell.send("Changing follower.");
        if (tools.returnTreeVal(message.author.id).follower.id !== "null" && tools.returnTreeVal(message.author.id).follower.id !== null) {
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
      else if (tools.returnTreeVal(message.author.id).pokemon._size === 0) {
        channell.send("Haven't caught anything yet.").catch(console.error);
        return;
      }
      try {
        if (tools.returnTreeVal(message.author.id).pokemon.get(args[1]) != null) {
          // console.log(!args[1]);
          // console.log(args.length < 2);
          // console.log(isNaN(args[1]));
          let boxNumber = args[1];
          if (args[1] === "latest") {
            boxNumber = tools.returnTreeVal(message.author.id).pokemon.size();
            console.log(boxNumber);
          }
          if ((!args[1] || args.length < 2 || isNaN(args[1])) && args[1] !== "latest") {
            channell.send("Invalid box number.");
          }
          else
          {
            // let test =1;
            // const file = new Discord.Attachment(tools.returnTreeVal(message.author.id).pokemon.get(args[1]).icon);
            let pic = "";
            if (parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id, 10) < 10) {
              pic = "https://serebii.net/pokemon/art/00" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id, 10) + ".png";
            }
            else if (parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id, 10) < 100) {
              pic = "https://serebii.net/pokemon/art/0" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id, 10) + ".png";
            }
            else {
              pic = "https://serebii.net/pokemon/art/" + parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id,10) + ".png";
            }
            let embed = {
              color: 0x0099ff,
              title: "Pokedex #" + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).id + " " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).name,
              // url: 'https://discord.js.org',
              author: {
                name: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).nickName,
                //   icon_url: 'https://i.imgur.com/wSTFkRM.png',
                //   url: 'https://discord.js.org',
              },
              // description: "```~p follower [box number]``` \n To switch followers.",
              // thumbnail: {
              //   url: 'https://i.imgur.com/wSTFkRM.png',
              // },
              fields: [
                {
                  name: "**Level:**",
                  value: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).level,
                  inline: true,
                },
                {
                  name: "**XP to next level:**",
                  value: Math.pow(parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).level) + 1, 3) - parseInt(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).exp),
                  inline: true,
                },
                {
                  // name: "**⣀ ⣄ ⣆ ⣇ ⣧ ⣷ ⣿**",
                  name: "**HP: **",
                  value: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentHP + "/" + tools.hpformula(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber)),
                  inline: true,
                },
                {
                  name: '\u200b',
                  value: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).description,
                  inline: false,
                },
                {
                  name: '\u200b',
                  value: "Weight: " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).weight + " Height: " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).height,
                  inline: false,
                },
              ],
              image: {
                url: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).boxIcon,
                // url: 'attachment://' + tools.returnTreeVal(message.author.id).follower.pokedex + '.png',
                // url: 'attachment://108.png',
              },
              timestamp: new Date(),
              footer: {
                text: '\u200b',
                icon_url: 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
              },
            };
            for (let j = 1; j < 5; j++) {
              if (tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j] !== null && tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j] !== "null"
              && tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move !== null && tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move !== "null") {
                let moves = {
                  name: "**Move " + j + "**",
                  value: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.name + "\n" + tools.decodeType(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.type) + " " +
                      tools.decodeCategory(tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.category) + "\nPower:  " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.power + " Accuracy:  " +
                      tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.accuracy + " PP:  " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.powerPoints + "\n*" + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).currentMoves[j].move.effect + "*",
                  inline: true,
                };
                let empty = {
                  name: "\u200b",
                  value: "\u200b",
                  inline: false,
                };
                embed.fields.push(moves);
                if (j === 2) {
                  embed.fields.push(empty);
                }
              }
            }
            let owner = {
              name: "**Original Owner:**",
              value: tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).owner,
            };
            embed.fields.push(owner);

            let base = {
              name: "**Base Values**",
              value: "**Atk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.spatk +
                  "\n**Def:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.spdef +
                  "\n**Spd:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).base.hp,
              inline: true,
            };
            embed.fields.push(base);
            let ivs = {
              name: "**Individual Values**",
              value: "**Atk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.spatk +
                  "\n**Def:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.spdef +
                  "\n**Spd:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).iv.hp,
              inline: true,
            };
            embed.fields.push(ivs);
            let evs = {
              name: "**Effort Values**",
              value: "**Atk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.atk + "\n**SpAtk:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.spatk +
                  "\n**Def:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.def + "\n**SpDef:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.spdef +
                  "\n**Spd:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.spd + "\n**HP:** " + tools.returnTreeVal(message.author.id).pokemon.get(boxNumber).ev.hp,
              inline: true,
            };
            embed.fields.push(evs);

            channell.send({/*files: [file],*/ embed: embed });
            // console.log(tools.returnTreeVal(message.author.id).follower.name);
            return;
          }
        }
      }
      catch (e) {
        console.log(e);
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
      if (tools.returnTreeVal(message.author.id).follower.id === "null" || tools.returnTreeVal(message.author.id).follower.id === null) {
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
      else if (args.length <= 1) {
        channell.send("Invalid arguments.").catch(console.error);
        return;
      }
      else {
        // console.log(args[1]);
        const embed = new Discord.RichEmbed()
            .setTitle("Avatars:");
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
              if (tools.returnTreeVal(message.author.id).follower === null) {
                channell.send("Must have a follower before you can customize your card.").catch(console.error);
                return;
              }
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
        if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can change nicknames.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).pokemon._size === 0) {
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
      if(message.channel !== channell) {
        message.channel.send("Wrong channel.").catch(console.error);
        return;
      }
      else if (!tools.returnContain(message.author.id)) {
        channell.send("Must be entered into the game before you can see the shop.").catch(console.error);
        return;
      }
      else if (tools.returnTreeVal(message.author.id).inBattle) {
        channell.send("Can't shop while in a battle.").catch(console.error);
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
              // {
              //   name: "\u200b",
              //   value: "\u200b",
              //   inline: false,
              // },
              {
                name: "4) Potion",
                value: "Buy: 300\nSell: 150",
                inline: true,
              },
              {
                name: "5) Super Potion",
                value: "Buy: 700\nSell: 350",
                inline: true,
              },
              {
                name: "6) Hyper Potion",
                value: "Buy: 1200\nSell: 600",
                inline: true,
              },
              {
                name: "7) Max Potion",
                value: "Buy: 2500\nSell: 1250",
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
        else if (args[1] === "buy" || args[1] === "b") {
          if (args[2] === "1" && tools.returnTreeVal(message.author.id).money >= 200*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 200*parseInt(args[3]);
            channell.send("Bought " + args[3] + " poke balls.");
          }
          else if (args[2] === "2" && tools.returnTreeVal(message.author.id).money >= 600*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.greatBall += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 600*parseInt(args[3]);
            channell.send("Bought " + args[3] + " great balls.");
          }
          else if (args[2] === "3" && tools.returnTreeVal(message.author.id).money >= 1200*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 1200*parseInt(args[3]);
            channell.send("Bought " + args[3] + " ultra balls.");
          }
          else if (args[2] === "4" && tools.returnTreeVal(message.author.id).money >= 300*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.potion += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 300*parseInt(args[3]);
            channell.send("Bought " + args[3] + " potions.");
          }
          else if (args[2] === "5" && tools.returnTreeVal(message.author.id).money >= 700*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.superPotion += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 700*parseInt(args[3]);
            channell.send("Bought " + args[3] + " super potions.");
          }
          else if (args[2] === "6" && tools.returnTreeVal(message.author.id).money >= 1200*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.hyperPotion += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 1200*parseInt(args[3]);
            channell.send("Bought " + args[3] + " hyper potions.");
          }
          else if (args[2] === "7" && tools.returnTreeVal(message.author.id).money >= 2500*parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.maxPotion += parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) - 2500*parseInt(args[3]);
            channell.send("Bought " + args[3] + " max potions.");
          }
        }
        else if (args[1] === "sell" || args[1] === "s") {
          if (args[2] === "1" && tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall = parseInt(tools.returnTreeVal(message.author.id).items.pokeballs.pokeBall) - parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 100*parseInt(args[3]);
            channell.send("Sold " + args[3] + " poke balls.");
          }
          else if (args[2] === "2" && tools.returnTreeVal(message.author.id).items.pokeballs.greatBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.greatBall -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 300*parseInt(args[3]);
            channell.send("Sold " + args[3] + " great balls.");
          }
          else if (args[2] === "3" && tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.pokeballs.ultraBall -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 600*parseInt(args[3]);
            channell.send("Sold " + args[3] + " ultra balls.");
          }
          if (args[2] === "4" && tools.returnTreeVal(message.author.id).items.medicine.potion >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.potion -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 150*parseInt(args[3]);
            channell.send("Sold " + args[3] + " potions.");
          }
          else if (args[2] === "5" && tools.returnTreeVal(message.author.id).items.medicine.superPotion >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.superPotion -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 350*parseInt(args[3]);
            channell.send("Sold " + args[3] + " super potions.");
          }
          else if (args[2] === "6" && tools.returnTreeVal(message.author.id).items.medicine.hyperPotion >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.hyperPotion -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 600*parseInt(args[3]);
            channell.send("Sold " + args[3] + " hyper potions.");
          }
          else if (args[2] === "7" && tools.returnTreeVal(message.author.id).items.medicine.maxPotion >= parseInt(args[3])) {
            tools.returnTreeVal(message.author.id).items.medicine.maxPotion -= parseInt(args[3]);
            tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + 1250*parseInt(args[3]);
            channell.send("Sold " + args[3] + " max potions.");
          }
        }
        tools.savepokeBalls(message.author.id, message.author.username);
        tools.saveMedicine(message.author.id, message.author.username);
        tools.saveUserData(message.author.id, message.author.username);
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH NICKNAME: ' + e);
      }
    break;
    case "stop":
      console.log("stop");
      if (message.author.id === "330011881341452288" && gameStart && !tools.returnPause()) {
        tools.stopSpawn();
        tools.setPause(true);
      }
      else {
        console.log("Game not started");
      }
    break;
    case "battle":
      try {
        console.log("battle");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (tools.returnPokemonObj() == null) {
          channell.send("No pokemon has spawned.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can battle.").catch(console.error);
          return;
        }
        else if (args.length !== 1 ) {
          channell.send("Just say battle.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).follower.id === "null" || tools.returnTreeVal(message.author.id).follower.id === null) {
          channell.send("Must have a follower to battle with.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).follower.currentHP < 1) {
          channell.send("Follower must have health to battle.").catch(console.error);
          return;
        }
        else if (tools.returnifAllowed(message.author.id)) {
          channell.send("You have already caught or battled this pokemon.").catch(console.error);
          return;
        }
        else {
          if (tools.returnPokemonObj().owner != null) {
            console.log(tools.returnPokemonObj().owner);
            channell.send(tools.returnPokemonObj().name + " has been already caught by " + tools.returnPokemonObj().owner + ".").catch(console.error);
            return;
          }
          else if (tools.returnTreeVal(message.author.id).inBattle) {
            channell.send("Currently in a battle.").catch(console.error);
            return;
          }
          else {
            // tools.stopSpawn();
            tools.returnTreeVal(message.author.id).inBattle = true;
            tools.returnNotAllowed().push(message.author.id);
            channell.send("Battle starting...").catch(console.error)
              .then(d_msg => {
                tools.setBattle(tools.returnTreeVal(message.author.id), tools.returnPokemonObj(), d_msg);
                // console.log(tools.getbattleManager().length);
              });
            // channell.send("", {
            //   files: [
            //     tools.returnPokemonObj().boxIcon,
            //   ]
            // });
            // channell.send("", {
            //   files: [
            //     tools.returnTreeVal(message.author.id).follower.boxIcon
            //   ]
            // });
            const embed = new Discord.RichEmbed()
                .setTitle("You are now battling a " + tools.returnPokemonObj().name + "!")
                .setDescription("Use the following commands: \n**`~p attack`** *[Move Number]* \n**`~p medicine`** *[Medicine Number/Name]* \n**`~p pokeball`** *[Pokeball Number/Name]* \n **`~p run`**")
                .setColor(0x032cfc)
                .addField("Battle the pokemon before another appears!", "Good luck!")
                .setTimestamp();
            channell.send({embed}).catch(console.error);
            // tools.getbattleManager()[tools.getbattleManager().length-1].updated = true;
                // .then(d_msg => {
                //   tools.setBattle(tools.returnTreeVal(message.author.id), tools.returnPokemonObj(), d_msg);
                // });
            // console.log(battling);
            if (!battling) {
              battleField();
            }
            return;
          }
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH BATTLE: ' + e);
        console.log(e);
      }
    break;
    case "run":
      try {
        console.log("run");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can battle.").catch(console.error);
          return;
        }
        else if (!tools.returnTreeVal(message.author.id).inBattle) {
          channell.send("Not currently in battle.").catch(console.error);
          return;
        }
        else if (args.length !== 1 ) {
          channell.send("Just say run.").catch(console.error);
          return;
        }
        else {
          let userPlace = findUserPlace(message.author.id);
          // console.log(userPlace);
          if (tools.getbattleManager()[userPlace].updated) {
            channell.send("Please wait for opponent.").catch(console.error);
          }
          let fleeRate = 0;
          let count = tools.getbattleManager()[userPlace].fighter1Moves.length;
          let move = {
            name: "flee",
            dmg: 0,
          };
          tools.getbattleManager()[userPlace].fighter1Moves.push(move);
          // if (tools.getbattleManager()[userPlace].fighter1Moves.length > 1) {
          while (count > -1 && tools.getbattleManager()[userPlace].fighter1Moves[count].name === "flee") {
            fleeRate++;
            count--;
              // console.log("flee: " + fleeRate);
              // console.log("count: " + count);
          }
          console.log("final flee rate" + fleeRate);
          // }

          if ((tools.moveFormula(parseInt(tools.getbattleManager()[userPlace].fighter1.follower.base.spd), parseInt(tools.getbattleManager()[userPlace].fighter1.follower.iv.spd),
              parseInt(tools.getbattleManager()[userPlace].fighter1.follower.ev.spd), parseInt(tools.getbattleManager()[userPlace].fighter1.follower.level)) >
                tools.moveFormula(parseInt(tools.getbattleManager()[userPlace].fighter2.base.spd), parseInt(tools.getbattleManager()[userPlace].fighter2.iv.spd), parseInt(tools.getbattleManager()[userPlace].fighter2.ev.spd),
                  parseInt(tools.getbattleManager()[userPlace].fighter2.level))) || (((tools.moveFormula(parseInt(tools.getbattleManager()[userPlace].fighter1.follower.base.spd),
                    parseInt(tools.getbattleManager()[userPlace].fighter1.follower.iv.spd), parseInt(tools.getbattleManager()[userPlace].fighter1.follower.ev.spd),
                      parseInt(tools.getbattleManager()[userPlace].fighter1.follower.level))) * 28) /  tools.moveFormula(parseInt(tools.getbattleManager()[userPlace].fighter2.base.spd),
                        parseInt(tools.getbattleManager()[userPlace].fighter2.iv.spd), parseInt(tools.getbattleManager()[userPlace].fighter2.ev.spd),
                          parseInt(tools.getbattleManager()[userPlace].fighter2.level)) + 30) * fleeRate > tools.randomInt(0, 256))
          {
            channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + "> ```\nYour battle with " + tools.getbattleManager()[userPlace].fighter2.name + " has ended. You managed a tactical retreat.```").catch(console.error);
            tools.getbattleManager()[userPlace].fighter1.inBattle = false;
            tools.getbattleManager().splice(userPlace,1);
            if (tools.getbattleManager().length === 0) {
              clearInterval(battling);
              battling = null;
            }
          }
          else {
            tools.getbattleManager()[userPlace].moveText = "\nFailed to run away.";
            let aiMoveNumber = tools.randomAiMove(userPlace);
            let aiMove;
            if (aiMoveNumber === "Struggle") {
              aiMove = {
                name: "Struggle",
                type: properties.returnAttributes().normal,
                category: properties.returnCategory().physical,
                power: 50,
                accuracy: 100,
                powerPoints: 10,
                effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
              };
            }
            else {
              aiMove = tools.getbattleManager()[userPlace].fighter2.currentMoves[aiMoveNumber].move;
            }

            if (tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter > 0) {
              aiMove = {
                name: "Fire Spin",
                type: properties.returnAttributes().fire,
                category: properties.returnCategory().special,
                power: 35,
                accuracy: 101,
                powerPoints: 15,
                effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
              };
              tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter--;
            }
            else {
              if (aiMove.name === "Fire Spin" && (tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13 && tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13)) {
                tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter = tools.randomInt(3,5);
              }
            }

            pokemonResponse(userPlace, true, aiMove);
          }
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH RUN: ' + e);
        console.log(e);
      }
      break;
    case "medicine":
      try {
        console.log("medicine");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can heal your pokemon.").catch(console.error);
          return;
        }
        // else if (!tools.returnTreeVal(message.author.id).inBattle) {
        //   channell.send("Not currently in battle.").catch(console.error);
        //   return;
        // }
        else if (args.length < 2 || args.length > 2) {
          channell.send("Either type the name or the medicine number.\n```EX. ~p medicine 2/super/Super/s```").catch(console.error);
          return;
        }
        else {
          let moveText;
          let userPlace = findUserPlace(message.author.id);
          if (tools.returnTreeVal(message.author.id).inBattle && tools.getbattleManager()[userPlace].potionsUsed >= 3)  {
            channell.send("You already used 3 potions. If you use anymore your pokemon will get a stomachache!").catch(console.error);
            return;
          }
          else if ((args[1].toLowerCase() === "1" || args[1].toLowerCase() === "potion" || args[1].toLowerCase() === "p") && tools.returnTreeVal(message.author.id).items.medicine.potion >= 1) {
            tools.returnTreeVal(message.author.id).items.medicine.potion -= 1;
            tools.returnTreeVal(message.author.id).follower.currentHP += 20;
            tools.returnTreeVal(message.author.id).follower.currentHP = Math.min(tools.hpformula(tools.returnTreeVal(message.author.id).follower),  tools.returnTreeVal(message.author.id).follower.currentHP);
            moveText = "Potion used on " + tools.returnTreeVal(message.author.id).follower.name + " to regain 20 HP.";
          }
          else if ((args[1].toLowerCase() === "2" || args[1].toLowerCase() === "super" || args[1].toLowerCase() === "s") && tools.returnTreeVal(message.author.id).items.medicine.superPotion >= 1) {
            tools.returnTreeVal(message.author.id).items.medicine.superPotion -= 1;
            tools.returnTreeVal(message.author.id).follower.currentHP += 60;
            tools.returnTreeVal(message.author.id).follower.currentHP = Math.min(tools.hpformula(tools.returnTreeVal(message.author.id).follower),  tools.returnTreeVal(message.author.id).follower.currentHP);
            moveText = "Super potion used on " + tools.returnTreeVal(message.author.id).follower.name + " to regain 60 HP."
          }
          else if ((args[1].toLowerCase() === "3" || args[1].toLowerCase() === "hyper" || args[1].toLowerCase() === "h") && tools.returnTreeVal(message.author.id).items.medicine.hyperPotion >= 1) {
            tools.returnTreeVal(message.author.id).items.medicine.hyperPotion -= 1;
            tools.returnTreeVal(message.author.id).follower.currentHP += 120;
            tools.returnTreeVal(message.author.id).follower.currentHP = Math.min(tools.hpformula(tools.returnTreeVal(message.author.id).follower),  tools.returnTreeVal(message.author.id).follower.currentHP);
            moveText = "Hyper potion used on " + tools.returnTreeVal(message.author.id).follower.name + " to regain 120 HP.";
          }
          else if ((args[1].toLowerCase() === "4" || args[1].toLowerCase() === "max" || args[1].toLowerCase() === "m") && tools.returnTreeVal(message.author.id).items.medicine.maxPotion >= 1) {
            tools.returnTreeVal(message.author.id).items.medicine.maxPotion -= 1;
            tools.returnTreeVal(message.author.id).follower.currentHP = tools.hpformula(tools.returnTreeVal(message.author.id).follower);
            moveText = "Max potion used on " + tools.returnTreeVal(message.author.id).follower.name + " to regain full HP.";
          }
          else {
            channell.send("Check the number of items or your command.\n``` ~p medicine 2/super/Super/s```").catch(console.error);
            return;
          }
          tools.saveMedicine(message.author.id, message.author.username);
          tools.saveUserData(message.author.id, message.author.username);
          if (!tools.returnTreeVal(message.author.id).inBattle) {
            channell.send(moveText).catch(console.error);
            return;
          }
          if (tools.getbattleManager()[userPlace].updated) {
            channell.send("Please wait for opponent.").catch(console.error);
          }
          else {
            tools.getbattleManager()[userPlace].potionsUsed++;
            tools.getbattleManager()[userPlace].moveText = moveText;
            let aiMoveNumber = tools.randomAiMove(userPlace);
            let aiMove;
            if (aiMoveNumber === "Struggle") {
              aiMove = {
                name: "Struggle",
                type: properties.returnAttributes().normal,
                category: properties.returnCategory().physical,
                power: 50,
                accuracy: 100,
                powerPoints: 10,
                effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
              };
            }
            else {
              aiMove = tools.getbattleManager()[userPlace].fighter2.currentMoves[aiMoveNumber].move;
            }

            if (tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter > 0) {
              aiMove = {
                name: "Fire Spin",
                type: properties.returnAttributes().fire,
                category: properties.returnCategory().special,
                power: 35,
                accuracy: 101,
                powerPoints: 15,
                effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
              };
              tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter--;
            }
            else {
              if (aiMove.name === "Fire Spin" && (tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13 && tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13)) {
                tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter = tools.randomInt(3,5);
              }
            }

            pokemonResponse(userPlace, true, aiMove);
          }
          return;
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH MEDICINE: ' + e);
        console.log(e);
      }
      break;
    case "pokeball":
      try {
        console.log("pokeball");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can catch pokemon.").catch(console.error);
          return;
        }
        else if (!tools.returnTreeVal(message.author.id).inBattle) {
          channell.send("Not currently in battle.").catch(console.error);
          return;
        }
        else if (args.length < 2 || args.length > 2) {
          channell.send("Either type the name or the pokeball number.\n```EX. ~p pokeball 1/poke/POKE/p```").catch(console.error);
          return;
        }
        else {
          let userPlace = findUserPlace(message.author.id);
          if (tools.getbattleManager()[userPlace].updated) {
            channell.send("Please wait for opponent.").catch(console.error);
          }

          // console.log("max " + maxHp);
          // console.log("current " + currentHP);
          // let money = tools.randomInt(100, 10000/tools.getbattleManager()[userPlace].fighter2.spawnRate);
          // let experience = tools.randomInt(200, 20000/tools.returnPokemonObj().spawnRate);
          if ((args[1].toLowerCase() === "1" || args[1].toLowerCase() === "poke" || args[1].toLowerCase() === "p") && tools.getbattleManager()[userPlace].fighter1.items.pokeballs.pokeBall >= 1) {
            tools.getbattleManager()[userPlace].fighter1.items.pokeballs.pokeBall -= 1;
            if (catchPokeball(userPlace, "Poke ball", 1)) {
              return;
            }
          }
          else if ((args[1].toLowerCase() === "2" || args[1].toLowerCase() === "great" || args[1].toLowerCase() === "g") && tools.getbattleManager()[userPlace].fighter1.items.pokeballs.greatBall >= 1) {
            tools.getbattleManager()[userPlace].fighter1.items.pokeballs.greatBall -= 1;
            if (catchPokeball(userPlace, "Great ball", 1.5)) {
              return;
            }
          }
          else if ((args[1].toLowerCase() === "3" || args[1].toLowerCase() === "ultra" || args[1].toLowerCase() === "u") && tools.getbattleManager()[userPlace].fighter1.items.pokeballs.ultraBall >= 1) {
            tools.getbattleManager()[userPlace].fighter1.items.pokeballs.ultraBall -= 1;
            if (catchPokeball(userPlace, "Ultra ball", 2)) {
              return;
            }
          }
          else if ((args[1].toLowerCase() === "4" || args[1].toLowerCase() === "master" || args[1].toLowerCase() === "m") && tools.getbattleManager()[userPlace].fighter1.items.pokeballs.masterBall >= 1) {
            tools.getbattleManager()[userPlace].fighter1.items.pokeballs.masterBall -= 1;
            catchPokeball(userPlace, "Master ball", 100);
            return;
          }
          tools.getbattleManager()[userPlace].moveText += "\n" + tools.getbattleManager()[userPlace].fighter2.name + " broke free!";
          let aiMoveNumber = tools.randomAiMove(userPlace);
          let aiMove;
          if (aiMoveNumber === "Struggle") {
            aiMove = {
              name: "Struggle",
              type: properties.returnAttributes().normal,
              category: properties.returnCategory().physical,
              power: 50,
              accuracy: 100,
              powerPoints: 10,
              effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
            };
          }
          else {
            aiMove = tools.getbattleManager()[userPlace].fighter2.currentMoves[aiMoveNumber].move;
          }

          if (tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter > 0) {
            aiMove = {
              name: "Fire Spin",
              type: properties.returnAttributes().fire,
              category: properties.returnCategory().special,
              power: 35,
              accuracy: 101,
              powerPoints: 15,
              effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
            };
            tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter--;
          }
          else {
            if (aiMove.name === "Fire Spin" && (tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13 && tools.getbattleManager()[userPlace].fighter1.follower.type[1] !== 13)) {
              tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter = tools.randomInt(3,5);
            }
          }

          pokemonResponse(userPlace, true, aiMove);
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH POKEBALL: ' + e);
        console.log(e);
      }
      break;
    case "attack":
      try {
        console.log("attack");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can catch pokemon.").catch(console.error);
          return;
        }
        else if (!tools.returnTreeVal(message.author.id).inBattle) {
          channell.send("Not currently in battle.").catch(console.error);
          return;
        }
        else if (args.length < 2 || args.length > 2 || !(parseInt(args[1]) >= 1 && parseInt(args[1]) <= 4)) {
          channell.send("Just type the move number you want to use from 1-4.\n```EX. ~p attack 1```").catch(console.error);
          return;
        }
        else {
          let userPlace = findUserPlace(message.author.id);
          if (tools.getbattleManager()[userPlace].updated) {
            channell.send("Please wait for opponent.").catch(console.error);
          }
          if (tools.getbattleManager()[userPlace].fighter1.follower.currentMoves[parseInt(args[1])] !== null && tools.getbattleManager()[userPlace].fighter1.follower.currentMoves[parseInt(args[1])] !== "null" && tools.getbattleManager()[userPlace].fighter1.follower.currentMoves[parseInt(args[1])].move !== null && tools.getbattleManager()[userPlace].fighter1.follower.currentMoves[parseInt(args[1])].move !== "null") {
            let userMove = tools.getbattleManager()[userPlace].fighter1.follower.currentMoves[parseInt(args[1])].move;
            if (userMove.powerPoints < 1) {
              if (!tools.useStruggle(tools.getbattleManager()[userPlace].fighter1.follower)) {
                channell.send("Move has no power points left..").catch(console.error);
                return;
              }
              args[1] = "Struggle";
              userMove = {
                name: "Struggle",
                type: properties.returnAttributes().normal,
                category: properties.returnCategory().physical,
                power: 50,
                accuracy: 100,
                powerPoints: 10,
                effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
              };
            }
            if (tools.getbattleManager()[userPlace].fireSpinCounter.userCounter > 0) {
              userMove = {
                name: "Fire Spin",
                type: properties.returnAttributes().fire,
                category: properties.returnCategory().special,
                power: 35,
                accuracy: 101,
                powerPoints: 15,
                effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
              };
              tools.getbattleManager()[userPlace].fireSpinCounter.userCounter--;
            }
            else {
              if (userMove.name === "Fire Spin" && (tools.getbattleManager()[userPlace].fighter2.type[1] !== 13 && tools.getbattleManager()[userPlace].fighter2.type[1] !== 13)) {
                tools.getbattleManager()[userPlace].fireSpinCounter.userCounter = tools.randomInt(3,5);
              }
            }
            let aiMoveNumber = tools.randomAiMove(userPlace);
            let aiMove;
            if (aiMoveNumber === "Struggle") {
              aiMove = {
                name: "Struggle",
                type: properties.returnAttributes().normal,
                category: properties.returnCategory().physical,
                power: 50,
                accuracy: 100,
                powerPoints: 10,
                effect: "This attack is used in desperation only if the user has no PP. It also damages the user a little."
              };
            }
            else {
              aiMove = tools.getbattleManager()[userPlace].fighter2.currentMoves[aiMoveNumber].move;
            }

            if (tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter > 0) {
              aiMove = {
                name: "Fire Spin",
                type: properties.returnAttributes().fire,
                category: properties.returnCategory().special,
                power: 35,
                accuracy: 101,
                powerPoints: 15,
                effect: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns."
              };
              tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter--;
            }
            else {
              if (aiMove.name === "Fire Spin" && (tools.getbattleManager()[userPlace].fighter2.type[1] !== 13 && tools.getbattleManager()[userPlace].fighter2.type[1] !== 13)) {
                tools.getbattleManager()[userPlace].fireSpinCounter.aiCounter = tools.randomInt(3,5);
              }
            }

            let aiSpeedStage = tools.returnSpeedStage(aiMove, tools.getbattleManager()[userPlace].fighter2Stages.spd);

            if (tools.returnSpeedStage(userMove, tools.getbattleManager()[userPlace].fighter1Stages.spd) > aiSpeedStage) {
              console.log("user is going first");
              tools.getbattleManager()[userPlace].moveText = "Friendly " + tools.getbattleManager()[userPlace].fighter1.follower.name + " attacked first.";
              if (!userResponse(userPlace, false, userMove)) {
                pokemonResponse(userPlace, true, aiMove);
              }
            }
            else if (tools.returnSpeedStage(userMove, tools.getbattleManager()[userPlace].fighter1Stages.spd) < aiSpeedStage) {
              console.log("ai is going first");
              tools.getbattleManager()[userPlace].moveText = "Enemy " + tools.getbattleManager()[userPlace].fighter2.name + " attacked first.";
              if (!pokemonResponse(userPlace, false, aiMove)) {
                userResponse(userPlace, true, userMove);
              }
            }
            else {
              console.log("same speed stage");
              if (tools.moveFormula(tools.getbattleManager()[userPlace].fighter1.follower.base.spd, tools.getbattleManager()[userPlace].fighter1.follower.iv.spd, tools.getbattleManager()[userPlace].fighter1.follower.ev.spd, tools.getbattleManager()[userPlace].fighter1.follower.level) > tools.moveFormula(tools.getbattleManager()[userPlace].fighter2.base.spd, tools.getbattleManager()[userPlace].fighter2.iv.spd, tools.getbattleManager()[userPlace].fighter2.ev.spd, tools.getbattleManager()[userPlace].fighter2.level)) {
                console.log("user is going first from formula");
                tools.getbattleManager()[userPlace].moveText = "Friendly " + tools.getbattleManager()[userPlace].fighter1.follower.name + " attacked first.";
                if (!userResponse(userPlace, false, userMove)) {
                  pokemonResponse(userPlace, true, aiMove);
                }
              }
              else if (tools.moveFormula(tools.getbattleManager()[userPlace].fighter1.follower.base.spd, tools.getbattleManager()[userPlace].fighter1.follower.iv.spd, tools.getbattleManager()[userPlace].fighter1.follower.ev.spd, tools.getbattleManager()[userPlace].fighter1.follower.level) < tools.moveFormula(tools.getbattleManager()[userPlace].fighter2.base.spd, tools.getbattleManager()[userPlace].fighter2.iv.spd, tools.getbattleManager()[userPlace].fighter2.ev.spd, tools.getbattleManager()[userPlace].fighter2.level)) {
                console.log("ai is going first from formula");
                tools.getbattleManager()[userPlace].moveText = "Enemy " + tools.getbattleManager()[userPlace].fighter2.name + " attacked first.";
                if (!pokemonResponse(userPlace, false, aiMove)) {
                  userResponse(userPlace, true, userMove);
                }
              }
              else {
                console.log("same speed stats from formula, randomizing");
                if (tools.randomInt(1, 3) > 1) {
                  console.log("user is going first from random");
                  tools.getbattleManager()[userPlace].moveText = "Friendly " + tools.getbattleManager()[userPlace].fighter1.follower.name + " attacked first.";
                  if (!userResponse(userPlace, false, userMove)) {
                    pokemonResponse(userPlace, true, aiMove);
                  }
                }
                else {
                  console.log("ai is going first from random");
                  tools.getbattleManager()[userPlace].moveText = "Enemy " + tools.getbattleManager()[userPlace].fighter2.name + " attacked first.";
                  if (!pokemonResponse(userPlace, false, aiMove)) {
                    userResponse(userPlace, true, userMove);
                  }
                }
              }
            }
          }
          else {
            channell.send("Incorrect move input.").catch(console.error);
          }
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH ATTACK: ' + e);
        console.log(e);
      }
      break;
    case "pokecenter":
      try {
        console.log("pokecenter");
        if (!gameStart) {
          message.channel.send("Game not started.").catch(console.error);
          return;
        }
        else if(message.channel !== channell) {
          message.channel.send("Wrong channel.").catch(console.error);
          return;
        }
        else if (!tools.returnContain(message.author.id)) {
          channell.send("Must be entered into the game before you can heal your pokemon.").catch(console.error);
          return;
        }
        else if ((tools.returnTreeVal(message.author.id).follower.id === "null" || tools.returnTreeVal(message.author.id).follower.id === null) && isNaN(args[1])) {
          channell.send("Must have a follower before you can heal it.").catch(console.error);
          return;
        }
        else if (tools.returnTreeVal(message.author.id).inBattle) {
          channell.send("Finish your battle first.").catch(console.error);
          return;
        }
        else {
          tools.returnTreeVal(message.author.id).follower.currentHP = tools.hpformula(tools.returnTreeVal(message.author.id).follower);
          for (let i = 1; i < 5; i++) {
            if ((tools.returnTreeVal(message.author.id).follower.currentMoves[i] !== null && tools.returnTreeVal(message.author.id).follower.currentMoves[i] !== "null" && tools.returnTreeVal(message.author.id).follower.currentMoves[i].move !== null && tools.returnTreeVal(message.author.id).follower.currentMoves[i].move !== "null")) {
              // let move = tools.returnTreeVal(message.author.id).follower.currentMoves[i].move;
              console.log(tools.returnTreeVal(message.author.id).follower.currentMoves[i].move.powerPoints);
              tools.returnTreeVal(message.author.id).follower.currentMoves[i].move.powerPoints = moves.returnMoves()[tools.returnTreeVal(message.author.id).follower.currentMoves[i].move.name.split(" ").join("")].powerPoints;
              console.log(tools.returnTreeVal(message.author.id).follower.currentMoves[i].move.powerPoints);
            }
          }
          channell.send("Your follower has been healed.").catch(console.error);
          tools.saveUserData(message.author.id, message.author.username);
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH ATTACK: ' + e);
        console.log(e);
      }
      break;
  }

  function catchRateFormula (capturePokemon, user, ball) {
    // capturePokemon.currentHP -= 50;
    let maxHp = 3*tools.hpformula(capturePokemon);
    let currentHP = 2*capturePokemon.currentHP;
    let captureRate = properties.returnCaptureRate()[capturePokemon.id];
    let ballBonus = ball;
    let grassModifier;

    let numberedCaptured = user.pokemon.size() + 1;

    if (numberedCaptured >= 0 && numberedCaptured <= 30) {
      grassModifier = 0.3;
    }
    else if (numberedCaptured >= 31 && numberedCaptured <= 150) {
      grassModifier = 0.5;
    }
    else if (numberedCaptured >= 151 && numberedCaptured <= 300) {
      grassModifier = 0.7;
    }
    else if (numberedCaptured >= 301 && numberedCaptured <= 450) {
      grassModifier = 0.8;
    }
    else if (numberedCaptured >= 451 && numberedCaptured <= 600) {
      grassModifier = 0.9;
    }
    else {
      grassModifier = 1;
    }

    // console.log("MaxHP: " + maxHp);
    // console.log("currentHP: " + currentHP);
    // console.log("grassModifier: " + grassModifier);
    // console.log("captureRate: " + captureRate);
    // console.log("ballBonus: " + ballBonus);
    let finalCaptureRate = ((maxHp - currentHP) * grassModifier * captureRate * ballBonus) / maxHp;
    if (finalCaptureRate >= 255) {
      return true;
    }
    console.log("finalCaptureRate " + finalCaptureRate);

    let throwingBall = 65536 / (Math.pow((255/finalCaptureRate), 0.1875)*2);
    console.log("throwingBall " + throwingBall);
    for (let i = 0; i < 3; i++) {
      let temp = tools.randomInt(0, 65536);
      if (temp >= throwingBall) {
        return false;
      }
    }
    return true;
  }

  function battleField () {
    battling = setInterval(function(){
      for (let i = 0; i < tools.getbattleManager().length; i++) {
        // console.log(tools.getbattleManager()[i].fighter1.userID);
        if (1000000 < (new Date() - tools.getbattleManager()[i].time)) {
          channell.send("<@" + tools.getbattleManager()[i].fighter1.userID + "> Your battle with " + tools.getbattleManager()[i].fighter2.name + " has ended. They got bored and ran away :( .").catch(console.error);
          // tools.getbattleManager()[i].messages.delete().catch(console.error);
          tools.getbattleManager()[i].fighter1.inBattle = false;
          tools.getbattleManager().splice(i,1);
          if (tools.getbattleManager().length === 0) {
            clearInterval(battling);
            battling = null;
          }
        }
        else if (tools.getbattleManager()[i].updated) {
          tools.getbattleManager()[i].messages.delete().catch(console.error);
          channell.send("<@" + tools.getbattleManager()[i].fighter1.userID + "> \n```" + tools.getbattleManager()[i].moveText + "```").catch(console.error);
          let name =tools.getbattleManager()[i].fighter1.follower.name;
          // console.log(tools.getbattleManager()[i].fighter1.follower.nickName);
          if (tools.getbattleManager()[i].fighter1.follower.nickName !== null && tools.getbattleManager()[i].fighter1.follower.nickName !== "null" && tools.getbattleManager()[i].fighter1.follower.nickName !== "" &&
              tools.getbattleManager()[i].fighter1.follower.nickName !== "\u200b") {
            name = tools.getbattleManager()[i].fighter1.follower.nickName;
          }
          const embed = new Discord.RichEmbed()
              .setTitle(tools.getbattleManager()[i].fighter1.name + "'s Battle Menu")
              .setColor(0xd8eb34)
              .setTimestamp();

          embed.addField("Enemy " + tools.getbattleManager()[i].fighter2.name + "'s HP  | Level: " + tools.getbattleManager()[i].fighter2.level, "**"
              + tools.returnHP(tools.getbattleManager()[i].fighter2) + "**");
          // console.log("here1");
          embed.addField(name + "'s HP", "**" + tools.returnHP(tools.getbattleManager()[i].fighter1.follower) + "** \n" + tools.getbattleManager()[i].fighter1.follower.currentHP +
              "/" + tools.hpformula(tools.getbattleManager()[i].fighter1.follower));
          // console.log("here2");
          // embed.addField("\u200b", "\u200b", true);
          for (let j = 1; j < 5; j++) {
            if (tools.getbattleManager()[i].fighter1.follower.currentMoves[j] !== null && tools.getbattleManager()[i].fighter1.follower.currentMoves[j] !== "null" && tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move !== null && tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move !== "null") {
              let moves = {
                name: "**Move " + j + "**",
                value: "**" + tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.name + "**" + "\n" + tools.decodeType(tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.type) + " " +
                    tools.decodeCategory(tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.category) + "\nPower:  " + tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.power + " Accuracy: " +
                    tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.accuracy + " PP:  " + tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.powerPoints + "\n*" + tools.getbattleManager()[i].fighter1.follower.currentMoves[j].move.effect + "*",
                inline: true,
              };
              let empty = {
                name: "\u200b",
                value: "\u200b",
                inline: false,
              };
              embed.fields.push(moves);
              if (j === 2) {
                embed.fields.push(empty);
              }
            }
          }
          embed.addField("\u200b", "\u200b", false);
          embed.addField("Pokeball Bag", "**1) Poke Balls:** " + tools.getbattleManager()[i].fighter1.items.pokeballs.pokeBall +
              "\n**2) Great Balls: ** " + tools.getbattleManager()[i].fighter1.items.pokeballs.greatBall +
              "\n**3) Ultra Balls: ** " + tools.getbattleManager()[i].fighter1.items.pokeballs.ultraBall +
              "\n**4) Master Balls: ** " + tools.getbattleManager()[i].fighter1.items.pokeballs.masterBall, true);
          embed.addField("Medicine Bag", "**1) Potions: **" + tools.getbattleManager()[i].fighter1.items.medicine.potion +
              "\n**2) Super Potions: **" + tools.getbattleManager()[i].fighter1.items.medicine.superPotion +
              "\n**3) Hyper Potions: **" + tools.getbattleManager()[i].fighter1.items.medicine.hyperPotion +
              "\n**4) Max Potions: **" + tools.getbattleManager()[i].fighter1.items.medicine.maxPotion, true);
          channell.send({embed}).catch(console.error)
              .then(d_msg => {
                tools.getbattleManager()[i].messages = d_msg;
              });
          // console.log(tools.returnHP(tools.getbattleManager()[i].fighter1.follower, tools.getbattleManager()[i].currentHP1));
          tools.getbattleManager()[i].updated = false;
        }
      }
    },1000);
  }

  function catchPoke () {
    /*
    MAKE CATCH RATE CHANGE BASED ON LVL HP AND SHIT
     */
    try {
      if (tools.returnPokemonObj().name === args[1] || tools.returnPokemonObj().name.toLowerCase() === args[1]) {
        tools.returnPokemonObj().owner = message.author.username;
        tools.returnTreeVal(message.author.id).pokemon.insert(tools.returnTreeVal(message.author.id).pokemon._size + 1, tools.returnPokemonObj());
        tools.save(message.author.id, false, message.author.username);
        channell.send("**" + tools.returnPokemonObj().owner + "** caught a level " + tools.returnPokemonObj().level + " " + tools.returnPokemonObj().name + "!").catch(console.error);
        console.log(tools.returnPokemonObj().owner + " caught: " + tools.returnPokemonObj().name + "!");
        let money = tools.randomInt(100, 10000/tools.returnPokemonObj().spawnRate);
        channell.send("**" + tools.returnPokemonObj().owner + "** received $" + money +"!").catch(console.error);

        tools.returnTreeVal(message.author.id).money = parseInt(tools.returnTreeVal(message.author.id).money) + money;
        tools.saveUserData(message.author.id, message.author.username);
      }
    }
    catch (err) {
      client.channels.get("468170551135961108").send('ERROR WITH catchPoke(): ' + err);
    }
  }

  function findUserPlace (id) {
    let userPlace = 0;
    for (let i = 0; i < tools.getbattleManager().length; i++) {
      // console.log(tools.getbattleManager()[i].fighter1.userID);
      // console.log(id);
      if (tools.getbattleManager()[i].fighter1.userID !== id) {
        userPlace++;
      }
      else {
        return userPlace;
      }
    }
    return userPlace;
  }

  function flatExperience (fighter1, fighter2) {
    //ADD IF FAINTED IS WILD OR TRAINERS LATER
    //ADD IF PAST EVOLVED YET
    if (fighter1.follower.level === 100) {
      return 0;
    }
    let originalTrainer = 1;
    if (fighter1.name !== fighter1.follower.owner) {
      originalTrainer = 1.5;
    }
    let baseExperience = properties.returnBaseExperience()[fighter2.id];
    let enemyLevel = fighter2.level;

    return (originalTrainer * baseExperience * enemyLevel)/7;
  }

  function scaledExperience (fighter1, fighter2) {
    if (fighter1.follower.level === 100) {
      return 0;
    }
    //ADD IF FAINTED IS WILD OR TRAINERS LATER
    let baseExperience = properties.returnBaseExperience()[fighter2.id];
    let enemyLevel = fighter2.level;
    let friendlyLevel = fighter1.follower.level;
    let originalTrainer = 1;
    if (fighter1.name !== fighter1.follower.owner) {
      originalTrainer = 1.5;
    }
    return ((((baseExperience*enemyLevel)/5) * Math.pow((2*friendlyLevel + 10), 2.5)/Math.pow((friendlyLevel + enemyLevel + 10), 2.5)) + 1) * originalTrainer;
  }

  function levelGainCheck (level, experience) {
    return experience > Math.pow(level + 1, 3);
  }

  function catchPokeball (userPlace, usedBallText, ballUsed) {
    tools.savepokeBalls(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);
    tools.getbattleManager()[userPlace].moveText = usedBallText + " used on " + tools.getbattleManager()[userPlace].fighter2.name + ".";
    if (catchRateFormula(tools.getbattleManager()[userPlace].fighter2, tools.getbattleManager()[userPlace].fighter1, ballUsed) || ballUsed === 100) {
      let money = tools.randomInt(100, 10000/tools.getbattleManager()[userPlace].fighter2.spawnRate);
      let experienceGained = Math.floor(flatExperience(tools.getbattleManager()[userPlace].fighter1, tools.getbattleManager()[userPlace].fighter2));

      tools.getbattleManager()[userPlace].moveText += "\nYou caught a level " + tools.getbattleManager()[userPlace].fighter2.level + " " + tools.getbattleManager()[userPlace].fighter2.name +
          "!\nYour battle has ended and " + tools.getbattleManager()[userPlace].fighter2.name + " has been added to your box." +
          "\nYou received $" + money + ". \n" + tools.getbattleManager()[userPlace].fighter1.follower.name + " gained " + experienceGained + " experience.\n";
      tools.getbattleManager()[userPlace].fighter1.follower.exp += experienceGained;
      if (levelGainCheck(tools.getbattleManager()[userPlace].fighter1.follower.level, tools.getbattleManager()[userPlace].fighter1.follower.exp)) {
        tools.getbattleManager()[userPlace].fighter1.follower.level++;
        tools.getbattleManager()[userPlace].moveText += tools.getbattleManager()[userPlace].fighter2.name + " leveled up."
        //CHECK IF EVOLVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      tools.getbattleManager()[userPlace].fighter1.money += money;
      tools.saveUserData(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);
      tools.getbattleManager()[userPlace].fighter2.owner = tools.getbattleManager()[userPlace].fighter1.name;
      tools.getbattleManager()[userPlace].fighter1.pokemon.insert(tools.getbattleManager()[userPlace].fighter1.pokemon._size + 1, tools.getbattleManager()[userPlace].fighter2);
      tools.save(tools.getbattleManager()[userPlace].fighter1.userID, false, tools.getbattleManager()[userPlace].fighter1.name);

      channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + ">```" + tools.getbattleManager()[userPlace].moveText + "```").catch(console.error);
      tools.getbattleManager()[userPlace].fighter1.inBattle = false;
      tools.getbattleManager().splice(userPlace, 1);
      if (tools.getbattleManager().length === 0) {
        clearInterval(battling);
        battling = null;
      }
      return true;
    }
    return false;
  }

  function pokemonResponse (userPlace, updatedYet, aiMove) {
    tools.getbattleManager()[userPlace].updated = updatedYet;
    // tools.getbattleManager()[userPlace].moveText = "\n" + tools.getbattleManager()[userPlace].fighter2.name + " broke free!";
    tools.aiMove(userPlace, aiMove);
    tools.saveUserData(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);

    if (tools.getbattleManager()[userPlace].fighter1.follower.currentHP < 1 || tools.getbattleManager()[userPlace].fighter2.currentHP < 1) {
      if (tools.getbattleManager()[userPlace].fighter1.follower.currentHP > 0) {
        tools.increaseEffortValues(userPlace);
        let money = tools.randomInt(500, Math.floor(75000 / tools.getbattleManager()[userPlace].fighter2.spawnRate));
        let experienceGained = Math.floor(scaledExperience(tools.getbattleManager()[userPlace].fighter1, tools.getbattleManager()[userPlace].fighter2));
        tools.getbattleManager()[userPlace].moveText += "\nYou have won your battle with " + tools.getbattleManager()[userPlace].fighter2.name + ".\nYou received $" + money + ".\n"
            + tools.getbattleManager()[userPlace].fighter1.follower.name + " gained " + experienceGained + " experience.```";
        tools.getbattleManager()[userPlace].fighter1.follower.exp += experienceGained;
        tools.getbattleManager()[userPlace].fighter1.money += money;
        if (levelGainCheck(tools.getbattleManager()[userPlace].fighter1.follower.level, tools.getbattleManager()[userPlace].fighter1.follower.exp)) {
          tools.getbattleManager()[userPlace].fighter1.follower.level++;
          tools.getbattleManager()[userPlace].moveText += tools.getbattleManager()[userPlace].fighter2.name + " leveled up."
          //CHECK IF EVOLVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }

        channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + ">```" + tools.getbattleManager()[userPlace].moveText).catch(console.error);

        tools.saveUserData(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);
      }
      else {
        tools.getbattleManager()[userPlace].moveText += "\nEnemy " + tools.getbattleManager()[userPlace].fighter2.name + " has feinted.";
        channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + ">```" + tools.getbattleManager()[userPlace].moveText + "\nYour battle with " +
            tools.getbattleManager()[userPlace].fighter2.name + " has ended.```").catch(console.error);
      }
      tools.getbattleManager()[userPlace].fighter1.inBattle = false;
      tools.getbattleManager().splice(userPlace,1);
      if (tools.getbattleManager().length === 0) {
        clearInterval(battling);
        battling = null;
      }
      return true;
    }
    return false;
  }

  function userResponse (userPlace, updatedYet, chosenMove) {
    tools.getbattleManager()[userPlace].updated = updatedYet;
    // tools.saveUserData(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);
    // console.log(chosenMove);
    tools.userMove (userPlace, chosenMove);
    if (tools.getbattleManager()[userPlace].fighter1.follower.currentHP < 1) {
      tools.getbattleManager()[userPlace].moveText += "\nFriendly " + tools.getbattleManager()[userPlace].fighter1.follower.name + " has feinted.";
      channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + ">```" + tools.getbattleManager()[userPlace].moveText + "\nYour battle with " +
          tools.getbattleManager()[userPlace].fighter2.name + " has ended.```").catch(console.error);
      tools.getbattleManager()[userPlace].fighter1.inBattle = false;
      tools.getbattleManager().splice(userPlace,1);
      if (tools.getbattleManager().length === 0) {
        clearInterval(battling);
        battling = null;
      }
      return true;
    }
    if (tools.getbattleManager()[userPlace].fighter2.currentHP < 1) {
      tools.increaseEffortValues(userPlace);
      let money = tools.randomInt(500, Math.floor(75000/tools.getbattleManager()[userPlace].fighter2.spawnRate));
      let experienceGained = Math.floor(scaledExperience(tools.getbattleManager()[userPlace].fighter1, tools.getbattleManager()[userPlace].fighter2));
      tools.getbattleManager()[userPlace].moveText+= "\nYou have won your battle with " + tools.getbattleManager()[userPlace].fighter2.name + ".\nYou received $" + money + ".\n"
          + tools.getbattleManager()[userPlace].fighter1.follower.name + " gained " + experienceGained + " experience.```";
      tools.getbattleManager()[userPlace].fighter1.follower.exp += experienceGained;
      tools.getbattleManager()[userPlace].fighter1.money += money;
      if (levelGainCheck(tools.getbattleManager()[userPlace].fighter1.follower.level, tools.getbattleManager()[userPlace].fighter1.follower.exp)) {
        tools.getbattleManager()[userPlace].fighter1.follower.level++;
        tools.getbattleManager()[userPlace].moveText += tools.getbattleManager()[userPlace].fighter2.name + " leveled up."
        //CHECK IF EVOLVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }

      channell.send("<@" + tools.getbattleManager()[userPlace].fighter1.userID + ">```" + tools.getbattleManager()[userPlace].moveText).catch(console.error);

      tools.saveUserData(tools.getbattleManager()[userPlace].fighter1.userID, tools.getbattleManager()[userPlace].fighter1.name);

      tools.getbattleManager()[userPlace].fighter1.inBattle = false;
      tools.getbattleManager().splice(userPlace,1);
      if (tools.getbattleManager().length === 0) {
        clearInterval(battling);
        battling = null;
      }
      return true;
    }
    return false;
  }
};