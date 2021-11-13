const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("343434")
 .setAuthor(`${client.user.username} Information`,client.user.displayAvatarURL())
 
    
.addField(`
**__DEVELOPERS__**`,
`\`Ohi#4883\` `)

.addField(`**__PLATFORM__**`,
`\`${process.platform}\``)

.addField(`**__SERVERS__**`,
`\`${client.guilds.cache.size}\` `)

.addField(`**__PING__**`,
`\`${client.ws.ping}ms\` `)

.addField(`**__GUILD ID__**`,
`\`${message.guild.id}\``)


.setDescription(`[\`Support us\`](https://discord.gg/ZqdGYv6KjB) [\`Invite me\`](https://discord.com/api/oauth2/authorize?client_id=864516190448648212&permissions=536375328577&redirect_uri=https%3A%2F%2Fnois-boi-lite.ohi1.repl.co%2Fcallback&scope=bot%20applications.commands)`)


message.channel.send(embed)
}}