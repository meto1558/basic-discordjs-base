const { Message, EmbedBuilder, DiscordAPIError } = require("discord.js");
const { getContentByIndex } = require("../../yardimcilar/parametreSecici");

module.exports = {
    name: "ban",
    /**@param {Message} message */
    async execute(message) {
        try {
            if (!message.member.permissions.has("BanMembers")) {
                await message.reply(":x: Bu komutu kullanabilmek için **Üyeleri Ysaklı** iznin olmalı.");
                return;
            }
    
            const member = message.mentions.members.first();

            if (!member) {
                await message.reply(":x: Lütfen bir kullanıcı belirt. (!ban @kullanıcı)");
                return;
            }

            if (member.roles.highest >= message.member.roles.highest) {
                await message.reply(":x: Bu kullanıcının rolü senden daha yüksek/eşit, onu yasaklayamazsın.");
                return;
            }
    
            const sebep = getContentByIndex(message.content, 2) || "Belirtilmedi";
            
            const embed = new EmbedBuilder()
                .setTitle("Ban Uygulandı")
                .setDescription(`${member} kullanıcısı sunucudan yasaklandı.`)
                .addFields(
                    {name: "Sebep", value: sebep},
                    {name: "Uygulayan Yetkili", value: `${message.member}`, inline: true}
                );
    
            await member.ban({reason: sebep});
            await message.channel.send({embeds: [embed]});
        } catch (err) {
            if (err instanceof DiscordAPIError && err.code == 50013) {
                await message.reply(":x: Bu kullanıcının rolü/yetkisi benden daha yüksek, rolümü/izinlerimi yükseltip tekrar dene.");
            }
        }
    } 
}