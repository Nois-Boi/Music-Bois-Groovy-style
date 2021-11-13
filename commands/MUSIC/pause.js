const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "pause",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run:(client, message) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription("<:Cross:885767422727061504> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

 
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription(` Must join be in same voice  channel`)
    return message.channel.send(embed)
  }
  if (player.paused) {
    player.pause(false)
    return embed("<a:tik:875394812902256660> RESUME",message.channel)
    
  } else if (!player.paused) {
    player.pause(true)
    return message.channel.send({
      embed: {
        color: "343434",
        description: "<a:tik:875394812902256660> PAUSED"
      }
    })
  }
}

}