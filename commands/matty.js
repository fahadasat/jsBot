exports.run = (client, message, args) => {
  if (args.length != 0) return;
  console.log("matty");
  message.channel.send({
    files: [
      "./files/matty.jpg"
    ]
  }).catch(console.error);
};
