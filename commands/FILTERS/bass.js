const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"bass",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(` <a:loading:870289783396642886> Turning off **__Bass*__*.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **__Bass__**')
				.setColor("#343434");
			await delay(5000);
			return msg.edit('', embed);
    	}
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("#343434")
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
      .setDescription(`__Must join be in same voice  channel__`)
    return message.channel.send(embed)
  }

 const m1 = await message.channel.send(" <a:loading:870289783396642886> Turning on **__Bass__**.");
	// Change bassboost value
	player.setBassboost(!player.bassboost)
	
	 const bass = new MessageEmbed()
            .setTitle("<a:dark:866726600028061706> Turned on: __Bass__ ",)
            .setColor('#000001');

        await delay(5000);
        m1.edit('', bass);
       
  }
}