// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
/*
Ability:
Nature:
item-held:
shiny?:
evolution condition:
more to be added if needed*/
const Discord = require('discord.js');
let min;
let sec;
let tree;
let pokemon;
const fs = require('fs');
const readline = require('readline');

const rarity = {
  ultraCommon: 85,
  common: 73,
  uncommon: 55,
  rare: 49,
  ultraRare: 27,
  legendary: 25,
};

const attributes = {
  bug: 1,
  ground: 2,
  dragon: 3,
  ice: 4,
  electric: 5,
  normal: 6,
  fight: 7,
  poison: 8,
  fire: 9,
  psychic: 10,
  flying: 11,
  rock: 12,
  ghost: 13,
  water: 14,
  grass: 15,
};

const pokDex = {
  1: {
    id: 1,
    name: "Bulbasaur",
    spawnRate: rarity.rare,
    level: null,
    weight: "15.2lbs",
    height: "2'04\"",
    spawnIcon: "./files/pokemon/pokemonIcons/1.PNG",
    boxIcon: "https://www.serebii.net/pokemon/art/001.png",
    owner: undefined,
    nickName: "\u200b",
    exp: 0,
    traded: false,
    description: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
    type: {
      1: attributes.grass,
      2: attributes.poison,
    },
    base: {
      atk: 1,
      spatk: 1,
      def: 1,
      spdef: 1,
      spd: 1,
      hp: 1,
      maxhp: 1,
    },
    iv : {
      atk : 1,
      spatk: 1,
      def: 1,
      spdef: 1,
      spd: 1,
      hp: 1,
    },
    ev : {
      atk : 1,
      spatk: 1,
      def: 1,
      spdef: 1,
      spd: 1,
      hp: 1,
    },
  },
};

let AvlTree = require('./avl-tree.js');

