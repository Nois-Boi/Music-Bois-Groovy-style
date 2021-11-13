const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"soft",
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
      .setDescription(`Must join be in same voice  channel`)
    return message.channel.send(embed)
  }

if (!args[0]) {
			player.setEQ(...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.65 })));
			const msg = await message.channel.send(`<a:dark:866726600028061706> Turning on **soft**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned on **soft**')
				.setColor("343434");
			await delay(5000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
	player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
        const msg = await message.channel.send(`<a:Dot:873462741757755442>  Turning off **soft mode**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **soft mode**')
				.setColor("343434");
			await delay(5000);
			return msg.edit('', embed);
		}

	}
};