const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "clear",
  aliases: ["cl"],
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
 const { channel } = message.member.voice

if (channel.id !== player.voiceChannel) {
      let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription(" Must be in same voice channel"
        
        
        )
   return message.channel.send(embed)
 }
 
 
 player.queue.length = [];
return embed(`<a:tik:875394812902256660>  Cleared current queue`,message.channel)
 
 
}}