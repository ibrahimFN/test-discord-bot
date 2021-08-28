const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "#";

Client.login("")

Client.on("ready"), () => {
console.log('bot is ${Client.user.tag} online');
   Client.user.setActivity('#help', { type:"STREAMING" });
});
