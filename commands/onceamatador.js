exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("onceamatador")
  message.channel.send("Always a Matador!").catch(console.error);
};
