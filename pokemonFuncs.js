// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
/*
Ability:
Nature:
item-held:
shiny?:
evolution condition:
more to be added if needed*/
const Discord = require('discord.js');
let AvlTree = require('./avl-tree.js');
let pokDex = require('./pokemonObjs.js');
const fs = require('fs');
const readline = require('readline');

let min;
let sec;
let tree;
let pokemon;
let spawning;
let pause = true;
let battleManager = [];
// let battle = {
//   fighter1: null,
//   fighter2: null,
//   time: null,
//   updated: true,
//   messages: null,
//   currentHP1: null,
//   currentHP2: null,
//   move1PP: null,
//   move2PP: null,
//   move3PP: null,
//   move4PP: null,
// };

module.exports = {
  spawn: function (channell) {
    try {
      // module.exports.rand(0,100);
      module.exports.setTimer(0, 60);
      spawning = setInterval(function(){
        sec--;
        if(sec === 0){
          min--;
          sec = 60;
          if (min === -1){
            min = Math.floor(Math.random() * 25);
            console.log("timer: " + min +" : " + sec);
            module.exports.createPokemonObj();
            console.log("name: " + pokemon.name);
            const embed = new Discord.RichEmbed()
                .setTitle("**A level " + pokemon.level + " " + pokemon.name + " has appeared!**")
                .setDescription("Use command:\n  `~p battle` \nto capture the pokemon")
                .setColor(0xcc3300)
                .setFooter( "Gotta catch 'em all!'" ,"https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG")
                .addField("Battle the pokemon before another appears!", "Must have entered the game to battle.")
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
          let split = line.split("icon:").join(',').split("money:").join(',')
              .split("id:").join(',').split("name:").join(',').split("spawnRate:").join(',').split("level:").join(',')
              .split("weight:").join(',').split("height:").join(',').split("spawnIcon:").join(',').split("boxIcon:").join(',')
              .split("owner:").join(',').split("nickName:").join(',').split("exp:").join(',').split("traded:").join(',')
              .split("description:").join(',').split("type1:").join(',').split("type2:").join(',').split("baseAtk:").join(',')
              .split("baseSpAtk:").join(',').split("baseDef:").join(',').split("baseSpDef:").join(',').split("baseSpd:").join(',')
              .split("baseHp:").join(',').split("ivAtk:").join(',').split("ivSpAtk:").join(',')
              .split("ivDef:").join(',').split("ivSpDef:").join(',').split("ivSpd:").join(',').split("ivHp:").join(',')
              .split("evAtk:").join(',').split("evSpAtk:").join(',').split("evDef:").join(',').split("evSpSpDef:").join(',')
              .split("evSpd:").join(',').split("evHp:").join(',').split("userID:").join(',')
              .split("move1lvl:").join(',').split("move1nam:").join(',').split("move1typ:").join(',').split("move1category:").join(',')
              .split("move1power:").join(',').split("move1accuracy:").join(',').split("move1powerPoints:").join(',')
              .split("move2lvl:").join(',').split("move2nam:").join(',').split("move2typ:").join(',').split("move2category:").join(',')
              .split("move2power:").join(',').split("move2accuracy:").join(',').split("move2powerPoints:").join(',')
              .split("move3lvl:").join(',').split("move3nam:").join(',').split("move3typ:").join(',').split("move3category:").join(',')
              .split("move3power:").join(',').split("move3accuracy:").join(',').split("move3powerPoints:").join(',')
              .split("move4lvl:").join(',').split("move4nam:").join(',').split("move4typ:").join(',').split("move4category:").join(',')
              .split("move4power:").join(',').split("move4accuracy:").join(',').split("move4powerPoints:").join(',')
              .split(',');
          // for (let i = 0; i < split.length; i ++) {
          //   console.log(i + ": " + split[i]);
          // }
          module.exports.returnTreeVal(id).icon = split[1];
          module.exports.returnTreeVal(id).money = split[2];
          let follow = {
            id: split[3],
            name: split[4],
            spawnRate: split[5],
            level: split[6],
            weight: split[7],
            height: split[8],
            spawnIcon: split[9],
            boxIcon: split[10],
            owner: split[11],
            nickName: split[12],
            exp: split[13],
            traded: split[14],
            description: split[15],
            type: {
              1: split[16],
              2: split[17],
            },
            base: {
              atk: split[18],
              spatk: split[19],
              def: split[20],
              spdef: split[21],
              spd: split[22],
              hp: split[23],
            },
            iv : {
              atk : split[24],
              spatk: split[25],
              def: split[26],
              spdef: split[27],
              spd: split[28],
              hp: split[29],
            },
            ev : {
              atk : split[30],
              spatk: split[31],
              def: split[32],
              spdef: split[33],
              spd: split[34],
              hp: split[35],
            },
            currentMoves : {
              1: null,
              2: null,
              3: null,
              4: null,
            },
          };
          follow.currentMoves[1] = {
            level: split[37],
            name: split[38],
            type: split[39],
            category: split[40],
            power: split[41],
            accuracy: split[42],
            powerPoints: split[43]
          };
          if (split[44] !== "null") {
            follow.currentMoves[2] = {
              level: split[44],
              name: split[45],
              type: split[46],
              category: split[47],
              power: split[48],
              accuracy: split[49],
              powerPoints: split[50]
            };
          }
          if (split[51] !== "null") {
            follow.currentMoves[3] = {
              level: split[51],
              name: split[52],
              type: split[53],
              category: split[54],
              power: split[55],
              accuracy: split[56],
              powerPoints: split[57]
            };
          }
          if (split[58] !== "null") {
            follow.currentMoves[4] = {
              level: split[58],
              name: split[59],
              type: split[60],
              category: split[61],
              power: split[62],
              accuracy: split[63],
              powerPoints: split[64]
            };
          }
          // console.log(split[36]);
          module.exports.returnTreeVal(id).follower = follow;
          module.exports.returnTreeVal(id).userID = split[36];
          module.exports.returnTreeVal(id).inBattle = false;
          // console.log(module.exports.returnTreeVal(id).userID);
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
        let split = line.split("id:").join(',').split("name:").join(',').split("spawnRate:").join(',').split("level:").join(',')
            .split("weight:").join(',').split("height:").join(',').split("spawnIcon:").join(',').split("boxIcon:").join(',')
            .split("owner:").join(',').split("nickName:").join(',').split("exp:").join(',').split("traded:").join(',')
            .split("description:").join(',').split("type1:").join(',').split("type2:").join(',').split("baseAtk:").join(',')
            .split("baseSpAtk:").join(',').split("baseDef:").join(',').split("baseSpDef:").join(',').split("baseSpd:").join(',')
            .split("baseHp:").join(',').split("ivAtk:").join(',').split("ivSpAtk:").join(',')
            .split("ivDef:").join(',').split("ivSpDef:").join(',').split("ivSpd:").join(',').split("ivHp:").join(',')
            .split("evAtk:").join(',').split("evSpAtk:").join(',').split("evDef:").join(',').split("evSpSpDef:").join(',')
            .split("evSpd:").join(',').split("evHp:").join(',')
            .split("move1lvl:").join(',').split("move1nam:").join(',').split("move1typ:").join(',').split("move1category:").join(',')
            .split("move1power:").join(',').split("move1accuracy:").join(',').split("move1powerPoints:").join(',')
            .split("move2lvl:").join(',').split("move2nam:").join(',').split("move2typ:").join(',').split("move2category:").join(',')
            .split("move2power:").join(',').split("move2accuracy:").join(',').split("move2powerPoints:").join(',')
            .split("move3lvl:").join(',').split("move3nam:").join(',').split("move3typ:").join(',').split("move3category:").join(',')
            .split("move3power:").join(',').split("move3accuracy:").join(',').split("move3powerPoints:").join(',')
            .split("move4lvl:").join(',').split("move4nam:").join(',').split("move4typ:").join(',').split("move4category:").join(',')
            .split("move4power:").join(',').split("move4accuracy:").join(',').split("move4powerPoints:").join(',')
            .split(',');
        // for (let i = 0; i < split.length; i ++) {
        //   console.log(i + ": " + split[i]);
        // }
        if (pokeLine !== 0) {
          let poke = {
            id: split[1],
            name: split[2],
            spawnRate: split[3],
            level: split[4],
            weight: split[5],
            height: split[6],
            spawnIcon: split[7],
            boxIcon: split[8],
            owner: split[9],
            nickName: split[10],
            exp: split[11],
            traded: split[12],
            description: split[13],
            type: {
              1: split[14],
              2: split[15],
            },
            base: {
              atk: split[16],
              spatk: split[17],
              def: split[18],
              spdef: split[19],
              spd: split[20],
              hp: split[21],
            },
            iv : {
              atk : split[22],
              spatk: split[23],
              def: split[24],
              spdef: split[25],
              spd: split[26],
              hp: split[27],
            },
            ev : {
              atk : split[28],
              spatk: split[29],
              def: split[30],
              spdef: split[31],
              spd: split[32],
              hp: split[33],
            },
            currentMoves : {
              1: null,
              2: null,
              3: null,
              4: null,
            },
          };
          poke.currentMoves[1] = {
            level: split[34],
            name: split[35],
            type: split[36],
            category: split[37],
            power: split[38],
            accuracy: split[39],
            powerPoints: split[40]
          };
          if (split[41] !== "null") {
            poke.currentMoves[2] = {
              level: split[41],
              name: split[42],
              type: split[43],
              category: split[44],
              power: split[45],
              accuracy: split[46],
              powerPoints: split[47]
            };
          }
          if (split[48] !== "null") {
            poke.currentMoves[3] = {
              level: split[48],
              name: split[49],
              type: split[50],
              category: split[51],
              power: split[52],
              accuracy: split[53],
              powerPoints: split[54]
            };
          }
          if (split[55] !== "null") {
            poke.currentMoves[4] = {
              level: split[55],
              name: split[56],
              type: split[57],
              category: split[58],
              power: split[59],
              accuracy: split[60],
              powerPoints: split[61]
            };
          }
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
            fs.appendFileSync(path, module.exports.savePokString(box, i));
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
          fs.appendFileSync(path, module.exports.savePokString(box, i));
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
        fs.appendFileSync(path, "\n" + "icon:" + user.icon + "money:" + user.money
            + "id:" + user.follower.id + "name:" + user.follower.name + "spawnRate:" + user.follower.spawnRate + "level:" + user.follower.level
            + "weight:" + user.follower.weight + "height:" + user.follower.height + "spawnIcon:" + user.follower.spawnIcon + "boxIcon:" + user.follower.boxIcon+ "owner:" + user.follower.owner
            + "nickName:" + user.follower.nickName + "exp:" + user.follower.exp + "traded:" + user.follower.traded + "description:" + user.follower.description + "type1:" + user.follower.type[1]
            + "type2:" + user.follower.type[2] + "baseAtk:" + user.follower.base.atk + "baseSpAtk:" + user.follower.base.spatk + "baseDef:" + user.follower.base.def + "baseSpDef:" + user.follower.base.spdef
            + "baseSpd:" + user.follower.base.spd + "baseHp:" + user.follower.base.hp + "ivAtk:" + user.follower.iv.atk + "ivSpAtk:" + user.follower.iv.spatk + "ivDef:"
            + user.follower.iv.def + "ivSpDef:" + user.follower.iv.spdef + "ivSpd:" + user.follower.iv.spd + "ivHp:" + user.follower.iv.hp + "evAtk:" + user.follower.ev.atk + "evSpAtk:"
            + user.follower.ev.spatk + "evDef:" + user.follower.ev.def + "evSpSpDef:" + user.follower.ev.spdef + "evSpd:" + user.follower.ev.spd + "evHp:" + user.follower.ev.hp + "userID:" + user.userID
            + module.exports.printMoves(user.follower));
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
      follower: {
        id: null,
        name: null,
        spawnRate: null,
        level: null,
        weight: null,
        height: null,
        spawnIcon: null,
        boxIcon: null,
        owner: null,
        nickName: null,
        exp: null,
        traded: null,
        description: null,
        type: {
          1: null,
          2: null,
        },
        base: {
          atk: null,
          spatk: null,
          def: null,
          spdef: null,
          spd: null,
          hp: null,
        },
        iv: {
          atk: null,
          spatk: null,
          def: null,
          spdef: null,
          spd: null,
          hp: null,
        },
        ev: {
          atk: null,
          spatk: null,
          def: null,
          spdef: null,
          spd: null,
          hp: null,
        },
        currentMoves : {
          1: null,
          2: null,
          3: null,
          4: null,
        },
      },
      icon: message.author.avatarURL,
      money: "0",
      inBattle: false,
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
    // let ultraCommon = 0;
    // let common = 0;
    // let uncommon = 0;
    // let rare = 0;
    // let ultraRare = 0;
    // let legendary = 0;
    try {
      // for (let i = 0; i < 10000; i++)
      // {
        let id = module.exports.randomInt(1, 4);
      // console.log(id);
        let bias = module.exports.rand(0, 36, 0.4);
        while (bias > pokDex.returnDex()[id].spawnRate) {
          id = module.exports.randomInt(1, 4);
        }
        //
        // let id = 1;
        pokemon = pokDex.returnDex()[id];
        pokemon.level = module.exports.decodeLevel(pokemon.spawnRate);
        pokemon.iv.atk = module.exports.randomInt(1, 32);
        pokemon.iv.spatk = module.exports.randomInt(1, 32);
        pokemon.iv.def = module.exports.randomInt(1, 32);
        pokemon.iv.spdef = module.exports.randomInt(1, 32);
        pokemon.iv.spd = module.exports.randomInt(1, 32);
        pokemon.iv.hp = module.exports.randomInt(1, 32);
        // console.log(pokemon);
        let tempArr = pokDex.returnMoveList()[id];
        let maxArr = tempArr.length;
        let moveCount = 1;

        while (maxArr !== 0 && moveCount < 5) {
          let random = module.exports.randomInt(0, maxArr);
          // console.log(pokemon.moves[random].level);
          if (tempArr[random].level < pokemon.level && tempArr[random] !== pokemon.currentMoves[moveCount]) {
            pokemon.currentMoves[moveCount] = tempArr[random];
            tempArr.splice(random, 1);
            maxArr--;
            moveCount++;
          }
          else if (tempArr[random].level > pokemon.level) {
            tempArr.splice(random, 1);
            maxArr--;
          }
        }
        // console.log(pokemon.currentMoves);
        // console.log(pokemon.spawnRate);
        // if (pokemon.spawnRate === 85) {
        //   ultraCommon++;
        // }
        // else if (pokemon.spawnRate === 73) {
        //   common++;
        // }
        // else if (pokemon.spawnRate === 55) {
        //   uncommon++;
        // }
        // else if (pokemon.spawnRate === 37) {
        //   rare++;
        // }
        // else if (pokemon.spawnRate === 27) {
        //   ultraRare++;
        // }
        // else if (pokemon.spawnRate === 25) {
        //   legendary++;
        // }
      // }
      //
      // console.log("ultraCommon " + ultraCommon);
      // console.log("common " + common);
      // console.log("uncommon " + uncommon);
      // console.log("rare " + rare);
      // console.log("ultraRare " + ultraRare);
      // console.log("legendary " + legendary);
    }
    catch (e) {
      client.channels.get("468170551135961108").send('ERROR WITH createPokemonObj(): ' + e);
      console.log(e);
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
      case 37: return module.exports.randomInt(20, 36);
      case 27: return module.exports.randomInt(30, 47);
      case 25: return module.exports.randomInt(55, 66);
    }
  },

  randomNum: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  randomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  rand: function (min, max, bias) {
    return min + (max - min) * Math.pow( module.exports.randomNum(0, 1) ,bias);
  },

  savePokString: function (box, i) {
    return ("\n" + "id:" + box.get(i).id + "name:" + box.get(i).name + "spawnRate:" + box.get(i).spawnRate + "level:" + box.get(i).level
        + "weight:" + box.get(i).weight + "height:" + box.get(i).height + "spawnIcon:" + box.get(i).spawnIcon + "boxIcon:" + box.get(i).boxIcon+ "owner:" + box.get(i).owner
        + "nickName:" + box.get(i).nickName + "exp:" + box.get(i).exp + "traded:" + box.get(i).traded + "description:" + box.get(i).description + "type1:" + box.get(i).type[1] + "type2:" + box.get(i).type[2]
        + "baseAtk:" + box.get(i).base.atk + "baseSpAtk:" + box.get(i).base.spatk + "baseDef:" + box.get(i).base.def + "baseSpDef:" + box.get(i).base.spdef + "baseSpd:" + box.get(i).base.spd
        + "baseHp:" + box.get(i).base.hp + "ivAtk:" + box.get(i).iv.atk + "ivSpAtk:" + box.get(i).iv.spatk + "ivDef:" + box.get(i).iv.def + "ivSpDef:" + box.get(i).iv.spdef
        + "ivSpd:" + box.get(i).iv.spd + "ivHp:" + box.get(i).iv.hp + "evAtk:" + box.get(i).ev.atk + "evSpAtk:" + box.get(i).ev.spatk + "evDef:" + box.get(i).ev.def + "evSpSpDef:" + box.get(i).ev.spdef
        + "evSpd:" + box.get(i).ev.spd + "evHp:" + box.get(i).ev.hp + module.exports.printMoves(box.get(i)));
  },

  stopSpawn: function () {
    clearInterval(spawning);
  },

  returnPause: function () {
    return pause;
  },

  setPause: function (pausing) {
    pause = pausing;
  },

  setBattle: function (user1, user2, msg) {
    let pp1, pp2, pp3, pp4 = null;

    pp1 = user1.follower.currentMoves[1].powerPoints;
    if (user1.follower.currentMoves[2] !== null && user1.follower.currentMoves[2] !== "null" && user1.follower.currentMoves[2].powerPoints !== "null" && user1.follower.currentMoves[2].powerPoints !== null) {
      pp2 = user1.follower.currentMoves[2].powerPoints;
    }
    if (user1.follower.currentMoves[3] !== null && user1.follower.currentMoves[3] !== "null" && user1.follower.currentMoves[3].powerPoints !== "null" && user1.follower.currentMoves[3].powerPoints !== null) {
      pp3 = user1.follower.currentMoves[3].powerPoints;
    }
    if (user1.follower.currentMoves[4] !== null && user1.follower.currentMoves[4] !== "null" && user1.follower.currentMoves[4].powerPoints !== "null" && user1.follower.currentMoves[4].powerPoints !== null) {
      pp4 = user1.follower.currentMoves[4].powerPoints;
    }

    // module.exports.createBattle(user1, user2, new Date(), true, msg, module.exports.hpformula(user1.follower), module.exports.hpformula(user2), pp1, pp2, pp3, pp4);

    battleManager.push(module.exports.createBattle(user1, user2, new Date(), true, msg, module.exports.hpformula(user1.follower), module.exports.hpformula(user2), pp1, pp2, pp3, pp4));
    // console.log(battleManager);
  },

  printBattle: function () {
    for (let i = 0; i < battleManager.length; i++) {
      console.log(battleManager[i]);
    }
  },

  getbattleManager: function () {
    return battleManager;
  },

  // inBattle: function (id) {
  //   for (let i = 0; i < battleManager.length; i++) {
  //     if (battleManager[i].fighter1.userID === id || battleManager[i].fighter2.name === id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  returnHP: function (fighter, currentHP) {
    let string = "";
    let temp = Math.floor((currentHP/module.exports.hpformula(fighter))*100);
    let upper = 100-temp;
    while (temp !== 0) {
      if (temp >= 5) {
        string = string + "⣿";
        temp-=5;
      }
      else if (temp === 4) {
        string = string + "⣧";
        temp-=4;
      }
      else if (temp === 3) {
        string = string + "⣇";
        temp-=3;
      }
      else if (temp === 2) {
        string = string + "⣆";
        temp-=2;
      }
      else if (temp === 1) {
        string = string + "⣄";
        temp-=1;
      }
    }
    while (upper > 0 ) {
      console.log("temp " + Math.floor((currentHP/module.exports.hpformula(fighter))*100));
      console.log("uppwer: " + upper);
      string = string + "⣀";
      upper = upper - 5;
      console.log("string " + string);
    }
    return string;
  },

  hpformula: function(pokemon) {
    // console.log(pokemon.name + " hp " + Math.floor((((parseInt(pokemon.iv.hp) + 2*parseInt(pokemon.base.hp) + ((parseInt(pokemon.ev.hp))/4)+100) * parseInt(pokemon.level))/100) + 10));
    return  Math.floor((((parseInt(pokemon.iv.hp) + 2*parseInt(pokemon.base.hp) + ((parseInt(pokemon.ev.hp))/4)+100) * parseInt(pokemon.level))/100) + 10);
  },

  printMoves: function (pokemon) {
    if (pokemon.id === null || pokemon.id === "null") {
      return ("move1lvl:nullmove1nam:nullmove1typ:nullmove1category:nullmove1power:nullmove1accuracy:nullmove1powerPoints:null"
          + "move2lvl:nullmove2nam:nullmove2typ:nullmove2category:nullmove2power:nullmove2accuracy:nullmove2powerPoints:null"
          + "move3lvl:nullmove3nam:nullmove3typ:nullmove3category:nullmove3power:nullmove3accuracy:nullmove3powerPoints:null"
          + "move4lvl:nullmove4nam:nullmove4typ:nullmove4category:nullmove4power:nullmove4accuracy:nullmove4powerPoints:null");
    }
    let moves = "";
    for (let i = 1; i < 5; i++) {
      if (pokemon.currentMoves[i] !== null && pokemon.currentMoves[i] !== "null" && pokemon.currentMoves[i].level !== "null" && pokemon.currentMoves[i].level !== null) {
        moves = moves + "move" + i + "lvl:" + pokemon.currentMoves[i].level + "move" + i + "nam:" + pokemon.currentMoves[i].name + "move" + i + "typ:" + pokemon.currentMoves[i].type
            + "move" + i + "category:" + pokemon.currentMoves[i].category
            + "move" + i + "power:" + pokemon.currentMoves[i].power + "move" + i + "accuracy:" + pokemon.currentMoves[i].accuracy + "move" + i + "powerPoints:" + pokemon.currentMoves[i].powerPoints;
      }
      else {
        moves = moves + "move" + i + "lvl:nullmove" + i + "nam:nullmove" + i + "typ:nullmove" + i + "category:null"
            + "move" + i + "power:nullmove" + i + "accuracy:nullmove" + i + "powerPoints:null";
      }
    }
    return moves;
  },

  createBattle: function (fight1, fight2, timeNow, update, msg, HP1, HP2, PP1, PP2, PP3, PP4) {
    // console.log(fight1.items);
    return {
      fighter1: fight1,
      fighter2: fight2,
      time: timeNow,
      updated: update,
      messages: msg,
      currentHP1: HP1,
      currentHP2: HP2,
      move1PP: PP1,
      move2PP: PP2,
      move3PP: PP3,
      move4PP: PP4,
    };
  },

  decodeType: function (type) {
    switch (parseInt(type)) {
      case 1:
        return "Bug";
      case 2:
        return "Ground";
      case 3:
        return "Dragon";
      case 4:
        return "Ice";
      case 5:
        return "Electric";
      case 6:
        return "Normal";
      case 7:
        return "Fight";
      case 8:
        return "Poison";
      case 9:
        return "Fire";
      case 10:
        return "Psychic";
      case 11:
        return "Flying";
      case 12:
        return "Rock";
      case 13:
        return "Ghost";
      case 14:
        return "Water";
      case 15:
        return "Grass";
      case 16:
        return "Fairy";
      case 17:
        return "Steel";
    }
  },

  decodeCategory: function (type) {
    switch (parseInt(type)) {
      case 1:
        return "Physical";
      case 2:
        return "Special";
      case 3:
        return "Status";
    }
  }
};

