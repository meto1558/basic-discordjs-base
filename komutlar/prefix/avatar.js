const { Message, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["pp"],
    /** @param {Message} message */
    async execute(message) {
        const member = message.mentions.members.first() || message.member; // Etiketlenen kullanıcı yoksa komutu yazan kişiyi döndür
        const avatar = member.displayAvatarURL({size: 1024});

        const embed = new EmbedBuilder() // Gömülü mesaj (Embed) hakkında daha fazla bilgiyi ornekler/embed_ornekleri.js'e bulabilirsiniz.
            .setURL(avatar)
            .setImage(avatar)
            .setTitle("Avatar");

        await message.channel.send({embeds: [embed]});
    }
};