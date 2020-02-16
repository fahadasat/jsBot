module.exports = (client) => {
// Set the client user's presence
  client.user.setPresence({ game: { name: "with discord.js documentation" }, status: "online" })
    .then(console.log(client.user.username))
    .catch(console.error);
};
