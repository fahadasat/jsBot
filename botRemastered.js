// Import the discord.js module
const Discord = require("discord.js");
//Install enmap if you get an error
const Enmap = require("enmap");
const fs = require("fs");

// Create an instance of a Discord client
global.client = new Discord.Client();

//dir to the config file
const config = require("./config.json");
client.config = config;

var apiai = require('apiai');
var app = apiai(config.Dialogflow);

client.on('message', function(message){

        if((message.cleanContent.startsWith("@" + client.user.username) || message.channel.type === 'dm') && client.user.id !== message.author.id){
        var mess = remove(client.user.username, message.cleanContent);
        console.log(mess);
        const user = message.author.id;
        var promise = new Promise(function(resolve, reject) {
            var request = app.textRequest(mess, {
                sessionId: user
            });
            request.on('response', function(response) {
                console.log(response);
                var rep = response.result.fulfillment.speech;
                resolve(rep);
            });

            request.on('error', function(error) {
                resolve(null);
            });

            request.end();
        });

        (async function(){
            var result = await promise;
            if(result){
                await message.reply(result);
            } else{
                await message.reply("nothing here");
            }
        }());

    }
});

client.on('error', (err) => {
   console.log("ERROR EROOR: " + err.message)
});

function remove(username, text){
    return text.replace("@" + username + " ", "");
}

// this loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Obama)
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

//second loop is going to be for the commands themselves
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // simply store the whole thing in the command Enmap
    client.commands.set(commandName, props);
  });
});

// Log our bot in using the token from https://discordapp.com/developers
client.login(config.token);
