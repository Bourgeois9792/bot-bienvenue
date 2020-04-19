const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ('#')

bot.login("MkWAhnNBlh-xs_U0f1_FwK8BBZp_9nxZ");

bot.on("ready", async () =>{
        console.log(" ")
        console.log("Connécté en tant que : " + bot.user.tag)
        bot.user.setActivity("les membres du serveur.", {type: "WATCHING"})
})

bot.on('guildMemberAdd', memberadd =>{
        let embed = new Discord.RichEmbed()
        .setColor('#00dcff')
        .setDescription(":pleading_face:  Salut " + memberadd.user + " En raison d'un down du bot, merci d'envoyer un message privé à un admin connecté.")
        .setAuthor("🇯🇵 Bourgeois・レオ🇨🇦#9792")
    memberadd.guild.channels.get('682726891844796458').send(embed)
})
