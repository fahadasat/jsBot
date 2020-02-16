var tools = require('../pokemonFuncs.js');

module.exports = (client, message) => {

  // Ignore all bots
  if (message.author.bot) return;
//  if(message.channel)
  // console.log("msg");
  typeof tools.decCounter();

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
  // message.delete(1000).catch(console.error);

};
