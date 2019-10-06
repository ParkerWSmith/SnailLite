const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log('${bot.user.username} is online!')
  bot.user.setActivity("Being Built")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  if (cmd === `${prefix}test`){
    return message.channel.send("I am working");
  }

  if (cmd === `${prefix}stats`)
  function getRndInteger(mim, max){
    return message.channel.send(Context.Message.Author.Mention + ", here are your stats for the day. \nStrength: " + getRndInteger(3,18));
  }
});

bot.login(botconfig.token);