module.exports = {
  spawn: function (channell) {
    try {
      // module.exports.rand(0,100);
      module.exports.setTimer(0, 60);
      setInterval(function(){
        sec--;
        if(sec === 0){
          min--;
          sec = 60;
          if (min === -1){
            min = Math.floor(Math.random() * 50);
            console.log("timer: " + min +" : " + sec);
            module.exports.createPokemonObj();
            console.log(pokemon);
            const embed = new Discord.RichEmbed()
                .setTitle("**A new Pokemon appeared.**")
                .setDescription("Use command:\n  `~p catch [name] [poke ball]` \nto capture the pokemon")
                .setColor(0xcc3300)
                .setFooter( "Gotta catch 'em all!'" ,"https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG")
                .addField("Catch the pokemon before another appears!", "Must have entered the game to catch.")
                .addField("Use command:\n  `~p enter`", " To enter the game.")
                .attachFile(pokemon.spawnIcon)
                .setTimestamp();
            channell.send({embed}).catch(console.error);
          }
        }
      },1000);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH spawn(): ' + e);
    }

  },

  load: function (id, name) {
    try {
      //LOADING POKEBALL ITEMS
      try {
        fs.writeFileSync("../jsBot/files/pokemon/savedData/pokeBalls/" + id + ".json", "player: " + name, { flag: 'wx' }, function (err) {
          if (err) { }
        });
      }
      catch {
      }
      let ballLine = 0;
      const ballUser = readline.createInterface({
        input: fs.createReadStream("../jsBot/files/pokemon/savedData/pokeBalls/" + id + ".json"),
        output: process.stdout,
        console: false
      });
      ballUser.on('line', function(line) {
        if (ballLine !== 0) {
          let split = line.split("pokeBall:").join(',').split("greatBall:").join(',').split("ultraBall:").join(',').split("masterBall:").join(',').split(',');
          module.exports.returnTreeVal(id).items.pokeballs = module.exports.createPokeObj(split[1], split[2], split[3], split[4]);
        }
        ballLine++;
      });
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH LOADING POKEBALL ITEMS: ' + e);
    }

    try {
      //LOADING MEDICINE ITEMS
      try {
        fs.writeFileSync("../jsBot/files/pokemon/savedData/medicine/" + id + ".json", "player: " + name, { flag: 'wx' }, function (err) {
          if (err) { }
        });
      }
      catch {
      }
      let medicineLine = 0;
      const readMedicine = readline.createInterface({
        input: fs.createReadStream("../jsBot/files/pokemon/savedData/medicine/" + id + ".json"),
        output: process.stdout,
        console: false
      });
      readMedicine.on('line', function(line) {
        if (medicineLine !== 0) {
          let split = line.split("potion:").join(',').split("superPotion:").join(',').split("hyperPotion:").join(',').split("maxPotion:").join(',').split(',');
          module.exports.returnTreeVal(id).items.medicine = module.exports.createPotsObj(split[1], split[2], split[3], split[4]);
        }
        medicineLine++;
      });
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH LOADING MEDICINE: ' + e);
    }

    try {
      //LOADING USER DATA
      try {
        fs.writeFileSync("../jsBot/files/pokemon/savedData/userData/" + id + ".json", "player: " + name, { flag: 'wx' }, function (err) {
          if (err) { }
        });
      }
      catch {
      }
      let userLine = 0;
      const readUser = readline.createInterface({
        input: fs.createReadStream("../jsBot/files/pokemon/savedData/userData/" + id + ".json"),
        output: process.stdout,
        console: false
      });
      readUser.on('line', function(line) {
        if (userLine !== 0) {
          let split = line.split("icon:").join(',').split("money:").join(',').split("followerId:").join(',').split("followerOwner:").join(',').split("followerNickname:").join(',').split("followerLevel:").join(',').split(',');
          module.exports.returnTreeVal(id).icon = split[1];
          module.exports.returnTreeVal(id).money = split[2];
          let follow = {
            pokedex: parseInt(split[3], 10),
            name: module.exports.decodeName(parseInt(split[3], 10)),
            level: split[6],
            icon: "./files/pokemon/pokemonIcons/" + parseInt(split[3], 10) + ".PNG",
            owner: split[4],
            spawnRarity: module.exports.decodeRarity(parseInt(split[3], 10)),
            nickName: split[5],
          };
          console.log(follow);
          module.exports.returnTreeVal(id).follower = follow;
        }
        userLine++;
      });
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH LOADING userData: ' + e);
    }

    try {
      //LOADING POKEMON
      try {
        fs.writeFileSync("../jsBot/files/pokemon/savedData/pokemon/" + id + ".json", "player: " + name, { flag: 'wx' }, function (err) {
          if (err) { }
        });
      }
      catch {
      }
      let pokeLine = 0;
      const readInterface = readline.createInterface({
        input: fs.createReadStream("../jsBot/files/pokemon/savedData/pokemon/" + id + ".json"),
        output: process.stdout,
        console: false
      });
      readInterface.on('line', function(line) {
        let split = line.split("pokedex:").join(',').split("name:").join(',').split("level:").join(',').split("icon:").join(',').split("owner:").join(',').split("spawnRarity:").join(',').split("nickName:").join(',').split(',');
        if (pokeLine !== 0) {
          let poke = {
            pokedex: split[1],
            name: split[2],
            level: split[3],
            icon: split[4],
            owner: split[5],
            spawnRarity: split[6],
            nickName: split[7],
          };
          if (poke.nickName === "undefined") {
            poke.nickName = undefined;
          }
          module.exports.returnTreeVal(id).pokemon.insert(pokeLine, poke);
        }
        pokeLine++;
      });
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH LOADING POKEMON: ' + e);
    }

  },

  save: function (id, nickNames, username) {
    try {
      const path = "../jsBot/files/pokemon/savedData/pokemon/" + id + ".json";
      if (!nickNames) {
        try {
          let box = module.exports.returnTreeVal(id).pokemon;
          for (let i = box._size; i < box._size + 1; i++) {
            fs.appendFileSync(path, "\n" + "pokedex:" + box.get(i).pokedex + "name:" + box.get(i).name + "level:" + box.get(i).level + "icon:" + box.get(i).icon + "owner:" + box.get(i).owner + "spawnRarity:" + box.get(i).spawnRarity + "nickName:" + box.get(i).nickName);
          }
        }
        catch(err) {
          console.error(err);
        }
        return;
      }
      fs.openSync(path, 'w+');
      fs.appendFileSync(path, "player:" + username);
      try {
        let box = module.exports.returnTreeVal(id).pokemon;
        for (let i = 1; i < box._size + 1; i++) {
          fs.appendFileSync(path, "\n" + "pokedex:" + box.get(i).pokedex + "name:" + box.get(i).name + "level:" + box.get(i).level + "icon:" + box.get(i).icon + "owner:" + box.get(i).owner + "spawnRarity:" + box.get(i).spawnRarity + "nickName:" + box.get(i).nickName);
        }
      }
      catch(err) {
        console.error(err);
      }
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH save(): ' + e);
    }
  },

  saveMedicine: function (id, username) {
    try {
      const path = "../jsBot/files/pokemon/savedData/medicine/" + id + ".json";
      fs.openSync(path, 'w+');
      fs.appendFileSync(path, "player:" + username);
      try {
        let medicineList = module.exports.returnTreeVal(id).items.medicine;
        fs.appendFileSync(path, "\n" + "potion:" + medicineList.potion + "superPotion:" + medicineList.superPotion + "hyperPotion:" + medicineList.hyperPotion + "maxPotion:" + medicineList.maxPotion);
      }
      catch(err) {
        console.error(err);
      }
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH saveMedicine(): ' + e);
    }

  },

  savepokeBalls: function (id, username) {
    try {
      const path = "../jsBot/files/pokemon/savedData/pokeBalls/" + id + ".json";
      fs.openSync(path, 'w+');
      fs.appendFileSync(path, "player:" + username);
      try {
        let pokeList = module.exports.returnTreeVal(id).items.pokeballs;
        fs.appendFileSync(path, "\n" + "pokeBall:" + pokeList.pokeBall + "greatBall:" + pokeList.greatBall + "ultraBall:" + pokeList.ultraBall + "masterBall:" + pokeList.masterBall);
      }
      catch(err) {
        console.error(err);
      }
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH savepokeBalls(): ' + e);
    }

  },

  saveUserData: function (id, username) {
    try {
      const path = "../jsBot/files/pokemon/savedData/userData/" + id + ".json";
      fs.openSync(path, 'w+');
      fs.appendFileSync(path, "player:" + username);
      let user = module.exports.returnTreeVal(id);
      try {
        fs.appendFileSync(path, "\n" + "icon:" + user.icon + "money:" + user.money + "followerId:" + user.follower.pokedex + "followerOwner:" + user.follower.owner + "followerNickname:" + user.follower.nickName + "followerLevel:" + user.follower.level);
      }
      catch(err) {
        console.error(err);
      }
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH saveUserData(): ' + e);
    }

  },

  setTimer: function (minute, second) {
    min = minute;
    sec = second;
  },

  decCounter: function () {
    sec = 1;
  },

  createTree: function () {
    return new AvlTree();
  },

  setTree: function (input) {
    tree = input;
  },

  insertTree: function (key, val) {
    try {
      tree.insert(key, val);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH insertTree(): ' + e);
    }
  },

  returnTreeVal: function (key) {
    try {
      return tree.get(key);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH returnTreeVal: ' + e);
    }
  },

  returnContain: function (id) {
    try {
      return tree.contains(id);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH returnContain(): ' + e);
    }
  },

  returnObj: function (id, name, message) {
    return {
      name: name,
      userID: id,
      pokemon: module.exports.createTree(),
      items: module.exports.createItemsObj(),
      present: 0,
      date: new Date(),
      follower: null,
      icon: message.author.avatarURL,
      money: 0,
    };
  },

  createItemsObj: function () {
    return {
      pokeballs: module.exports.createPokeObj(0, 0, 0, 0),
      medicine: module.exports.createPotsObj(0, 0, 0, 0),
    };
  },

  createPokeObj: function (pokeBallAmount, greatBallAmount, ultraBallAmount, masterBallAmount) {
    return {
      pokeBall: pokeBallAmount,
      greatBall: greatBallAmount,
      ultraBall: ultraBallAmount,
      masterBall: masterBallAmount,
    };
  },

  createPotsObj: function (potionAmount,  superPotionAmount, hyperPotionAmount, maxPotionAmount){
    return {
      potion: potionAmount,
      superPotion: superPotionAmount,
      hyperPotion: hyperPotionAmount,
      maxPotion: maxPotionAmount,
    };
  },

  createPokemonObj: function () {
    try {
      //   let id = module.exports.randomInt(1, 152);
      //   let bias = module.exports.rand(0, 80, 0.5);
        // while (bias > module.exports.decodeRarity(id)) {
        //   id = module.exports.randomInt(1, 152);
      let test = 1;
        // }
      pokemon = pokDex[test];
      pokemon.level = decodeLevel(pokemon.spawnRate);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH createPokemonObj(): ' + e);
    }
  },

  returnPokemonObj: function () {
    return pokemon;
  },

  decodeLevel: function (rarity) {
    switch (rarity) {
      case 85: return module.exports.randomInt(3, 11);
      case 73: return module.exports.randomInt(8, 16);
      case 55: return module.exports.randomInt(13, 28);
      case 49: return module.exports.randomInt(20, 36);
      case 27: return module.exports.randomInt(30, 47);
      case 25: return module.exports.randomInt(55, 66);
    }
  },

  randomNum: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  randomInt: function (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  rand: function (min, max, bias) {
    return min + (max - min) * Math.pow( module.exports.randomNum(0, 1) ,bias);
  },
};

