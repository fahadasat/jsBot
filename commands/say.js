exports.run = (client, message, args) => {
  if (args.length == 0) return;
  console.log("say")
  let text = args.join(" ");
  message.channel.send(text).catch(console.error);
};
