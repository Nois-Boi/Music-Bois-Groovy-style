const { MessageEmbed } = require('discord.js')
const { porgressBar } = require("music-progress-bar");

module.exports = {
  name:"nowplaying",
  aliases: ["np"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run: (client, message) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription("<a:playing:863772450558967808>  There is nothing playing")
    return message.channel.send(embed)
  }

  const { title, author, duration, uri } = player.queue.current

  
  let embed = new MessageEmbed()
    .setColor("343434")
    .setAuthor(author, message.author.avatarURL({ dynamic: true }))
    .setTitle(title)
    .setURL(uri)
   return message.channel.send(embed)
}}