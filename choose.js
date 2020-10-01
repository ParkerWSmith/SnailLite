const Discord = require ('discord.js');
exports.run = async (client, message, args) => {
  let arg = args.join("")
  let ar = args.split(',')
  let random = Math.floor(Math.random() * args.length);
  let answer = args[answer]
  message.channel.send(answer)
}

exports.help = {
name: "choose"
}
