const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("343434")
  .setDescription("<a:dark:866726600028061706>  " +""+ text);

    await channel.send(embed)
}