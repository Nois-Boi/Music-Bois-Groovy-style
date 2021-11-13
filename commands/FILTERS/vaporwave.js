const discord  = require("discord.js")
const delay = require('delay');
const { MessageEmbed} = require("discord.js")

module.exports = {
  name:"vaporwave",
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
 
  run: async(client,message,args) => {
    
   const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription("<a:Dot:873462741757755442>  There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription("<a:Dot:873462741757755442>  Please connect to a voice channel")
    return message.channel.send(embed)
  }

  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("343434")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }
  const m1 = await message.channel.send("<a:dark:866726600028061706> Turning on **vaporwave**.")


	// Change bassboost value
	player.setVaporwave(!player.Vaporwave)
	 const bass = new MessageEmbed()
 .setTitle("<a:dark:866726600028061706> turned on : vaporwave")
            .setColor('#343434');

        await delay(5000);
        m1.edit('', bass);
  
  
  
  	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:Dot:873462741757755442> Turning off **vaporwave**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **vaporwave**')
				.setColor("343434");
			await delay(5000);
			return msg.edit('', embed);
    	}
         
  }
}