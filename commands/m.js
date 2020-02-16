exports.run = (client, message, args) => {
  if (args.length == 0) return;
  switch (args[0]) {
    case "campus":
      console.log("m campus");
      message.channel.send({
        files: [
          "./files/campusmap.jpg"
        ]
      }).catch(console.error);
      break;
    case "housing":
      console.log("m housing");
      message.channel.send({
        files: [
          "./files/housingmap.png"
        ]
      }).catch(console.error);
      break;
    case "shuttle":
      console.log("m shuttle");
      message.channel.send({
        files: [
          "./files/shuttlemap.png"
        ]
      }).catch(console.error);
      break;
    case "water":
      console.log("m water");
      message.channel.send({
        files: [
          "./files/watermap.jpg"
        ]
      }).catch(console.error);
      break;
    case "lactation":
      console.log("m lactation");
      message.channel.send({
        files: [
          "./files/lactationmap.jpg"
        ]
      }).catch(console.error);
      break;
  }
};
