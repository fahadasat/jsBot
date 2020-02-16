module.exports = (client, guildMember) => {
  console.log(`New User "${guildMember.user.username}" has joined "${guildMember.guild.name}"` );
  guildMember.guild.channels.find(c => c.name === "welcome-to-the-chat").send(`Welcome ${guildMember.user}!`);
  guildMember.guild.channels.find(c => c.name === "welcome-to-the-chat").send(`Please follow the format and answer the following:
    Major
    Class standing (by units)
    Commute or Dorm \n`
    +`to get access to the rest of the channels.`);

  guildMember.addRole(guildMember.guild.roles.find(role => role.name === "AnswerTheBot")).catch(console.error);
  //client.channels.get("496834947894476810").send("Welcome" + user)
  //.then(console.log(client.user.username))
//  .catch(console.error);
};
