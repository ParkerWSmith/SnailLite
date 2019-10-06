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
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  if (cmd === `${prefix}stats`)
  {
    var rnd0 = getRandomInt(3, 18);
    var rnd1 = getRandomInt(3, 18);
    var rnd2 = getRandomInt(3, 18);
    var rnd3 = getRandomInt(3, 18);
    var rnd4 = getRandomInt(3, 18);
    var rnd5 = getRandomInt(3, 18);
    return message.channel.send("<@" + message.author.id + ">, here are your stats for the day. \nStrength: " + rnd0 + "\nDexterity: " + rnd1 + "\nConstitution: " + rnd2 + "\nIntelligence: " + rnd3 + "\nWisdom: " + rnd4 + "\nCharisma: " + rnd5);
  }

  if (cmd === `${prefix}roll`)
  {
    let text = args.join(" ");
    var imageNumber = getRandomInt(1,20);
    message.channel.send ({files: ["./roll/dice" + imageNumber + ".png"]})
  }

  if (cmd === `${prefix}sb`)
    var fs = require('fs');
    var array = fs.readFileSync('./extra/sbquote.txt').toString().split("\n");
    for(i in array)
  {
    return message.channel.send(array[Math.floor(Math.random()*array.length)]);
  }


});

bot.login(botconfig.token);
