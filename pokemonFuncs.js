// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
/*ID#:
Name:
Level:
weight:
height:
type:
sprite:
img:
Ability:
Nature:
Stats: atk, spatk, def, spdef, spd, hp, max hp.
IV : atk, spatk, def, spdef, spd, hp
EV: atk, spatk, def, spdef, spd, hp
Gender:m/f/n
exp:
max-exp:
item-held:
description:
sound:
footprint:
closeness:
region found:
unlock condition:
shiny?:
traded?:
contest type:
egg group:
breeding group:
tm group:
hm group:
catch rate:
apprearance rate:
evolution family:
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

const spawnRate = {
  Bulbasaur: rarity.rare,
  Ivysaur: rarity.ultraRare,
  Venusaur: rarity.ultraRare,
  Charmander: rarity.rare,
  Charmeleon: rarity.ultraRare,
  Charizard: rarity.ultraRare,
  Squirtle: rarity.uncommon,
  Wartortle: rarity.ultraRare,
  Blastoise: rarity.ultraRare,
  Caterpie: rarity.common,
  Metapod: rarity.uncommon,
  Butterfree: rarity.ultraRare,
  Weedle: rarity.ultraCommon,
  Kakuna: rarity.uncommon,
  Beedrill: rarity.rare,
  Pidgey: rarity.ultraCommon,
  Pidgeotto: rarity.uncommon,
  Pidgeot: rarity.rare,
  Rattata: rarity.ultraCommon,
  Raticate: rarity.uncommon,
  Spearow: rarity.common,
  Fearow: rarity.ultraRare,
  Ekans: rarity.uncommon,
  Arbok: rarity.ultraRare,
  Pikachu: rarity.uncommon,
  Raichu: rarity.ultraRare,
  Sandshrew: rarity.uncommon,
  Sandslash: rarity.ultraRare,
  NidoranF: rarity.uncommon,
  Nidorina: rarity.ultraRare,
  Nidoqueen: rarity.ultraRare,
  NidoranM: rarity.uncommon,
  Nidorino: rarity.ultraRare,
  Nidoking: rarity.ultraRare,
  Clefairy: rarity.uncommon,
  Clefable: rarity.ultraRare,
  Vulpix: rarity.uncommon,
  Ninetales: rarity.ultraRare,
  Jigglypuff: rarity.common,
  Wigglytuff: rarity.ultraRare,
  Zubat: rarity.common,
  Golbat: rarity.uncommon,
  Oddish: rarity.common,
  Gloom: rarity.rare,
  Vileplume: rarity.ultraRare,
  Paras: rarity.ultraCommon,
  Parasect: rarity.ultraRare,
  Venonat: rarity.ultraCommon,
  Venomoth: rarity.rare,
  Diglett: rarity.uncommon,
  Dugtrio: rarity.ultraRare,
  Meowth: rarity.uncommon,
  Persian: rarity.ultraRare,
  Psyduck: rarity.uncommon,
  Golduck: rarity.ultraRare,
  Mankey: rarity.uncommon,
  Primeape: rarity.ultraRare,
  Growlithe: rarity.uncommon,
  Arcanine: rarity.ultraRare,
  Poliwag: rarity.uncommon,
  Poliwhirl: rarity.ultraRare,
  Poliwrath: rarity.ultraRare,
  Abra: rarity.uncommon,
  Kadabra: rarity.ultraRare,
  Alakazam: rarity.ultraRare,
  Machop: rarity.uncommon,
  Machoke: rarity.ultraRare,
  Machamp: rarity.ultraRare,
  Bellsprout: rarity.common,
  Weepinbell: rarity.rare,
  Victreebel: rarity.ultraRare,
  Tentacool: rarity.uncommon,
  Tentacruel: rarity.ultraRare,
  Geodude: rarity.uncommon,
  Graveler: rarity.ultraRare,
  Golem: rarity.ultraRare,
  Ponyta: rarity.uncommon,
  Rapidash: rarity.ultraRare,
  Slowpoke: rarity.uncommon,
  Slowbro: rarity.ultraRare,
  Magnemite: rarity.ultraCommon,
  Magneton: rarity.ultraRare,
  Farfetchd: rarity.uncommon,
  Doduo: rarity.uncommon,
  Dodrio: rarity.ultraRare,
  Seel: rarity.uncommon,
  Dewgong: rarity.ultraRare,
  Grimer: rarity.ultraRare,
  Muk: rarity.ultraRare,
  Shellder: rarity.uncommon,
  Cloyster: rarity.ultraRare,
  Gastly: rarity.uncommon,
  Haunter: rarity.ultraRare,
  Gengar: rarity.ultraRare,
  Onix: rarity.ultraRare,
  Drowzee: rarity.uncommon,
  Hypno: rarity.ultraRare,
  Krabby: rarity.common,
  Kingler: rarity.ultraRare,
  Voltorb: rarity.common,
  Electrode: rarity.ultraRare,
  Exeggcute: rarity.uncommon,
  Exeggutor: rarity.ultraRare,
  Cubone: rarity.uncommon,
  Marowak: rarity.ultraRare,
  Hitmonlee: rarity.ultraRare,
  Hitmonchan: rarity.ultraRare,
  Lickitung: rarity.uncommon,
  Koffing: rarity.rare,
  Weezing: rarity.ultraRare,
  Rhyhorn: rarity.uncommon,
  Rhydon: rarity.ultraRare,
  Chansey: rarity.ultraRare,
  Tangela: rarity.ultraRare,
  Kangaskhan: rarity.rare,
  Horsea: rarity.uncommon,
  Seadra: rarity.ultraRare,
  Goldeen: rarity.uncommon,
  Seaking: rarity.ultraRare,
  Staryu: rarity.uncommon,
  Starmie: rarity.ultraRare,
  MrMime: rarity.rare,
  Scyther: rarity.ultraRare,
  Jynx: rarity.ultraRare,
  Electabuzz: rarity.ultraRare,
  Magmar: rarity.rare,
  Pinsir: rarity.rare,
  Tauros: rarity.uncommon,
  Magikarp: rarity.uncommon,
  Gyarados: rarity.ultraRare,
  Lapras: rarity.ultraRare,
  Ditto: rarity.ultraRare,
  Eevee: rarity.ultraCommon,
  Vaporeon: rarity.ultraRare,
  Jolteon: rarity.ultraRare,
  Flareon: rarity.ultraRare,
  Porygon: rarity.ultraRare,
  Omanyte: rarity.ultraRare,
  Omastar: rarity.ultraRare,
  Kabuto: rarity.ultraRare,
  Kabutops: rarity.ultraRare,
  Aerodactyl: rarity.ultraRare,
  Snorlax: rarity.ultraRare,
  Articuno: rarity.legendary,
  Zapdos: rarity.legendary,
  Moltres: rarity.legendary,
  Dratini: rarity.rare,
  Dragonair: rarity.ultraRare,
  Dragonite: rarity.ultraRare,
  Mewtwo: rarity.legendary,
  Mew: rarity.legendary,
};

const pokdex = {
  Bulbasaur: 1,
  Ivysaur: 2,
  Venusaur: 3,
  Charmander: 4,
  Charmeleon: 5,
  Charizard: 6,
  Squirtle: 7,
  Wartortle: 8,
  Blastoise: 9,
  Caterpie: 10,
  Metapod: 11,
  Butterfree: 12,
  Weedle: 13,
  Kakuna: 14,
  Beedrill: 15,
  Pidgey: 16,
  Pidgeotto: 17,
  Pidgeot: 18,
  Rattata: 19,
  Raticate: 20,
  Spearow: 21,
  Fearow: 22,
  Ekans: 23,
  Arbok: 24,
  Pikachu: 25,
  Raichu: 26,
  Sandshrew: 27,
  Sandslash: 28,
  NidoranF: 29,
  Nidorina: 30,
  Nidoqueen: 31,
  NidoranM: 32,
  Nidorino: 33,
  Nidoking: 34,
  Clefairy: 35,
  Clefable: 36,
  Vulpix: 37,
  Ninetales: 38,
  Jigglypuff: 39,
  Wigglytuff: 40,
  Zubat: 41,
  Golbat: 42,
  Oddish: 43,
  Gloom: 44,
  Vileplume: 45,
  Paras: 46,
  Parasect: 47,
  Venonat: 48,
  Venomoth: 49,
  Diglett: 50,
  Dugtrio: 51,
  Meowth: 52,
  Persian: 53,
  Psyduck: 54,
  Golduck: 55,
  Mankey: 56,
  Primeape: 57,
  Growlithe: 58,
  Arcanine: 59,
  Poliwag: 60,
  Poliwhirl: 61,
  Poliwrath: 62,
  Abra: 63,
  Kadabra: 64,
  Alakazam: 65,
  Machop: 66,
  Machoke: 67,
  Machamp: 68,
  Bellsprout: 69,
  Weepinbell: 70,
  Victreebel: 71,
  Tentacool: 72,
  Tentacruel: 73,
  Geodude: 74,
  Graveler: 75,
  Golem: 76,
  Ponyta: 77,
  Rapidash: 78,
  Slowpoke: 79,
  Slowbro: 80,
  Magnemite: 81,
  Magneton: 82,
  Farfetchd: 83,
  Doduo: 84,
  Dodrio: 85,
  Seel: 86,
  Dewgong: 87,
  Grimer: 88,
  Muk: 89,
  Shellder: 90,
  Cloyster: 91,
  Gastly: 92,
  Haunter: 93,
  Gengar: 94,
  Onix: 95,
  Drowzee: 96,
  Hypno: 97,
  Krabby: 98,
  Kingler: 99,
  Voltorb: 100,
  Electrode: 101,
  Exeggcute: 102,
  Exeggutor: 103,
  Cubone: 104,
  Marowak: 105,
  Hitmonlee: 106,
  Hitmonchan: 107,
  Lickitung: 108,
  Koffing: 109,
  Weezing: 110,
  Rhyhorn: 111,
  Rhydon: 112,
  Chansey: 113,
  Tangela: 114,
  Kangaskhan: 115,
  Horsea: 116,
  Seadra: 117,
  Goldeen: 118,
  Seaking: 119,
  Staryu: 120,
  Starmie: 121,
  MrMime: 122,
  Scyther: 123,
  Jynx: 124,
  Electabuzz: 125,
  Magmar: 126,
  Pinsir: 127,
  Tauros: 128,
  Magikarp: 129,
  Gyarados: 130,
  Lapras: 131,
  Ditto: 132,
  Eevee: 133,
  Vaporeon: 134,
  Jolteon: 135,
  Flareon: 136,
  Porygon: 137,
  Omanyte: 138,
  Omastar: 139,
  Kabuto: 140,
  Kabutops: 141,
  Aerodactyl: 142,
  Snorlax: 143,
  Articuno: 144,
  Zapdos: 145,
  Moltres: 146,
  Dratini: 147,
  Dragonair: 148,
  Dragonite: 149,
  Mewtwo: 150,
  Mew: 151,
};

var AvlTree = require('./avl-tree.js');

module.exports = {
  spawn: function (channell) {
    try {
      // module.exports.rand(0,100);
      module.exports.setTimer(0, 60);
      setInterval(function(){
        sec--;
        if(sec == 0){
          min--;
          sec = 60;
          if (min == -1){
            min = Math.floor(Math.random() * 50);
            console.log("timer: " + min +" : " + sec);
            module.exports.createPokemonObj();
            console.log(pokemon.name);
            const embed = new Discord.RichEmbed()
                .setTitle("**A new Pokemon appeared.**")
                .setDescription("Use command:\n  `~p catch [name] [poke ball]` \nto capture the pokemon")
                .setColor(0xcc3300)
                .setFooter( "Gotta catch 'em all!'" ,"https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG")
                .addField("Catch the pokemon before another appears!", "Must have entered the game to catch.")
                .addField("Use command:\n  `~p enter`", " To enter the game.")
                .attachFile(pokemon.icon)
                .setTimestamp()
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
      const path = "../jsBot/files/pokemon/savedData/pokemon/" + id + ".json"
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

  deleteTreeVal: function (key) {
    tree.delete(key);
  },

  returnObj: function (id, name, message) {
    let user = {
      name: name,
      userID: id,
      pokemon: module.exports.createTree(),
      items: module.exports.createItemsObj(),
      present: 0,
      date: new Date(),
      follower: null,
      icon: message.author.avatarURL,
      money: 0,
    }
    return user;
  },

  createItemsObj: function () {
    let items = {
      pokeballs: module.exports.createPokeObj(0, 0, 0, 0),
      medicine: module.exports.createPotsObj(0, 0, 0, 0),
    }
    return items;
  },

  createPokeObj: function (pokeBallAmount, greatBallAmount, ultraBallAmount, masterBallAmount) {
    let pokeBalls = {
      pokeBall : pokeBallAmount,
      greatBall : greatBallAmount,
      ultraBall: ultraBallAmount,
      masterBall: masterBallAmount,
    }
    return pokeBalls;
  },

  createPotsObj: function (potionAmount,  superPotionAmount, hyperPotionAmount, maxPotionAmount){
    let medicine = {
      potion : potionAmount,
      superPotion : superPotionAmount,
      hyperPotion: hyperPotionAmount,
      maxPotion: maxPotionAmount,
    }
    return medicine;
  },

  createPokemonObj: function () {
    try {
      // let ultraCommon = 0;
      // let common = 0;
      // let uncommon = 0;
      // let rare = 0;
      // let ultraRare = 0;
      // let legendary = 0;
      // for (let i = 0; i < 1000; i++) {
        let id = module.exports.randomInt(1, 152);
        let bias = module.exports.rand(0, 80, 0.5);
        // console.log(bias);
        while (bias > module.exports.decodeRarity(id)) {
          id = module.exports.randomInt(1, 152);
        }
        pokemon = {
          pokedex: id,
          name: module.exports.decodeName(id),
          level: module.exports.decodeLevel(module.exports.decodeRarity(id)),
          icon: "./files/pokemon/pokemonIcons/" + id + ".PNG",
          owner: undefined,
          spawnRarity: module.exports.decodeRarity(id),
          nickName: "\u200b",
        };
        // switch (pokemon.spawnRarity) {
        //   case 85:
        //     ultraCommon++;
        //     break;
        //   case 73:
        //     common++;
        //     break;
        //   case 55:
        //     uncommon++;
        //     break;
        //   case 49:
        //     rare++;
        //     break;
        //   case 27:
        //     ultraRare++;
        //     break;
        //   case 25:
        //     legendary++;
        //     break;
        // }
      // }
      // console.log("ultraCommon: " + ultraCommon);
      // console.log("common: " + common);
      // console.log("uncommon: " + uncommon);
      // console.log("rare: " + rare);
      // console.log("ultraRare: " + ultraRare);
      // console.log("legendary: " + legendary);

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
      case 85: return module.exports.randomInt(3, 11); break;
      case 73: return module.exports.randomInt(8, 16); break;
      case 55: return module.exports.randomInt(13, 28); break;
      case 49: return module.exports.randomInt(20, 36); break;
      case 27: return module.exports.randomInt(30, 47); break;
      case 25: return module.exports.randomInt(55, 66); break;
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

  decodeRarity: function (id) {
    switch (id) {
      case pokdex.Bulbasaur: return spawnRate.Bulbasaur; break;
      case pokdex.Ivysaur: return spawnRate.Ivysaur; break;
      case pokdex.Venusaur: return spawnRate.Venusaur; break;
      case pokdex.Charmander: return spawnRate.Charmander; break;
      case pokdex.Charmeleon: return spawnRate.Charmeleon; break;
      case pokdex.Charizard: return spawnRate.Charizard; break;
      case pokdex.Squirtle: return spawnRate.Squirtle; break;
      case pokdex.Wartortle: return spawnRate.Wartortle; break;
      case pokdex.Blastoise: return spawnRate.Blastoise; break;
      case pokdex.Caterpie: return spawnRate.Caterpie; break;
      case pokdex.Metapod: return spawnRate.Metapod; break;
      case pokdex.Butterfree: return spawnRate.Butterfree; break;
      case pokdex.Weedle: return spawnRate.Weedle; break;
      case pokdex.Kakuna: return spawnRate.Kakuna; break;
      case pokdex.Beedrill: return spawnRate.Beedrill; break;
      case pokdex.Pidgey: return spawnRate.Pidgey; break;
      case pokdex.Pidgeotto: return spawnRate.Pidgeotto; break;
      case pokdex.Pidgeot: return spawnRate.Pidgeot; break;
      case pokdex.Rattata: return spawnRate.Rattata; break;
      case pokdex.Raticate: return spawnRate.Raticate; break;
      case pokdex.Spearow: return spawnRate.Spearow; break;
      case pokdex.Fearow: return spawnRate.Fearow; break;
      case pokdex.Ekans: return spawnRate.Ekans; break;
      case pokdex.Arbok: return spawnRate.Arbok; break;
      case pokdex.Pikachu: return spawnRate.Pikachu; break;
      case pokdex.Raichu: return spawnRate.Raichu; break;
      case pokdex.Sandshrew: return spawnRate.Sandshrew; break;
      case pokdex.Sandslash: return spawnRate.Sandslash; break;
      case pokdex.NidoranF: return spawnRate.NidoranF; break;
      case pokdex.Nidorina: return spawnRate.Nidorina; break;
      case pokdex.Nidoqueen: return spawnRate.Nidoqueen; break;
      case pokdex.NidoranM: return spawnRate.NidoranM; break;
      case pokdex.Nidorino: return spawnRate.Nidorino; break;
      case pokdex.Nidoking: return spawnRate.Nidoking; break;
      case pokdex.Clefairy: return spawnRate.Clefairy; break;
      case pokdex.Clefable: return spawnRate.Clefable; break;
      case pokdex.Vulpix: return spawnRate.Vulpix; break;
      case pokdex.Ninetales: return spawnRate.Ninetales; break;
      case pokdex.Jigglypuff: return spawnRate.Jigglypuff; break;
      case pokdex.Wigglytuff: return spawnRate.Wigglytuff; break;
      case pokdex.Zubat: return spawnRate.Zubat; break;
      case pokdex.Golbat: return spawnRate.Golbat; break;
      case pokdex.Oddish: return spawnRate.Oddish; break;
      case pokdex.Gloom: return spawnRate.Gloom; break;
      case pokdex.Vileplume: return spawnRate.Vileplume; break;
      case pokdex.Paras: return spawnRate.Paras; break;
      case pokdex.Parasect: return spawnRate.Parasect; break;
      case pokdex.Venonat: return spawnRate.Venonat; break;
      case pokdex.Venomoth: return spawnRate.Venomoth; break;
      case pokdex.Diglett: return spawnRate.Diglett; break;
      case pokdex.Dugtrio: return spawnRate.Dugtrio; break;
      case pokdex.Meowth: return spawnRate.Meowth; break;
      case pokdex.Persian: return spawnRate.Persian; break;
      case pokdex.Psyduck: return spawnRate.Psyduck; break;
      case pokdex.Golduck: return spawnRate.Golduck; break;
      case pokdex.Mankey: return spawnRate.Mankey; break;
      case pokdex.Primeape: return spawnRate.Primeape; break;
      case pokdex.Growlithe: return spawnRate.Growlithe; break;
      case pokdex.Arcanine: return spawnRate.Arcanine; break;
      case pokdex.Poliwag: return spawnRate.Poliwag; break;
      case pokdex.Poliwhirl: return spawnRate.Poliwhirl; break;
      case pokdex.Poliwrath: return spawnRate.Poliwrath; break;
      case pokdex.Abra: return spawnRate.Abra; break;
      case pokdex.Kadabra: return spawnRate.Kadabra; break;
      case pokdex.Alakazam: return spawnRate.Alakazam; break;
      case pokdex.Machop: return spawnRate.Machop; break;
      case pokdex.Machoke: return spawnRate.Machoke; break;
      case pokdex.Machamp: return spawnRate.Machamp; break;
      case pokdex.Bellsprout: return spawnRate.Bellsprout; break;
      case pokdex.Weepinbell: return spawnRate.Weepinbell; break;
      case pokdex.Victreebel: return spawnRate.Victreebel; break;
      case pokdex.Tentacool: return spawnRate.Tentacool; break;
      case pokdex.Tentacruel: return spawnRate.Tentacruel; break;
      case pokdex.Geodude: return spawnRate.Geodude; break;
      case pokdex.Graveler: return spawnRate.Graveler; break;
      case pokdex.Golem: return spawnRate.Golem; break;
      case pokdex.Ponyta: return spawnRate.Ponyta; break;
      case pokdex.Rapidash: return spawnRate.Rapidash; break;
      case pokdex.Slowpoke: return spawnRate.Slowpoke; break;
      case pokdex.Slowbro: return spawnRate.Slowbro; break;
      case pokdex.Magnemite: return spawnRate.Magnemite; break;
      case pokdex.Magneton: return spawnRate.Magneton; break;
      case pokdex.Farfetchd: return spawnRate.Farfetchd; break;
      case pokdex.Doduo: return spawnRate.Doduo; break;
      case pokdex.Dodrio: return spawnRate.Dodrio; break;
      case pokdex.Seel: return spawnRate.Seel; break;
      case pokdex.Dewgong: return spawnRate.Dewgong; break;
      case pokdex.Grimer: return spawnRate.Grimer; break;
      case pokdex.Muk: return spawnRate.Muk; break;
      case pokdex.Shellder: return spawnRate.Shellder; break;
      case pokdex.Cloyster: return spawnRate.Cloyster; break;
      case pokdex.Gastly: return spawnRate.Gastly; break;
      case pokdex.Haunter: return spawnRate.Haunter; break;
      case pokdex.Gengar: return spawnRate.Gengar; break;
      case pokdex.Onix: return spawnRate.Onix; break;
      case pokdex.Drowzee: return spawnRate.Drowzee; break;
      case pokdex.Hypno: return spawnRate.Hypno; break;
      case pokdex.Krabby: return spawnRate.Krabby; break;
      case pokdex.Kingler: return spawnRate.Kingler; break;
      case pokdex.Voltorb: return spawnRate.Voltorb; break;
      case pokdex.Electrode: return spawnRate.Electrode; break;
      case pokdex.Exeggcute: return spawnRate.Exeggcute; break;
      case pokdex.Exeggutor: return spawnRate.Exeggutor; break;
      case pokdex.Cubone: return spawnRate.Cubone; break;
      case pokdex.Marowak: return spawnRate.Marowak; break;
      case pokdex.Hitmonlee: return spawnRate.Hitmonlee; break;
      case pokdex.Hitmonchan: return spawnRate.Hitmonchan; break;
      case pokdex.Lickitung: return spawnRate.Lickitung; break;
      case pokdex.Koffing: return spawnRate.Koffing; break;
      case pokdex.Weezing: return spawnRate.Weezing; break;
      case pokdex.Rhyhorn: return spawnRate.Rhyhorn; break;
      case pokdex.Rhydon: return spawnRate.Rhydon; break;
      case pokdex.Chansey: return spawnRate.Chansey; break;
      case pokdex.Tangela: return spawnRate.Tangela; break;
      case pokdex.Kangaskhan: return spawnRate.Kangaskhan; break;
      case pokdex.Horsea: return spawnRate.Horsea; break;
      case pokdex.Seadra: return spawnRate.Seadra; break;
      case pokdex.Goldeen: return spawnRate.Goldeen; break;
      case pokdex.Seaking: return spawnRate.Seaking; break;
      case pokdex.Staryu: return spawnRate.Staryu; break;
      case pokdex.Starmie: return spawnRate.Starmie; break;
      case pokdex.MrMime: return spawnRate.MrMime; break;
      case pokdex.Scyther: return spawnRate.Scyther; break;
      case pokdex.Jynx: return spawnRate.Jynx; break;
      case pokdex.Electabuzz: return spawnRate.Electabuzz; break;
      case pokdex.Magmar: return spawnRate.Magmar; break;
      case pokdex.Pinsir: return spawnRate.Pinsir; break;
      case pokdex.Tauros: return spawnRate.Tauros; break;
      case pokdex.Magikarp: return spawnRate.Magikarp; break;
      case pokdex.Gyarados: return spawnRate.Gyarados; break;
      case pokdex.Lapras: return spawnRate.Lapras; break;
      case pokdex.Ditto: return spawnRate.Ditto; break;
      case pokdex.Eevee: return spawnRate.Eevee; break;
      case pokdex.Vaporeon: return spawnRate.Vaporeon; break;
      case pokdex.Jolteon: return spawnRate.Jolteon; break;
      case pokdex.Flareon: return spawnRate.Flareon; break;
      case pokdex.Porygon: return spawnRate.Porygon; break;
      case pokdex.Omanyte: return spawnRate.Omanyte; break;
      case pokdex.Omastar: return spawnRate.Omastar; break;
      case pokdex.Kabuto: return spawnRate.Kabuto; break;
      case pokdex.Kabutops: return spawnRate.Kabutops; break;
      case pokdex.Aerodactyl: return spawnRate.Aerodactyl; break;
      case pokdex.Snorlax: return spawnRate.Snorlax; break;
      case pokdex.Articuno: return spawnRate.Articuno; break;
      case pokdex.Zapdos: return spawnRate.Zapdos; break;
      case pokdex.Moltres: return spawnRate.Moltres; break;
      case pokdex.Dratini: return spawnRate.Dratini; break;
      case pokdex.Dragonair: return spawnRate.Dragonair; break;
      case pokdex.Dragonite: return spawnRate.Dragonite; break;
      case pokdex.Mewtwo: return spawnRate.Mewtwo; break;
      case pokdex.Mew: return spawnRate.Mew; break;
    }
  },

  decodeName: function (id) {
    switch (id) {
      case pokdex.Bulbasaur: return "Bulbasaur"; break;
      case pokdex.Ivysaur: return "Ivysaur"; break;
      case pokdex.Venusaur: return "Venusaur"; break;
      case pokdex.Charmander: return "Charmander"; break;
      case pokdex.Charmeleon: return "Charmeleon"; break;
      case pokdex.Charizard: return "Charizard"; break;
      case pokdex.Squirtle: return "Squirtle"; break;
      case pokdex.Wartortle: return "Wartortle"; break;
      case pokdex.Blastoise: return "Blastoise"; break;
      case pokdex.Caterpie: return "Caterpie"; break;
      case pokdex.Metapod: return "Metapod"; break;
      case pokdex.Butterfree: return "Butterfree"; break;
      case pokdex.Weedle: return "Weedle"; break;
      case pokdex.Kakuna: return "Kakuna"; break;
      case pokdex.Beedrill: return "Beedrill"; break;
      case pokdex.Pidgey: return "Pidgey"; break;
      case pokdex.Pidgeotto: return "Pidgeotto"; break;
      case pokdex.Pidgeot: return "Pidgeot"; break;
      case pokdex.Rattata: return "Rattata"; break;
      case pokdex.Raticate: return "Raticate"; break;
      case pokdex.Spearow: return "Spearow"; break;
      case pokdex.Fearow: return "Fearow"; break;
      case pokdex.Ekans: return "Ekans"; break;
      case pokdex.Arbok: return "Arbok"; break;
      case pokdex.Pikachu: return "Pikachu"; break;
      case pokdex.Raichu: return "Raichu"; break;
      case pokdex.Sandshrew: return "Sandshrew"; break;
      case pokdex.Sandslash: return "Sandslash"; break;
      case pokdex.NidoranF: return "NidoranF"; break;
      case pokdex.Nidorina: return "Nidorina"; break;
      case pokdex.Nidoqueen: return "Nidoqueen"; break;
      case pokdex.NidoranM: return "NidoranM"; break;
      case pokdex.Nidorino: return "Nidorino"; break;
      case pokdex.Nidoking: return "Nidoking"; break;
      case pokdex.Clefairy: return "Clefairy"; break;
      case pokdex.Clefable: return "Clefable"; break;
      case pokdex.Vulpix: return "Vulpix"; break;
      case pokdex.Ninetales: return "Ninetales"; break;
      case pokdex.Jigglypuff: return "Jigglypuff"; break;
      case pokdex.Wigglytuff: return "Wigglytuff"; break;
      case pokdex.Zubat: return "Zubat"; break;
      case pokdex.Golbat: return "Golbat"; break;
      case pokdex.Oddish: return "Oddish"; break;
      case pokdex.Gloom: return "Gloom"; break;
      case pokdex.Vileplume: return "Vileplume"; break;
      case pokdex.Paras: return "Paras"; break;
      case pokdex.Parasect: return "Parasect"; break;
      case pokdex.Venonat: return "Venonat"; break;
      case pokdex.Venomoth: return "Venomoth"; break;
      case pokdex.Diglett: return "Diglett"; break;
      case pokdex.Dugtrio: return "Dugtrio"; break;
      case pokdex.Meowth: return "Meowth"; break;
      case pokdex.Persian: return "Persian"; break;
      case pokdex.Psyduck: return "Psyduck"; break;
      case pokdex.Golduck: return "Golduck"; break;
      case pokdex.Mankey: return "Mankey"; break;
      case pokdex.Primeape: return "Primeape"; break;
      case pokdex.Growlithe: return "Growlithe"; break;
      case pokdex.Arcanine: return "Arcanine"; break;
      case pokdex.Poliwag: return "Poliwag"; break;
      case pokdex.Poliwhirl: return "Poliwhirl"; break;
      case pokdex.Poliwrath: return "Poliwrath"; break;
      case pokdex.Abra: return "Abra"; break;
      case pokdex.Kadabra: return "Kadabra"; break;
      case pokdex.Alakazam: return "Alakazam"; break;
      case pokdex.Machop: return "Machop"; break;
      case pokdex.Machoke: return "Machoke"; break;
      case pokdex.Machamp: return "Machamp"; break;
      case pokdex.Bellsprout: return "Bellsprout"; break;
      case pokdex.Weepinbell: return "Weepinbell"; break;
      case pokdex.Victreebel: return "Victreebel"; break;
      case pokdex.Tentacool: return "Tentacool"; break;
      case pokdex.Tentacruel: return "Tentacruel"; break;
      case pokdex.Geodude: return "Geodude"; break;
      case pokdex.Graveler: return "Graveler"; break;
      case pokdex.Golem: return "Golem"; break;
      case pokdex.Ponyta: return "Ponyta"; break;
      case pokdex.Rapidash: return "Rapidash"; break;
      case pokdex.Slowpoke: return "Slowpoke"; break;
      case pokdex.Slowbro: return "Slowbro"; break;
      case pokdex.Magnemite: return "Magnemite"; break;
      case pokdex.Magneton: return "Magneton"; break;
      case pokdex.Farfetchd: return "Farfetchd"; break;
      case pokdex.Doduo: return "Doduo"; break;
      case pokdex.Dodrio: return "Dodrio"; break;
      case pokdex.Seel: return "Seel"; break;
      case pokdex.Dewgong: return "Dewgong"; break;
      case pokdex.Grimer: return "Grimer"; break;
      case pokdex.Muk: return "Muk"; break;
      case pokdex.Shellder: return "Shellder"; break;
      case pokdex.Cloyster: return "Cloyster"; break;
      case pokdex.Gastly: return "Gastly"; break;
      case pokdex.Haunter: return "Haunter"; break;
      case pokdex.Gengar: return "Gengar"; break;
      case pokdex.Onix: return "Onix"; break;
      case pokdex.Drowzee: return "Drowzee"; break;
      case pokdex.Hypno: return "Hypno"; break;
      case pokdex.Krabby: return "Krabby"; break;
      case pokdex.Kingler: return "Kingler"; break;
      case pokdex.Voltorb: return "Voltorb"; break;
      case pokdex.Electrode: return "Electrode"; break;
      case pokdex.Exeggcute: return "Exeggcute"; break;
      case pokdex.Exeggutor: return "Exeggutor"; break;
      case pokdex.Cubone: return "Cubone"; break;
      case pokdex.Marowak: return "Marowak"; break;
      case pokdex.Hitmonlee: return "Hitmonlee"; break;
      case pokdex.Hitmonchan: return "Hitmonchan"; break;
      case pokdex.Lickitung: return "Lickitung"; break;
      case pokdex.Koffing: return "Koffing"; break;
      case pokdex.Weezing: return "Weezing"; break;
      case pokdex.Rhyhorn: return "Rhyhorn"; break;
      case pokdex.Rhydon: return "Rhydon"; break;
      case pokdex.Chansey: return "Chansey"; break;
      case pokdex.Tangela: return "Tangela"; break;
      case pokdex.Kangaskhan: return "Kangaskhan"; break;
      case pokdex.Horsea: return "Horsea"; break;
      case pokdex.Seadra: return "Seadra"; break;
      case pokdex.Goldeen: return "Goldeen"; break;
      case pokdex.Seaking: return "Seaking"; break;
      case pokdex.Staryu: return "Staryu"; break;
      case pokdex.Starmie: return "Starmie"; break;
      case pokdex.MrMime: return "MrMime"; break;
      case pokdex.Scyther: return "Scyther"; break;
      case pokdex.Jynx: return "Jynx"; break;
      case pokdex.Electabuzz: return "Electabuzz"; break;
      case pokdex.Magmar: return "Magmar"; break;
      case pokdex.Pinsir: return "Pinsir"; break;
      case pokdex.Tauros: return "Tauros"; break;
      case pokdex.Magikarp: return "Magikarp"; break;
      case pokdex.Gyarados: return "Gyarados"; break;
      case pokdex.Lapras: return "Lapras"; break;
      case pokdex.Ditto: return "Ditto"; break;
      case pokdex.Eevee: return "Eevee"; break;
      case pokdex.Vaporeon: return "Vaporeon"; break;
      case pokdex.Jolteon: return "Jolteon"; break;
      case pokdex.Flareon: return "Flareon"; break;
      case pokdex.Porygon: return "Porygon"; break;
      case pokdex.Omanyte: return "Omanyte"; break;
      case pokdex.Omastar: return "Omastar"; break;
      case pokdex.Kabuto: return "Kabuto"; break;
      case pokdex.Kabutops: return "Kabutops"; break;
      case pokdex.Aerodactyl: return "Aerodactyl"; break;
      case pokdex.Snorlax: return "Snorlax"; break;
      case pokdex.Articuno: return "Articuno"; break;
      case pokdex.Zapdos: return "Zapdos"; break;
      case pokdex.Moltres: return "Moltres"; break;
      case pokdex.Dratini: return "Dratini"; break;
      case pokdex.Dragonair: return "Dragonair"; break;
      case pokdex.Dragonite: return "Dragonite"; break;
      case pokdex.Mewtwo: return "Mewtwo"; break;
      case pokdex.Mew: return "Mew"; break;
    }
  }
};

