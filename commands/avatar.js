const Discord = require("discord.js");

exports.run = (client, message, args) => {
    console.log("avatar");
    try {
        const embed = {
            color: 0x0099ff,
            image: {
                url: message.mentions.users.first().avatarURL,
            },
            timestamp: new Date(),
        };
        message.channel.send({embed}).catch(console.error);
    }
    catch (e){
        client.channels.get("468170551135961108").send('ERROR WITH avatar: ' + e);
        message.channel.send("Make sure to use the correct inputs.").catch(console.error);
    }
};
