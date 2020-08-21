// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
/*
Ability:
Nature:
item-held:
shiny?:
evolution condition:
status
more to be added if needed*/
const Discord = require('discord.js');
let AvlTree = require('./avl-tree.js');
let pokDex = require('./pokemonObjs.js');
const fs = require('fs');
const readline = require('readline');
let properties = require('./pokemonDetails.js');

// let test = 0;
let min;
let sec;
let tree;
let pokemon;
let spawning;
let pause = true;
let battleManager = [];
let notAllowed = [];

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
            min = Math.floor(Math.random() * 10);
            console.log("timer: " + min +" : " + sec);
            module.exports.createPokemonObj();
            notAllowed = [];
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
          module.exports.returnTreeVal(id).items.pokeballs = module.exports.createPokeObj(parseInt(split[1]), parseInt(split[2]), parseInt(split[3]), parseInt(split[4]));
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
          module.exports.returnTreeVal(id).items.medicine = module.exports.createPotsObj(parseInt(split[1]), parseInt(split[2]), parseInt(split[3]), parseInt(split[4]));
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
              .split("move1power:").join(',').split("move1accuracy:").join(',').split("move1powerPoints:").join(',').split("move1effect:").join(',')
              .split("move2lvl:").join(',').split("move2nam:").join(',').split("move2typ:").join(',').split("move2category:").join(',')
              .split("move2power:").join(',').split("move2accuracy:").join(',').split("move2powerPoints:").join(',').split("move2effect:").join(',')
              .split("move3lvl:").join(',').split("move3nam:").join(',').split("move3typ:").join(',').split("move3category:").join(',')
              .split("move3power:").join(',').split("move3accuracy:").join(',').split("move3powerPoints:").join(',').split("move3effect:").join(',')
              .split("move4lvl:").join(',').split("move4nam:").join(',').split("move4typ:").join(',').split("move4category:").join(',')
              .split("move4power:").join(',').split("move4accuracy:").join(',').split("move4powerPoints:").join(',').split("move4effect:").join(',')
              .split("currentHP:").join(',')
              .split(',');
          // for (let i = 0; i < split.length; i ++) {
          //   console.log(i + ": " + split[i]);
          // }
          module.exports.returnTreeVal(id).icon = split[1];
          module.exports.returnTreeVal(id).money = parseInt(split[2]);
          let follow = {
            id: parseInt(split[3]),
            name: split[4],
            spawnRate: parseInt(split[5]),
            level: parseInt(split[6]),
            weight: split[7],
            height: split[8],
            spawnIcon: split[9],
            boxIcon: split[10],
            owner: split[11],
            nickName: split[12],
            exp: parseInt(split[13]),
            traded: split[14],
            description: split[15],
            type: {
              1: split[16],
              2: split[17],
            },
            base: {
              atk: parseInt(split[18]),
              spatk: parseInt(split[19]),
              def: parseInt(split[20]),
              spdef: parseInt(split[21]),
              spd: parseInt(split[22]),
              hp: parseInt(split[23]),
            },
            iv : {
              atk : parseInt(split[24]),
              spatk: parseInt(split[25]),
              def: parseInt(split[26]),
              spdef: parseInt(split[27]),
              spd: parseInt(split[28]),
              hp: parseInt(split[29]),
            },
            ev : {
              atk : parseInt(split[30]),
              spatk: parseInt(split[31]),
              def: parseInt(split[32]),
              spdef: parseInt(split[33]),
              spd: parseInt(split[34]),
              hp: parseInt(split[35]),
            },
            currentMoves : {
              1: null,
              2: null,
              3: null,
              4: null,
            },
            currentHP: parseInt(split[69]),
          };
          follow.currentMoves[1] = {
            level: parseInt(split[37]),
            move:
                {
                  name: split[38],
                  type: split[39],
                  category: split[40],
                  power: parseInt(split[41]),
                  accuracy: parseInt(split[42]),
                  powerPoints: parseInt(split[43]),
                  effect: split[44]
                },
          };
          if (split[45] !== "null") {
            follow.currentMoves[2] = {
              level: parseInt(split[45]),
              move:
                  {
                    name: split[46],
                    type: split[47],
                    category: split[48],
                    power: parseInt(split[49]),
                    accuracy: parseInt(split[50]),
                    powerPoints: parseInt(split[51]),
                    effect: split[52]
                  },
            };
          }
          if (split[53] !== "null") {
            follow.currentMoves[3] = {
              level: parseInt(split[53]),
              move:
                  {
                    name: split[54],
                    type: split[55],
                    category: split[56],
                    power: parseInt(split[57]),
                    accuracy: parseInt(split[58]),
                    powerPoints: parseInt(split[59]),
                    effect: split[60]
                  },
            };
          }
          if (split[61] !== "null") {
            follow.currentMoves[4] = {
              level: parseInt(split[61]),
              move:
                  {
                    name: split[62],
                    type: split[63],
                    category: split[64],
                    power: parseInt(split[65]),
                    accuracy: parseInt(split[66]),
                    powerPoints: parseInt(split[67]),
                    effect: split[68]
                  },
            };
          }
          module.exports.returnTreeVal(id).follower = follow;
          module.exports.returnTreeVal(id).userID = split[36];
          module.exports.returnTreeVal(id).inBattle = false;
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
            .split("move1power:").join(',').split("move1accuracy:").join(',').split("move1powerPoints:").join(',').split("move1effect:").join(',')
            .split("move2lvl:").join(',').split("move2nam:").join(',').split("move2typ:").join(',').split("move2category:").join(',')
            .split("move2power:").join(',').split("move2accuracy:").join(',').split("move2powerPoints:").join(',').split("move2effect:").join(',')
            .split("move3lvl:").join(',').split("move3nam:").join(',').split("move3typ:").join(',').split("move3category:").join(',')
            .split("move3power:").join(',').split("move3accuracy:").join(',').split("move3powerPoints:").join(',').split("move3effect:").join(',')
            .split("move4lvl:").join(',').split("move4nam:").join(',').split("move4typ:").join(',').split("move4category:").join(',')
            .split("move4power:").join(',').split("move4accuracy:").join(',').split("move4powerPoints:").join(',').split("move4effect:").join(',')
            .split("currentHP:").join(',')
            .split(',');
        // for (let i = 0; i < split.length; i ++) {
        //   console.log(i + ": " + split[i]);
        // }
        if (pokeLine !== 0) {
          let poke = {
            id: parseInt(split[1]),
            name: split[2],
            spawnRate: parseInt(split[3]),
            level: parseInt(split[4]),
            weight: split[5],
            height: split[6],
            spawnIcon: split[7],
            boxIcon: split[8],
            owner: split[9],
            nickName: split[10],
            exp: parseInt(split[11]),
            traded: split[12],
            description: split[13],
            type: {
              1: split[14],
              2: split[15],
            },
            base: {
              atk: parseInt(split[16]),
              spatk: parseInt(split[17]),
              def: parseInt(split[18]),
              spdef: parseInt(split[19]),
              spd: parseInt(split[20]),
              hp: parseInt(split[21]),
            },
            iv : {
              atk : parseInt(split[22]),
              spatk: parseInt(split[23]),
              def: parseInt(split[24]),
              spdef: parseInt(split[25]),
              spd: parseInt(split[26]),
              hp: parseInt(split[27]),
            },
            ev : {
              atk : parseInt(split[28]),
              spatk: parseInt(split[29]),
              def: parseInt(split[30]),
              spdef: parseInt(split[31]),
              spd: parseInt(split[32]),
              hp: parseInt(split[33]),
            },
            currentMoves : {
              1: null,
              2: null,
              3: null,
              4: null,
            },
            currentHP: parseInt(split[66]),
          };
          poke.currentMoves[1] = {
            level: parseInt(split[34]),
            move:
                {
                  name: split[35],
                  type: split[36],
                  category: split[37],
                  power: parseInt(split[38]),
                  accuracy: parseInt(split[39]),
                  powerPoints: parseInt(split[40]),
                  effect: split[41]
                },
          };
          if (split[42] !== "null") {
            poke.currentMoves[2] = {
              level: parseInt(split[42]),
              move:
                  {
                    name: split[43],
                    type: split[44],
                    category: split[45],
                    power: parseInt(split[46]),
                    accuracy: parseInt(split[47]),
                    powerPoints: parseInt(split[48]),
                    effect: split[49]
                  },
            };
          }
          if (split[50] !== "null") {
            poke.currentMoves[3] = {
              level: parseInt(split[50]),
              move:
                  {
                    name: split[51],
                    type: split[52],
                    category: split[53],
                    power: parseInt(split[54]),
                    accuracy: parseInt(split[55]),
                    powerPoints: parseInt(split[56]),
                    effect: split[57]
                  },
            };
          }
          if (split[58] !== "null") {
            poke.currentMoves[4] = {
              level: parseInt(split[58]),
              move:
                  {
                    name: split[59],
                    type: split[60],
                    category: split[61],
                    power: parseInt(split[62]),
                    accuracy: parseInt(split[63]),
                    powerPoints: parseInt(split[64]),
                    effect: split[65]
                  },
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
            + module.exports.printMoves(user.follower) + "currentHP:" + user.follower.currentHP);
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
        currentHP: 0,
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

  returnNotAllowed: function () {
    return notAllowed;
  },

  returnifAllowed: function (userID) {
    for (let i = 0; i < notAllowed.length; i++) {
      if (parseInt(userID) === parseInt(notAllowed[i])) {
        return true;
      }
    }
    return false;
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
        let id = module.exports.randomInt(1, 2);
      // console.log(id);
        let bias = module.exports.rand(0, 20, 0.4);
        while (bias > pokDex.returnDex()[id].spawnRate) {
          id = module.exports.randomInt(1, 2);
        }
        // id = 74;
        let temp = pokDex.returnDex()[id];
      pokemon = {
        id: temp.id,
        name: temp.name,
        spawnRate: temp.spawnRate,
        level: module.exports.decodeLevel(temp.spawnRate),
        weight: temp.weight,
        height: temp.height,
        spawnIcon: temp.spawnIcon,
        boxIcon: temp.boxIcon,
        owner: null,
        nickName: temp.nickName,
        exp: 0,
        traded: false,
        description: temp.description,
        type: {
          1: temp.type[1],
          2: null,
        },
        base: {
          atk: temp.base.atk,
          spatk: temp.base.spatk,
          def: temp.base.def,
          spdef: temp.base.spdef,
          spd: temp.base.spd,
          hp: temp.base.hp,
        },
        iv: {
          atk: module.exports.randomInt(1, 32),
          spatk: module.exports.randomInt(1, 32),
          def: module.exports.randomInt(1, 32),
          spdef: module.exports.randomInt(1, 32),
          spd: module.exports.randomInt(1, 32),
          hp: module.exports.randomInt(1, 32),
        },
        ev: {
          atk: 0,
          spatk: 0,
          def: 0,
          spdef: 0,
          spd: 0,
          hp: 0,
        },
        currentMoves : {
          1: {
            level: null,
            move: null,
          },
          2: {
            level: null,
            move: null,
          },
          3: {
            level: null,
            move: null,
          },
          4: {
            level: null,
            move: null,
          },
        },
        currentHP: 0,
      };
      if (temp.type[2] !== undefined || temp.type[2] !== "null" || temp.type[2] !== null || temp.type[2] !== "null") {
        pokemon.type[2] = temp.type[2];
      }
      pokemon.currentHP = module.exports.hpformula(pokemon);
      pokemon.exp = Math.pow(pokemon.level, 3);
      // console.log(pokemon.currentHP);
      let tempArr = Object.create(pokDex.returnMoveList()[id]);
      let maxArr = tempArr.length;
      let moveCount = 1;

      while (maxArr !== 0 && moveCount < 5) {
        let random = module.exports.randomInt(0, maxArr);
        if (tempArr[random].level <= pokemon.level && tempArr[random] !== pokemon.currentMoves[moveCount]) {
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
        // console.log(pokemon.currentHP);
        // test = 0;
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
      case 85: return module.exports.randomInt(3, 13);
      case 73: return module.exports.randomInt(10, 16);
      case 55: return module.exports.randomInt(13, 24);
      case 37: return module.exports.randomInt(20, 31);
      case 27: return module.exports.randomInt(28, 40);
      case 25: return module.exports.randomInt(55, 66);
    }
  },

  randomNum: function (min, max) {
    return Math.random() * (max - min) + min;
    //The maximum is exclusive and the minimum is inclusive
  },

  randomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  rand: function (min, max, bias) {
    return min + (max - min) * Math.pow( module.exports.randomNum(0, 1), bias);
  },

  savePokString: function (box, i) {
    return ("\n" + "id:" + box.get(i).id + "name:" + box.get(i).name + "spawnRate:" + box.get(i).spawnRate + "level:" + box.get(i).level
        + "weight:" + box.get(i).weight + "height:" + box.get(i).height + "spawnIcon:" + box.get(i).spawnIcon + "boxIcon:" + box.get(i).boxIcon+ "owner:" + box.get(i).owner
        + "nickName:" + box.get(i).nickName + "exp:" + box.get(i).exp + "traded:" + box.get(i).traded + "description:" + box.get(i).description + "type1:" + box.get(i).type[1] + "type2:" + box.get(i).type[2]
        + "baseAtk:" + box.get(i).base.atk + "baseSpAtk:" + box.get(i).base.spatk + "baseDef:" + box.get(i).base.def + "baseSpDef:" + box.get(i).base.spdef + "baseSpd:" + box.get(i).base.spd
        + "baseHp:" + box.get(i).base.hp + "ivAtk:" + box.get(i).iv.atk + "ivSpAtk:" + box.get(i).iv.spatk + "ivDef:" + box.get(i).iv.def + "ivSpDef:" + box.get(i).iv.spdef
        + "ivSpd:" + box.get(i).iv.spd + "ivHp:" + box.get(i).iv.hp + "evAtk:" + box.get(i).ev.atk + "evSpAtk:" + box.get(i).ev.spatk + "evDef:" + box.get(i).ev.def + "evSpSpDef:" + box.get(i).ev.spdef
        + "evSpd:" + box.get(i).ev.spd + "evHp:" + box.get(i).ev.hp + module.exports.printMoves(box.get(i)) + "currentHP:" + box.get(i).currentHP);
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
    battleManager.push(module.exports.createBattle(user1, user2, new Date(), true, msg));
  },

  // printBattle: function () {
  //   for (let i = 0; i < battleManager.length; i++) {
  //     console.log(battleManager[i]);
  //   }
  // },

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

  returnHP: function (fighter) {
    let string = "";
    // console.log(fighter.currentHP);
    let temp = Math.floor((fighter.currentHP/module.exports.hpformula(fighter))*100);
    let upper = 100-temp;
    while (temp !== 0) {
      // console.log("stuck");
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
      // console.log("temp " + Math.floor((fighter.currentHP/module.exports.hpformula(fighter))*100));
      // console.log("uppwer: " + upper);
      string = string + "⣀";
      upper = upper - 5;
      // console.log("string " + string);
    }
    return string;
  },

  hpformula: function(poke) {
    // console.log(pokemon.name + " hp " + Math.floor((((parseInt(pokemon.iv.hp) + 2*parseInt(pokemon.base.hp) + ((parseInt(pokemon.ev.hp))/4)+100) * parseInt(pokemon.level))/100) + 10));
    return Math.floor((((parseInt(poke.iv.hp) + 2*parseInt(poke.base.hp) + ((parseInt(poke.ev.hp))/4)+100) * parseInt(poke.level))/100) + 10);
  },

  moveFormula: function (base, iv, ev, level) {
    return Math.floor((((parseInt(iv) + 2 * parseInt(base) + parseInt(ev)/4 + 100) * parseInt(level))/100) + 5);
  },

  printMoves: function (pokemon) {
    if (pokemon.id === null || pokemon.id === "null") {
      return ("move1lvl:nullmove1nam:nullmove1typ:nullmove1category:nullmove1power:nullmove1accuracy:nullmove1powerPoints:nulleffect:null"
          + "move2lvl:nullmove2nam:nullmove2typ:nullmove2category:nullmove2power:nullmove2accuracy:nullmove2powerPoints:nulleffect:null"
          + "move3lvl:nullmove3nam:nullmove3typ:nullmove3category:nullmove3power:nullmove3accuracy:nullmove3powerPoints:nulleffect:null"
          + "move4lvl:nullmove4nam:nullmove4typ:nullmove4category:nullmove4power:nullmove4accuracy:nullmove4powerPoints:nulleffect:null");
    }
    let moves = "";
    for (let i = 1; i < 5; i++) {
      if (pokemon.currentMoves[i] !== null && pokemon.currentMoves[i] !== "null" && pokemon.currentMoves[i].level !== "null" && pokemon.currentMoves[i].level !== null) {
        moves = moves + "move" + i + "lvl:" + pokemon.currentMoves[i].level + "move" + i + "nam:" + pokemon.currentMoves[i].move.name + "move" + i + "typ:" + pokemon.currentMoves[i].move.type
            + "move" + i + "category:" + pokemon.currentMoves[i].move.category
            + "move" + i + "power:" + pokemon.currentMoves[i].move.power + "move" + i + "accuracy:" + pokemon.currentMoves[i].move.accuracy + "move" + i + "powerPoints:" + pokemon.currentMoves[i].move.powerPoints
            + "move" + i + "effect:" + pokemon.currentMoves[i].move.effect;
      }
      else {
        moves = moves + "move" + i + "lvl:nullmove" + i + "nam:nullmove" + i + "typ:nullmove" + i + "category:null"
            + "move" + i + "power:nullmove" + i + "accuracy:nullmove" + i + "powerPoints:nullmove" + i + "effect:null";
      }
    }
    return moves;
  },

  randomAiMove (battlePlace) {
    //RETURN STRUGGLE IF THE TOTAL PP IS 0, OR RETURN A DIFFERENT MOVE IF CURRENT PP IS 0, CODE THOSE TWO THINGS KK THX BYE
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[i].move !== null && module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[i].move !== "null") {
        count += module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[i].move.powerPoints;
      }
    }
    if (count < 1) {
      return "Struggle";
    }
    let randomMove = module.exports.randomInt(1,5);
    while ((module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[randomMove].move === null || module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[randomMove].move === "null") || (module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[randomMove].move !== null && module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[randomMove].move !== "null" && module.exports.getbattleManager()[battlePlace].fighter2.currentMoves[randomMove].move.powerPoints < 1)) {
      randomMove = module.exports.randomInt(1,5);
    }
    console.log(randomMove);
    return randomMove;
  },

  aiMove: function (battlePlace, moveChosen) {
    moveChosen.powerPoints--;
    let move = {
      name: moveChosen.name,
      dmg: module.exports.decodeMove(module.exports.getbattleManager()[battlePlace].fighter2, module.exports.getbattleManager()[battlePlace].fighter1.follower,
          moveChosen, module.exports.getbattleManager()[battlePlace].fighter2Moves,
          module.exports.getbattleManager()[battlePlace].fighter2Stages, module.exports.getbattleManager()[battlePlace].fighter1Stages, battlePlace,
          module.exports.getbattleManager()[battlePlace].statusEffects.aiStatus, module.exports.getbattleManager()[battlePlace].statusEffects.userStatus, module.exports.getbattleManager()[battlePlace].fighter1Moves),
    };
    module.exports.getbattleManager()[battlePlace].fighter1.follower.currentHP -= move.dmg;
    module.exports.getbattleManager()[battlePlace].fighter1.follower.currentHP = Math.max(0, module.exports.getbattleManager()[battlePlace].fighter1.follower.currentHP);
    module.exports.getbattleManager()[battlePlace].fighter2Moves.push(move);
    if (module.exports.getbattleManager()[battlePlace].fighter1.follower.currentHP === 0) {
      let moneyLost = Math.floor(module.exports.randomInt(0, module.exports.getbattleManager()[battlePlace].fighter1.money + 1) * .2);
      module.exports.getbattleManager()[battlePlace].fighter1.money -= moneyLost;
      module.exports.getbattleManager()[battlePlace].moveText += "\nYou lost $" + moneyLost + ".";
    }
  },

  userMove: function (battlePlace, moveChosen) {
    moveChosen.powerPoints--;
    let move = {
      name: moveChosen.name,
      dmg: module.exports.decodeMove(module.exports.getbattleManager()[battlePlace].fighter1.follower, module.exports.getbattleManager()[battlePlace].fighter2,
          moveChosen, module.exports.getbattleManager()[battlePlace].fighter1Moves, module.exports.getbattleManager()[battlePlace].fighter1Stages,
          module.exports.getbattleManager()[battlePlace].fighter2Stages, battlePlace, module.exports.getbattleManager()[battlePlace].statusEffects.userStatus, module.exports.getbattleManager()[battlePlace].statusEffects.aiStatus,
          module.exports.getbattleManager()[battlePlace].fighter2Moves),
    };
    module.exports.getbattleManager()[battlePlace].fighter2.currentHP -= move.dmg;
    module.exports.getbattleManager()[battlePlace].fighter2.currentHP = Math.max(0, module.exports.getbattleManager()[battlePlace].fighter2.currentHP);
    module.exports.getbattleManager()[battlePlace].fighter1Moves.push(move);
    if (module.exports.getbattleManager()[battlePlace].fighter1.follower.currentHP === 0 && module.exports.getbattleManager()[battlePlace].fighter2.currentHP > 0) {
      let moneyLost = Math.floor(module.exports.randomInt(0, module.exports.getbattleManager()[battlePlace].fighter1.money + 1) * .1);
      module.exports.getbattleManager()[battlePlace].fighter1.money -= moneyLost;
      module.exports.getbattleManager()[battlePlace].moveText += "\nYou lost $" + moneyLost + ".";
    }
  },

  createBattle: function (fight1, fight2, timeNow, update, msg) {
    let fighter2 = {
      id: fight2.id,
      name: fight2.name,
      spawnRate: fight2.spawnRate,
      level: fight2.level,
      weight: fight2.weight,
      height: fight2.height,
      spawnIcon: fight2.spawnIcon,
      boxIcon: fight2.boxIcon,
      owner: fight2.owner,
      nickName: fight2.nickName,
      exp: fight2.exp,
      traded: fight2.traded,
      description: fight2.description,
      type: {
        1: fight2.type[1],
        2: fight2.type[2],
      },
      base: {
        atk: fight2.base.atk,
        spatk: fight2.base.spatk,
        def: fight2.base.def,
        spdef: fight2.base.spdef,
        spd: fight2.base.spd,
        hp: fight2.base.hp,
      },
      iv: {
        atk: fight2.iv.atk,
        spatk: fight2.iv.spatk,
        def: fight2.iv.def,
        spdef: fight2.iv.spdef,
        spd: fight2.iv.spd,
        hp: fight2.iv.hp,
      },
      ev: {
        atk: fight2.ev.atk,
        spatk: fight2.ev.spatk,
        def: fight2.ev.def,
        spdef: fight2.ev.spdef,
        spd: fight2.ev.spd,
        hp: fight2.ev.hp,
      },
      currentMoves : {
        1: {
          level: null,
          move: null,
        },
        2: {
          level: null,
          move: null,
        },
        3: {
          level: null,
          move: null,
        },
        4: {
          level: null,
          move: null,
        },
      },
      currentHP: fight2.currentHP,
    };
    for (let i = 1; i < 5; i++) {
      if (fight2.currentMoves[i] !== null && fight2.currentMoves[i] !== "null" && fight2.currentMoves[i].move !== "null" && fight2.currentMoves[i].move !== null) {
        fighter2.currentMoves[i].level = fight2.currentMoves[i].level;
        fighter2.currentMoves[i].move = Object.create(fight2.currentMoves[i].move);
      }
    }
    // console.log("pokeObj " + module.exports.returnPokemonObj().currentHP);
    // console.log("new fight2 " + fighter2.currentHP);
    // fighter2.currentHP += 1;
    // console.log("pokeObj " + module.exports.returnPokemonObj().currentHP);
    // console.log("new fight2 " + fighter2.currentHP);

    return {
      fighter1: fight1,
      fighter2: fighter2,
      time: timeNow,
      updated: update,
      messages: msg,
      fighter1Moves: [],
      fighter2Moves: [],
      fighter1Stages: {
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0,
        evasive: 0,
        accuracy: 0,
      },
      fighter2Stages: {
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0,
        evasive: 0,
        accuracy: 0,
      },
      moveText : "Battle has begun!",
      potionsUsed: 0,
      fireSpinCounter: {
        aiCounter: 0,
        userCounter: 0,
      },
      statusEffects: {
        userStatus: {
          paralyzed: false,
          poisoned: false,
          badlyPoisoned: {
            poisoned: false,
            damageMultiplier: 0,
          },
          burned: false,
          flinch: false,
          confused: false,
          infatuation: false,
          frozen: false,
          sleeping: false,
        },
        aiStatus: {
          paralyzed: false,
          poisoned: false,
          badlyPoisoned: {
            poisoned: false,
            damageMultiplier: 0,
          },
          burned: false,
          flinch: false,
          confused: false,
          infatuation: false,
          frozen: false,
          sleeping: false,
        }
      }
    };
  },

  simpleDamage: function (attacker, defender, moveUsed, attackerMoveList, attackerStages, defenderStages, userPlace, attackerStatusEffects, defenderStatusEffects, defenderMoveList) {
    let dmg;
    let levelCal = Math.floor(((2*attacker.level)/5) + 2);
    // console.log("levelCal: " + levelCal);
    let power = moveUsed.power;
    let a;
    let d;
    let burn = 1;

    if (parseInt(moveUsed.category) === properties.returnCategory().physical) {
      // console.log("physical move used");
      a = module.exports.moveFormula(attacker.base.atk, attacker.iv.atk, attacker.ev.atk, attacker.level);
      a = module.exports.stageMultiplier(a, attackerStages.atk);
      console.log("attacker atk STAGE: " + attacker.name + " " + attackerStages.atk);
      // console.log("a: " + a);
      d = module.exports.moveFormula(defender.base.def, defender.iv.def, defender.ev.def, defender.level);
      d = module.exports.stageMultiplier(d, defenderStages.def);
      if (attackerStatusEffects.burned === true) {
        burn = 0.5;
      }
    }
    else if (parseInt(moveUsed.category) === properties.returnCategory().special) {
      // console.log("special move used");
      a = module.exports.moveFormula(attacker.base.spatk, attacker.iv.spatk, attacker.ev.spatk, attacker.level);
      a = module.exports.stageMultiplier(a, attackerStages.spAtk);
      // console.log("a: " + a);
      d = module.exports.moveFormula(defender.base.spdef, defender.iv.spdef, defender.ev.spdef, defender.level);
      d = module.exports.stageMultiplier(d, defenderStages.spDef);
      // console.log("d: " + d);
    }
    let num = Math.floor(((levelCal * power * (a/d))/50) +2);
    // console.log("num: " + num);
    let critical = 1;
    let random = (module.exports.randomInt(85, 101)/100);
    // console.log("random: " + random);
    let stab = 1;
    let type;
    let critStage = module.exports.critChance(moveUsed, attackerMoveList);
    // console.log("critStage: " + critStage);
    if (critStage === 0) {
      if (module.exports.randomInt(0,25) === 0) {
        critical = 1.5;
      }
    }
    else if (critStage === 1) {
      if (module.exports.randomInt(0,9) === 0) {
        critical = 1.5;
      }
    }
    else if (critStage === 2) {
      if (module.exports.randomInt(0,2) === 0) {
        critical = 1.5;
      }
    }
    else {
      critical = 1.5;
    }
    // console.log("critical: " + critical);

    if (moveUsed.type === attacker.type[1] || ((null !== attacker.type[2] || "null" !== attacker.type[2]) && moveUsed.type === attacker.type[2])) {
      stab = 1.5
    }
    // console.log("stab: " + stab);

    type = module.exports.typeModifier(moveUsed, parseInt(defender.type[1]));
    console.log("type2: " + defender.type[2]);
    if (defender.type[2] !== undefined || defender.type[2] !== "undefined" || defender.type[2] !== null || defender.type[2] !== "null") {
      console.log("BOT UNDEFINED");
      type *= module.exports.typeModifier(moveUsed, parseInt(defender.type[2]));
    }
    // console.log("type2: " + type);

    dmg = Math.floor(num * (critical * random * stab * type * burn));

    if (module.exports.dodged(moveUsed, attackerStages, defenderStages) && moveUsed.accuracy < 101) {
      module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + " but it missed.";
      return 0;
    }
    else {
      module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
      if (critical > 1) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was a critical strike.";
      }
      if (type === 0) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was not effective at all.";
      }
      if (type === 0.25) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was not very effective at all.";
      }
      if (type === 0.5) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was a little effective.";
      }
      if (type === 2) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was super effective.";
      }
      if (type === 4) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt was extremely effective.";
      }
      if (dmg < defender.currentHP) {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt did " + dmg + " damage.";
        if (!module.exports.currentlyStatusEffects(defenderStatusEffects) && (moveUsed.name === "Ember" || moveUsed.name === "Flamethrower" || moveUsed.name === "Heat Wave" || moveUsed.name === "Flare Blitz" || moveUsed.name === "Inferno") && defender.type[1] !== 9 && (defender.type[2] !== null || defender.type[2] !== "null") && defender.type[2] !== 9) {
          let percentage = 11;
          if (moveUsed.name === "Inferno") {
            percentage = 2;
          }
          if (module.exports.randomInt(1, percentage) === 1) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + defender.name + " has been burned.";
            defenderStatusEffects.burned = true;
          }
        }
        else if (moveUsed.name === "Bite" && defenderMoveList.length <= attackerMoveList.length) {
          if (module.exports.randomInt(1, 11) === 1) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + defender.name + " has been flinched.";
            defenderStatusEffects.flinch = true;
          }
        }
        else if (!module.exports.currentlyStatusEffects(defenderStatusEffects) && (moveUsed.name === "Dragon Breath") && defender.type[1] !== 5 && (defender.type[2] !== null || defender.type[2] !== "null") && defender.type[2] !== 5) {
          let percentage = 11;
          if (moveUsed.name === "Dragon Breath") {
            percentage = 4;
          }
          if (module.exports.randomInt(1, percentage) === 1) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + defender.name + " has been paralyzed.";
            defenderStatusEffects.paralyzed = true;
          }
        }
        else if ((moveUsed.name === "Water Pulse")) {
          let percentage = 11;
          if (moveUsed.name === "Water Pulse") {
            percentage = 6;
          }
          if (module.exports.randomInt(1, percentage) === 1) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + defender.name + " has been confused.";
            defenderStatusEffects.confused = true;
          }
        }
        else if (moveUsed.name === "Rapid Spin") {
          module.exports.increaseAttackerSpdStage(1, attackerStages, attacker.name);
        }
        return dmg;
      }
      else {
        module.exports.getbattleManager()[userPlace].moveText += "\nIt did " + defender.currentHP + " damage.\n" + defender.name + " has feinted.";
        return defender.currentHP;
      }
    }
    // console.log("dmg: " + dmg);
  },

  currentlyStatusEffects: function (defenderStatusEffects) {
    return defenderStatusEffects.paralyzed || defenderStatusEffects.poisoned || defenderStatusEffects.badlyPoisoned.poisoned || defenderStatusEffects.burned ||
        defenderStatusEffects.frozen || defenderStatusEffects.sleeping;
  },

  dodged: function (moveUsed, attackerStages, defenderStages) {
    let percentHit = Math.floor(moveUsed.accuracy * (module.exports.accEvaMultiplier(attackerStages.accuracy) / module.exports.accEvaMultiplier(defenderStages.evasive)));
    if (module.exports.randomInt(0, 101) > percentHit) {
      return true;
    }
  },

  decreaseDefenderAtkStage: function(decreaseBy, defenderStages, defenderName) {
    if (defenderStages.atk > -6) {
      defenderStages.atk -= decreaseBy;
      return (defenderName + "'s attack was decreased.");
    }
    return "But nothing happened.";
  },
  increaseAttackerAtkStage: function(increaseBy, attackerStages, attackerName) {
    if (attackerStages.atk < 6) {
      attackerStages.atk += increaseBy;
      return (attackerName + "'s attack was increased.");
    }
    return "But nothing happened.";
  },

  decreaseDefenderDefStage: function(decreaseBy, defenderStages, defenderName) {
    if (defenderStages.def > -6) {
      defenderStages.def -= decreaseBy;
      return (defenderName + "'s attack was decreased.");
    }
    return "But nothing happened.";
  },
  increaseAttackerDefStage: function(increaseBy, attackerStages, attackerName) {
    if (attackerStages.def < 6) {
      attackerStages.def += increaseBy;
      return (attackerName + "'s defense was increased.");
    }
    return "But nothing happened.";
  },

  decreaseDefenderSpdStage: function(decreaseBy, defenderStages, defenderName) {
    if (defenderStages.spd > -6) {
      defenderStages.spd -= decreaseBy;
      return (defenderName + "'s speed was decreased.");
    }
    return "But nothing happened.";
  },
  increaseAttackerSpdStage: function(increaseBy, attackerStages, attackerName) {
    if (attackerStages.spd < 6) {
      attackerStages.spd += increaseBy;
      return (attackerName + "'s speed was increased.");
    }
    return "But nothing happened.";
  },

  decreaseDefenderAccStage: function(decreaseBy, defenderStages, defenderName) {
    if (defenderStages.accuracy > -6) {
      defenderStages.accuracy -= decreaseBy;
      return (defenderName + "'s attack was decreased.");
    }
    return "But nothing happened.";
  },

  typeModifier: function (moveUsed, defenderType) {
    console.log(module.exports.decodeType(moveUsed.type) + " move used on: " + module.exports.decodeType(defenderType));
    switch (parseInt(moveUsed.type)) {
      case properties.returnAttributes().normal:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 0.5;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 0;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          case properties.returnAttributes().null:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().fight:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 2;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 0.5;
          case properties.returnAttributes().poison:
            return 0.5;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 2;
          case properties.returnAttributes().bug:
            return 0.5;
          case properties.returnAttributes().ghost:
            return 0;
          case properties.returnAttributes().steel:
            return 2;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 0.5;
          case properties.returnAttributes().ice:
            return 2;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 2;
          case properties.returnAttributes().fairy:
            return 0.5;
          default:
            return 1;
        }
      case properties.returnAttributes().flying:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 2;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 0.5;
          case properties.returnAttributes().bug:
            return 2;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 2;
          case properties.returnAttributes().electric:
            return 0.5;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().poison:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 0.5;
          case properties.returnAttributes().ground:
            return 0.5;
          case properties.returnAttributes().rock:
            return 0.5;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 0.5;
          case properties.returnAttributes().steel:
            return 0;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 2;
          case properties.returnAttributes().electric:
            return 0.5;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 2;
          default:
            return 1;
        }
      case properties.returnAttributes().ground:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 0;
          case properties.returnAttributes().poison:
            return 2;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 2;
          case properties.returnAttributes().bug:
            return 0.5;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 2;
          case properties.returnAttributes().fire:
            return 2;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 0.5;
          case properties.returnAttributes().electric:
            return 2;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().rock:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 0.5;
          case properties.returnAttributes().flying:
            return 2;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 0.5;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 2;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 2;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 2;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().bug:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 0.5;
          case properties.returnAttributes().flying:
            return 0.5;
          case properties.returnAttributes().poison:
            return 0.5;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 0.5;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 2;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 2;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 2;
          case properties.returnAttributes().fairy:
            return 0.5;
          default:
            return 1;
        }
      case properties.returnAttributes().ghost:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 0;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 2;
          case properties.returnAttributes().steel:
            return 1;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 2;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 0.5;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().steel:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 2;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 0.5;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 0.5;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 2;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 2;
          default:
            return 1;
        }
      case properties.returnAttributes().fire:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 0.5;
          case properties.returnAttributes().bug:
            return 2;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 2;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 0.5;
          case properties.returnAttributes().grass:
            return 2;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 2;
          case properties.returnAttributes().dragon:
            return 0.5;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().water:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 2;
          case properties.returnAttributes().rock:
            return 2;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 1;
          case properties.returnAttributes().fire:
            return 2;
          case properties.returnAttributes().water:
            return 0.5;
          case properties.returnAttributes().grass:
            return 0.5;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 0.5;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().grass:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 0.5;
          case properties.returnAttributes().poison:
            return 0.5;
          case properties.returnAttributes().ground:
            return 2;
          case properties.returnAttributes().rock:
            return 2;
          case properties.returnAttributes().bug:
            return 0.5;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 2;
          case properties.returnAttributes().grass:
            return 0.5;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 0.5;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().electric:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 2;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 0;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 1;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 2;
          case properties.returnAttributes().grass:
            return 0.5;
          case properties.returnAttributes().electric:
            return 0.5;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 0.5;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().psychic:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 2;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 2;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 0.5;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 0;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().ice:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 2;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 2;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 0.5;
          case properties.returnAttributes().grass:
            return 2;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 0.5;
          case properties.returnAttributes().dragon:
            return 2;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
      case properties.returnAttributes().dragon:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 1;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 2;
          case properties.returnAttributes().dark:
            return 1;
          case properties.returnAttributes().fairy:
            return 0;
          default:
            return 1;
        }
      case properties.returnAttributes().dark:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 0.5;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 1;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 2;
          case properties.returnAttributes().steel:
            return 1;
          case properties.returnAttributes().fire:
            return 1;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 2;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 1;
          case properties.returnAttributes().dark:
            return 0.5;
          case properties.returnAttributes().fairy:
            return 0.5;
          default:
            return 1;
        }
      case properties.returnAttributes().fairy:
        switch (defenderType) {
          case properties.returnAttributes().normal:
            return 1;
          case properties.returnAttributes().fight:
            return 2;
          case properties.returnAttributes().flying:
            return 1;
          case properties.returnAttributes().poison:
            return 0.5;
          case properties.returnAttributes().ground:
            return 1;
          case properties.returnAttributes().rock:
            return 1;
          case properties.returnAttributes().bug:
            return 1;
          case properties.returnAttributes().ghost:
            return 1;
          case properties.returnAttributes().steel:
            return 0.5;
          case properties.returnAttributes().fire:
            return 0.5;
          case properties.returnAttributes().water:
            return 1;
          case properties.returnAttributes().grass:
            return 1;
          case properties.returnAttributes().electric:
            return 1;
          case properties.returnAttributes().psychic:
            return 1;
          case properties.returnAttributes().ice:
            return 1;
          case properties.returnAttributes().dragon:
            return 2;
          case properties.returnAttributes().dark:
            return 2;
          case properties.returnAttributes().fairy:
            return 1;
          default:
            return 1;
        }
    }
  },

  decodeMove: function(attacker, defender, moveUsed, attackerMoveList, attackerStages, defenderStages, userPlace, attackerStatusEffects, defenderStatusEffects, defenderMoveList) {
    let names = ["Pound", "Scratch", "Ember", "Dragon Breath", "Slash", "Flamethrower", "Inferno", "Dragon Claw", "Heat Wave",  "Tackle", "Water Gun" , "Bite", "Rapid Spin", "Water Pulse"];
    if (names.includes(moveUsed.name)) {
      return module.exports.simpleDamage(attacker, defender, moveUsed, attackerMoveList, attackerStages, defenderStages, userPlace, attackerStatusEffects, defenderStatusEffects, defenderMoveList);
    }
    else {
      let dmg;
      let recoil;
      switch (moveUsed.name) {
        case "Growl":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
          if (!module.exports.dodged(moveUsed, attackerStages, defenderStages)) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + module.exports.decreaseDefenderAtkStage(1, defenderStages, defender.name);
          }
          else {
            module.exports.getbattleManager()[userPlace].moveText += "\nBut it missed.";
          }
          return 0;
        case "Smokescreen":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
          if (!module.exports.dodged(moveUsed, attackerStages, defenderStages)) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + module.exports.decreaseDefenderAccStage(1, defenderStages, defender.name);
          }
          else {
            module.exports.getbattleManager()[userPlace].moveText += "\nBut it missed.";
          }
          return 0;
        case "Scary Face":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
          if (!module.exports.dodged(moveUsed, attackerStages, defenderStages)) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + module.exports.decreaseDefenderSpdStage(2, defenderStages, defender.name);
          }
          else {
            module.exports.getbattleManager()[userPlace].moveText += "\nBut it missed.";
          }
          return 0;
        case "Tail Whip":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
          if (!module.exports.dodged(moveUsed, attackerStages, defenderStages)) {
            module.exports.getbattleManager()[userPlace].moveText += "\n" + module.exports.decreaseDefenderDefStage(1, defenderStages, defender.name);
          }
          else {
            module.exports.getbattleManager()[userPlace].moveText += "\nBut it missed.";
          }
          return 0;
        case "Withdraw":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + ".";
          module.exports.getbattleManager()[userPlace].moveText += "\n" + module.exports.increaseAttackerDefStage(1, defenderStages, defender.name);
          return 0;
        case "Fire Spin":
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " used " + moveUsed.name.toLowerCase() + " on " + defender.name + ".";
          if (!module.exports.dodged(moveUsed, attackerStages, defenderStages)) {
            let dmg = Math.floor(module.exports.hpformula(defender)/8);
            module.exports.getbattleManager()[userPlace].moveText += "\nIt did " + dmg + " damage.";
            return Math.floor(module.exports.hpformula(defender)/8);
          }
          else {
            module.exports.getbattleManager()[userPlace].moveText += "\nBut it missed.";
            return 0;
          }
        case "Flare Blitz":
          dmg = module.exports.simpleDamage(attacker, defender, moveUsed, attackerMoveList, attackerStages, defenderStages, userPlace, attackerStatusEffects, defenderStatusEffects, defenderMoveList);
          recoil = Math.floor(dmg/3);
          attacker.currentHP -= recoil;
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " hurt itself and did " + recoil + " damage.";
          attacker.currentHP = Math.max(0, attacker.currentHP);
          return dmg;
        case "Struggle":
          dmg = module.exports.simpleDamage(attacker, defender, moveUsed, attackerMoveList, attackerStages, defenderStages, userPlace, attackerStatusEffects, defenderStatusEffects, defenderMoveList);
          recoil = Math.floor(module.exports.hpformula(attacker)/4);
          attacker.currentHP -= recoil;
          module.exports.getbattleManager()[userPlace].moveText += "\n" + attacker.name + " hurt itself and did " + recoil + " damage.";
          attacker.currentHP = Math.max(0, attacker.currentHP);
          return dmg;
        default:
          client.channels.get("468170551135961108").send(moveUsed + ' MOVE NOT PROGRAMMED ' + e);
          console.log(moveUsed + " MOVE NOT PROGRAMMED");
          return -1;
      }
    }
  },

  useStruggle: function (fighter) {
    for (let i = 1; i < 5; i++) {
      if ((fighter.currentMoves[i] !== null && fighter.currentMoves[i] !== "null" && fighter.currentMoves[i].move !== null && fighter.currentMoves[i].move !== "null") && fighter.currentMoves[i].move.powerPoints > 0) {
        return false;
      }
    }
    return true;
  },

  //UPDATE THIS WITH NEW MOVES
  critChance: function (moveUsed, attackerMoveList) {
    let stage = 0;
    if (moveUsed.name === "Aeroblast" || moveUsed.name === "Air Cutter" || moveUsed.name === "Blaze Kick" ||
        moveUsed.name === "Crabhammer" || moveUsed.name === "Cross Chop" || moveUsed.name === "Cross Poison" ||
        moveUsed.name === "Drill Run" || moveUsed.name === "Karate Chop" || moveUsed.name === "Leaf Blade" ||
        moveUsed.name === "Night Slash" || moveUsed.name === "Psycho Cut" || moveUsed.name === "Razor Leaf" ||
        moveUsed.name === "Razor Wind" || moveUsed.name === "Sky Attack" || moveUsed.name === "Slash" ||
        moveUsed.name === "Spacial Rend" || moveUsed.name === "Stone Edge") {
          stage++;
    }
    if (attackerMoveList.length > 0) {
      for (let i = 0; i < attackerMoveList.length; i++) {
        if (attackerMoveList[i].name === "Focus Energy") {
          return (stage += 2);
        }
      }
    }
    return stage;
  },

  //UPDATE THIS WITH NEW MOVES
  returnSpeedStage: function (moveUsed, spdStageValue) {
    if (moveUsed.name === "Helping Hand") {
      return 5 + spdStageValue;
    }
    else if (moveUsed.name === "Detect" || moveUsed.name === "Endure" || moveUsed.name === "Magic Coat" || moveUsed.name === "Protect") {
      return 4 + spdStageValue;
    }
    else if (moveUsed.name === "Fake Out" || moveUsed.name === "Quick Guard" || moveUsed.name === "Wide Guard") {
      return 3 + spdStageValue;
    }
    else if (moveUsed.name === "Ally Switch" || moveUsed.name === "Feint" || moveUsed.name === "Follow Me" || moveUsed.name === "Rage Powder") {
      return 2 + spdStageValue;
    }
    else if (moveUsed.name === "Aqua Jet" || moveUsed.name === "Baby-Doll Eyes" || moveUsed.name === "Bide"
        || moveUsed.name === "Bullet Punch" || moveUsed.name === "Ice Shard" || moveUsed.name === "Mach Punch"
        || moveUsed.name === "Quick Attack" || moveUsed.name === "Sucker Punch" || moveUsed.name === "Vacuum Wave") {
      return 1 + spdStageValue;
    }
    else if (moveUsed.name === "Vital Throw") {
      return -1 + spdStageValue;
    }
    else if (moveUsed.name === "Focus Punch") {
      return -3 + spdStageValue;
    }
    else if (moveUsed.name === "Avalanche" || moveUsed.name === "Revenge") {
      return -4 + spdStageValue;
    }
    else if (moveUsed.name === "Mirror Coat" || moveUsed.name === "Counter") {
      return -5 + spdStageValue;
    }
    else if (moveUsed.name === "Circle Throw" || moveUsed.name === "Dragon Tail" || moveUsed.name === "Roar" || moveUsed.name === "Whirlwind" || moveUsed.name === "Teleport") {
      return -6 + spdStageValue;
    }
    else if (moveUsed.name === "Detect" || moveUsed.name === "Endure" || moveUsed.name === "Magic Coat" || moveUsed.name === "Protect") {
      return -7 + spdStageValue;
    }
    else {
      return spdStageValue;
    }
  },

  increaseAtk: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.atk = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.atk + number, 255);
  },
  increaseSpAtk: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spatk = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spatk + number, 255);
  },
  increaseDef: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.def = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.def + number, 255);
  },
  increaseSpDef: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spdef = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spdef + number, 255);
  },
  increaseSpd: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spd = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spd + number, 255);
  },
  increaseHP: function (userPlace, number) {
    module.exports.getbattleManager()[userPlace].fighter1.follower.ev.hp = Math.min(module.exports.getbattleManager()[userPlace].fighter1.follower.ev.hp + number, 255);
  },

  increaseEffortValues: function (userPlace) {
    if ((module.exports.getbattleManager()[userPlace].fighter1.follower.ev.atk + module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spatk + module.exports.getbattleManager()[userPlace].fighter1.follower.ev.def +
        module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spdef + module.exports.getbattleManager()[userPlace].fighter1.follower.ev.spd + module.exports.getbattleManager()[userPlace].fighter1.follower.ev.hp) < 511) {
      switch (module.exports.getbattleManager()[userPlace].fighter2.name) {
        case "Bulbasaur":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Ivysaur":
          module.exports.increaseSpAtk(userPlace, 1);
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Venusaur":
          module.exports.increaseSpAtk(userPlace, 2);
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Charmander":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Charmeleon":
          module.exports.increaseSpd(userPlace, 1);
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Charizard":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Squirtle":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Wartortle":
          module.exports.increaseDef(userPlace, 1);
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Blastoise":
          module.exports.increaseSpDef(userPlace, 3);
          break;
        case "Caterpie":
          module.exports.increaseHP(userPlace, 1);
          break;
        case "Metapod":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Butterfree":
          module.exports.increaseSpAtk(userPlace, 2);
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Weedle":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Kakuna":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Beedrill":
          module.exports.increaseAtk(userPlace, 2);
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Pidgey":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Pidgeotto":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Pidgeot":
          module.exports.increaseSpd(userPlace, 3);
          break;
        case "Rattata":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Raticate":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Spearow":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Fearow":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Ekans":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Arbok":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Pikachu":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Raichu":
          module.exports.increaseSpd(userPlace, 3);
          break;
        case "Sandshrew":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Sandslash":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "NidoranF":
          module.exports.increaseHP(userPlace, 1);
          break;
        case "Nidorina":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Nidoqueen":
          module.exports.increaseHP(userPlace, 3);
          break;
        case "NidoranM":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Nidorino":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Nidoking":
          module.exports.increaseAtk(userPlace, 3);
          break;
        case "Clefairy":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Clefable":
          module.exports.increaseHP(userPlace, 3);
          break;
        case "Vulpix":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Ninetales":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Jigglypuff":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Wigglytuff":
          module.exports.increaseHP(userPlace, 3);
          break;
        case "Zubat":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Golbat":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Oddish":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Gloom":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Vileplume":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Paras":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Parasect":
          module.exports.increaseAtk(userPlace, 2);
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Venonat":
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Venomoth":
          module.exports.increaseSpAtk(userPlace, 1);
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Diglett":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Dugtrio":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Meowth":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Persian":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Psyduck":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Golduck":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Mankey":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Primeape":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Growlithe":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Arcanine":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Poliwag":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Poliwhirl":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Poliwrath":
          module.exports.increaseDef(userPlace, 3);
          break;
        case "Abra":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Kadabra":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Alakazam":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Machop":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Machoke":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Machamp":
          module.exports.increaseAtk(userPlace, 3);
          break;
        case "Bellsprout":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Weepinbell":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Victreebel":
          module.exports.increaseAtk(userPlace, 3);
          break;
        case "Tentacool":
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Tentacruel":
          module.exports.increaseSpDef(userPlace, 2);
          break;
        case "Geodude":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Graveler":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Golem":
          module.exports.increaseDef(userPlace, 3);
          break;
        case "Ponyta":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Rapidash":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Slowpoke":
          module.exports.increaseHP(userPlace, 1);
          break;
        case "Slowbro":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Magnemite":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Magneton":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Farfetchd":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Doduo":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Dodrio":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Seel":
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Dewgong":
          module.exports.increaseSpDef(userPlace, 2);
          break;
        case "Grimer":
          module.exports.increaseHP(userPlace, 1);
          break;
        case "Muk":
          module.exports.increaseHP(userPlace, 1);
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Shellder":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Cloyster":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Gastly":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Haunter":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Gengar":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Onix":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Drowzee":
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Hypno":
          module.exports.increaseSpDef(userPlace, 2);
          break;
        case "Krabby":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Kingler":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Voltorb":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Electrode":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Exeggcute":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Exeggutor":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Cubone":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Marowak":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Hitmonlee":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Hitmonchan":
          module.exports.increaseSpDef(userPlace, 2);
          break;
        case "Lickitung":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Koffing":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Weezing":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Rhyhorn":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Rhydon":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Chansey":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Tangela":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Kangaskhan":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Horsea":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Seadra":
          module.exports.increaseSpAtk(userPlace, 1);
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Goldeen":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Seaking":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Staryu":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Starmie":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "MrMime":
          module.exports.increaseSpDef(userPlace, 2);
          break;
        case "Scyther":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Jynx":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Electabuzz":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Magmar":
          module.exports.increaseSpAtk(userPlace, 2);
          break;
        case "Pinsir":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Tauros":
          module.exports.increaseAtk(userPlace, 1);
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Magikarp":
          module.exports.increaseSpd(userPlace, 1);
          break;
        case "Gyarados":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Lapras":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Ditto":
          module.exports.increaseHP(userPlace, 1);
          break;
        case "Eevee":
          module.exports.increaseSpDef(userPlace, 1);
          break;
        case "Vaporeon":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Jolteon":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Flareon":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Porygon":
          module.exports.increaseSpAtk(userPlace, 1);
          break;
        case "Omanyte":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Omastar":
          module.exports.increaseDef(userPlace, 2);
          break;
        case "Kabuto":
          module.exports.increaseDef(userPlace, 1);
          break;
        case "Kabutops":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Aerodactyl":
          module.exports.increaseSpd(userPlace, 2);
          break;
        case "Snorlax":
          module.exports.increaseHP(userPlace, 2);
          break;
        case "Articuno":
          module.exports.increaseSpDef(userPlace, 3);
          break;
        case "Zapdos":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Moltres":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Dratini":
          module.exports.increaseAtk(userPlace, 1);
          break;
        case "Dragonair":
          module.exports.increaseAtk(userPlace, 2);
          break;
        case "Dragonite":
          module.exports.increaseAtk(userPlace, 3);
          break;
        case "Mewtwo":
          module.exports.increaseSpAtk(userPlace, 3);
          break;
        case "Mew":
          module.exports.increaseHP(userPlace, 3);
          break;
      }
    }
  },

  stageMultiplier: function (stat, stage) {
    if (stage < -5) {
      stat = stat * 2;
      return Math.floor(stat/8);
    }
    else if (stage === -5) {
      stat = stat * 2;
      return Math.floor(stat/7);
    }
    else if (stage === -4) {
      stat = stat * 2;
      return Math.floor(stat/6);
    }
    else if (stage === -3) {
      stat = stat * 2;
      return Math.floor(stat/5);
    }
    else if (stage === -2) {
      stat = stat * 2;
      return Math.floor(stat/4);
    }
    else if (stage === -1) {
      stat = stat * 2;
      return Math.floor(stat/3);
    }
    else if (stage === 0) {
      stat = stat * 2;
      return Math.floor(stat/2);
    }
    else if (stage === 1) {
      stat = stat * 3;
      return Math.floor(stat/2);
    }
    else if (stage === 2) {
      stat = stat * 4;
      return Math.floor(stat/2);
    }
    else if (stage === 3) {
      stat = stat * 5;
      return Math.floor(stat/2);
    }
    else if (stage === 4) {
      stat = stat * 6;
      return Math.floor(stat/2);
    }
    else if (stage === 5) {
      stat = stat * 7;
      return Math.floor(stat/2);
    }
    else if (stage > 5) {
      stat = stat * 8;
      return Math.floor(stat/2);
    }
  },

  accEvaMultiplier: function (stage) {
    let stat = 1;
    if (stage < -5) {
      stat = stat * 3;
      return stat/9;
    }
    else if (stage === -5) {
      stat = stat * 3;
      return stat/8;
    }
    else if (stage === -4) {
      stat = stat * 3;
      return stat/7;
    }
    else if (stage === -3) {
      stat = stat * 3;
      return stat/6;
    }
    else if (stage === -2) {
      stat = stat * 3;
      return stat/5;
    }
    else if (stage === -1) {
      stat = stat * 3;
      return stat/4;
    }
    else if (stage === 0) {
      stat = stat * 3;
      return stat/3;
    }
    else if (stage === 1) {
      stat = stat * 4;
      return stat/3;
    }
    else if (stage === 2) {
      stat = stat * 5;
      return stat/3;
    }
    else if (stage === 3) {
      stat = stat * 6;
      return stat/3;
    }
    else if (stage === 4) {
      stat = stat * 7;
      return stat/3;
    }
    else if (stage === 5) {
      stat = stat * 8;
      return stat/3;
    }
    else if (stage > 5) {
      stat = stat * 9;
      return stat/3;
    }
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
      case 18:
        return "Dark";
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

