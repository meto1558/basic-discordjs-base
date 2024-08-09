const { Message } = require("discord.js");
const { getParamByIndex } = require("../../yardimcilar/parametreSecici");

module.exports = {
    name: "sil",
    /**@param {Message} message  */
    async execute(message) {
        const mesajSayisi = parseInt(getParamByIndex(message.content, 1));
        
        if (isNaN(mesajSayisi) || mesajSayisi < 1) {
            await message.reply(":x: Lütfen geçerli bir değer girin. (!sil 5)");
            return;
        }

        await message.delete();
        await message.channel.bulkDelete(mesajSayisi);
        await message.channel.send(`${mesajSayisi} mesaj silindi.`);
    }
}