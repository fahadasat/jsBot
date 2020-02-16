exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("rateme")
  message.channel.send("**" + message.author + " is a " + Math.floor(Math.random() * 11).toString() + "/10!**").catch(console.error);
};
