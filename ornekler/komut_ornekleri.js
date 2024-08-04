/**
 * Burada yazılanlar sadece örnektir, bu dosyayı çalıştırmayı denemeyin.
 * Burada yazılanları app.js'de uygulayabilirsiniz.
 * Message sınıfının özelliklerini Discord.js v14 dökümanlarında bulabilirsiniz: https://discord.js.org/docs/packages/discord.js/14.15.3/Message:Class
 */

const { Client, GatewayIntentBits, Message } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds
    ]
});

/**
 * Avatar komutu
 * @param {Message} message 
 */
async function avatarCommand(message) {
    
}