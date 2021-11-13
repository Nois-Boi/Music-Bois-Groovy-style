const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("000000")
 .setAuthor(" Help Commands ",client.user.displayAvatarURL())
 
.setDescription(`

<a:dark:866726600028061706> **__Music Commands__**
\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,seek,stop,volume\`

<:ghostttt:881782358330712154> **__Filters Commands__**
\`24/7,radio,bass,bassboost,deepbass,earrape,nightcore,pitch,pop,reset,soft,speed,television,vaporwave\`

<:infoooo:881784775738789899> **__Info Commands__**
\`about,prefix,ping,lava,uptime,invite,shard\`

[\`Support us\`](https://discord.gg/CQUSnvudyk) [\`Invite me\`](https://discord.com/api/oauth2/authorize?client_id=864516190448648212&permissions=536375328577&redirect_uri=https%3A%2F%2Fnois-boi-lite.ohi1.repl.co%2Fcallback&scope=bot%20applications.commands
)`)
 
.setFooter("MADE BY Ohi#4883", client.user.displayAvatarURL())
message.channel.send(embed)
  }
}