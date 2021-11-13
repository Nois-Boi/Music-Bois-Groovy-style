const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("343434")
 .setAuthor("INVITE ME",client.user.displayAvatarURL())
.setDescription(`

[\`Invite Music Boi\`](https://discord.com/oauth2/authorize?client_id=857247217886298143&permissions=2205280576&scope=bot%20identify%20guilds%20applications.commands&redirect_url=https://discord-music-bot2222.ohi1.repl.co/api/callback&response_type=code)

[\`Also invite Nois boi\`](https://discord.com/api/oauth2/authorize?client_id=864516190448648212&permissions=536375328577&redirect_uri=https%3A%2F%2Fnois-boi-lite.ohi1.repl.co%2Fcallback&scope=bot%20applications.commands)

[\`Suport Server\`](https://discord.gg/CQUSnvudyk)
`)
message.channel.send(embed)


}}