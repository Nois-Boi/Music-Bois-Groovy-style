const {MessageEmbed} = require("discord.js")
module.exports = {
 name : "guildCreate",
 async execute (client, guild)  { 

let embed = new MessageEmbed()

.setTitle(`Thanks for adding me in your  server <a:zero_two:882612535860289606>`)
 .setColor("343434")
 .setDescription(`My Prefix is a/help and play any music type a/p or If you have any questions or need help with  Music Bois [\`click here\`](https://discord.gg/ZqdGYv6KjB) to talk with our staff team or Owner `)

    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(embed).catch(err => {})


  const ID = "777158641345626123";
  //const sowner = `${guild.owner.user}`;
  const embed1 = new MessageEmbed()
    .setTitle("New Server Joined!")
    .setImage(`${guild.iconURL({ dynamic: true, size: 2048 })}`)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Members:`, `${guild.memberCount}`)
    //.addField(`Server Owner Tag:`, `${sowner.tag}`)
    //.addField(`ServerOwner ID:`, `${sowner.id}`)
    .setTimestamp()
    .setColor("343434")
    .setFooter(`My new Server Count - ${client.guilds.cache.size}`);

client.channels.cache.get(client.config.log).send(embed1)
}
}