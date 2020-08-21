//const fs = require("fs");
const Discord = require("discord.js");

// var textByLine = ["QUESTION|ID|NAME"];
//updateArray();
//console.log(textByLine.length);
// var current = false;

let questions =  ["[QUESTION|ID|NAME]"];
let spam = false;

const fs = require('fs');
const readline = require('readline');

exports.run = async (client, message, args) => {
  if (args.length == 0) return;
  let path = "../jsBot/files/questions/questions.json"
  switch (args[0]) {
    case "add": {
      try {
        console.log("q add");
        if (args[1] === "" || args[1] === undefined || args[1].length === 0) {
          message.channel.send("Invalid Question.").catch(console.error);
          return;
        }
        try {
          fs.writeFileSync("../jsBot/files/questions/questions.json", "[QUESTION|ID|NAME]", {flag: 'wx'}, function (err) {
            if (err) {
              console.log(err);
            }
          });
        } catch (e) {
          console.log("File already there.");
        }
        let question = args.slice(1).join(" ") + "|" + message.author.id + "|" + message.author.username;
        fs.appendFileSync(path, "\n" + question);
        questions [questions.length] = question;
        if (spam === false) {
          spam = true;
          let min = 5;
          let sec = 10;
          setInterval(function () {
            sec--;
            if (sec == 0) {
              min--;
              sec = 10;
              if (min == -1) {
                min = 20;
                if (questions.length > 1) {
                  message.channel.send("Please help a fellow matador in their question! (~q list)")
                }
                else {
                  spam = false;
                }
              }
            }
          }, 1000);
        }
        message.channel.send("Question added.")
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH q add: ' + e);
      }
      break;
    }
    case "ans": {
      try {
        console.log("q ans");
        if (args[1] === "" || args[1] === undefined || args.length < 2) {
          message.channel.send("Invalid Answer.").catch(console.error);
          return;
        }
        //LOAD LIST
        let questionList = 0;
        const readQuestion = readline.createInterface({
          input: fs.createReadStream("../jsBot/files/questions/questions.json"),
          output: process.stdout,
          console: false
        });
        for await (const line of readQuestion) {
          questions[questionList] = line;
          questionList++;
        }

        if (questions.length < 2) {
          message.channel.send("List is empty.").catch(console.error);
          break;
        }
        let answer = args.slice(1).join(" ");
        let ques = JSON.stringify(questions.splice(1, 1)).split("|");
        message.channel.send("<@" + ques[1] + "> Your question:\n" + "`" + ques[0].replace(/[\[\]']+/g, '') + "\"`" + "\nwas answered by: " + message.author.username + "\n```" + answer + "```");
        fs.openSync("../jsBot/files/questions/questions.json", 'w+');
        fs.appendFileSync("../jsBot/files/questions/questions.json", "[QUESTION|ID|NAME]");
        for (let i = 1; i < questions.length; i++) {
          fs.appendFileSync("../jsBot/files/questions/questions.json", "\n" + questions[i]);
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH q ans: ' + e);
      }
      break;
    }

    case "select": {
      try {
        console.log("q select");
        if (args[2] === "" || args[2] === undefined || args.length < 3 || isNaN(args[1])) {
          message.channel.send("Invalid Answer.").catch(console.error);
          return;
        }
        //LOAD LIST
        let questionList = 0;
        const readQuestion = readline.createInterface({
          input: fs.createReadStream("../jsBot/files/questions/questions.json"),
          output: process.stdout,
          console: false
        });
        for await (const line of readQuestion) {
          questions[questionList] = line;
          questionList++;
        }

        if (questions.length < 2) {
          message.channel.send("List is empty.").catch(console.error);
          break;
        }
        if (args[1] < 1 || args[1] > questions.length - 1) {
          message.channel.send("Incorrect parameters.").catch(console.error);
          break;
        }
        let answer = args.slice(2).join(" ");
        let ques = JSON.stringify(questions.splice(args[1], args[1])).split("|");
        message.channel.send("<@" + ques[1] + "> Your question:\n" + "`" + ques[0].replace(/[\[\]']+/g, '') + "\"`" + "\nwas answered by: " + message.author.username + "\n```" + answer + "```");
        fs.openSync("../jsBot/files/questions/questions.json", 'w+');
        fs.appendFileSync("../jsBot/files/questions/questions.json", "[QUESTION|ID|NAME]");
        for (let i = 1; i < questions.length; i++) {
          fs.appendFileSync("../jsBot/files/questions/questions.json", "\n" + questions[i]);
        }
        break;
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH q select: ' + e);
      }
    }
    case "list": {
      try {
        console.log("q list");
        try {
          fs.writeFileSync("../jsBot/files/questions/questions.json", "[QUESTION|ID|NAME]", {flag: 'wx'}, function (err) {
            if (err) {
              console.log(err);
            }
          });
        } catch (e) {
          console.log("File already there.");
          let questionList = 0;
          const readQuestion = readline.createInterface({
            input: fs.createReadStream("../jsBot/files/questions/questions.json"),
            output: process.stdout,
            console: false
          });
          for await (const line of readQuestion) {
            questions[questionList] = line;
            questionList++;
          }
        }
        if (questions.length < 2) {
          message.channel.send("List is empty.").catch(console.error);
          break;
        }
        let embed = new Discord.RichEmbed()
            .setTitle("Question List:")
            .setColor("#adffa3");
        for (let i = 1; i < questions.length; i++) {
          let s = questions[i];
          let string = s.split("|");
          embed.addField("** " + (i) + ": **" + string[0], string[2]);
          if (i % 25 == 0) {
            message.channel.send({embed}).catch(console.error);
            embed = new Discord.RichEmbed()
                .setTitle("Question List Cont:")
                .setColor("#adffa3");
          }
        }
        if (questions.length % 26 != 0) {
          message.channel.send({embed}).catch(console.error);
        }
        if (spam === false) {
          spam = true;
          let min = 0;
          let sec = 10;
          setInterval(function () {
            sec--;
            if (sec == 0) {
              min--;
              sec = 10;
              if (min == -1) {
                min = 0;
                if (questions.length > 1) {
                  message.channel.send("Please help a fellow matador in their question! (~q list)")
                }
                else {
                  spam = false;
                }
              }
            }
          }, 1000);
        }
      }
      catch (e) {
        client.channels.get("468170551135961108").send('ERROR WITH q list: ' + e);
      }
      break;
    }
  }
};