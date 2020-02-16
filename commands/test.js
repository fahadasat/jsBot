exports.run = (client, message, args) => {
  if (args.length != 0) return;
  message.channel.send("pong!").catch(console.error);


  // 'use strict';
  // const Cleverbot = require('cleverbot.io');
  // // .slice(2) removes the first 2 arguments, which are the nodejs executable path, and the filename
  // //let input = process.argv.slice(2).join(' ');
  // let input = "test";
  // let bot = new Cleverbot('46LZzY3O5p2JrSSL', '4x9YDFmG80esopqtfWY31EGdGouEO3kO');
  // bot.setNick('Vlad');
  // bot.create(function (err, session) {
  //     bot.ask(input, function (err, response) {
  //         console.log(session + ':', response)
  //         message.channel.send(response).catch(console.error);
  //     });
  // });

  // var cleverbot = require("cleverbot.io"),
  // bot = new cleverbot("46LZzY3O5p2JrSSL", "4x9YDFmG80esopqtfWY31EGdGouEO3kO");
  // bot.setNick("Matty");
  //
  // bot.create(function (err, Matty) {
  //   console.log("Loaded cleverBot");
    // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

    // Woo, you initialized cleverbot.io.  Insert further code here
//  });
  //exports.bot = bot;
  //var myModule = require('../botRemastered.js');

  // name is a member of myModule due to the export above
  //var bot = myModule.bot;
  // bot.ask("Test", function (err, response) {
	//    console.log(response); // Will likely be: "Living in a lonely world"
  // });
};
