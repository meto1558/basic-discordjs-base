const { Events, Client } = require("discord.js");

module.exports = {
    name: Events.ClientReady, // "ready" olayı
    once: true, // "client.once()" olarak çalışması için true yapıyoruz
    /**@param {Client} client */
    execute: function(client) { // property (özellik) olarak çağırmak için böyle yapıyoruz
        client.user.setStatus("idle"); // İsterseniz değiştirebilirsiniz, daha fazlası için ornekler/ready_ornekleri.js
        console.log(`${client.user.displayName} aktif!`);
    }
}