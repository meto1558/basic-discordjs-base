const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");

/** 
 * @author meto1558
 * @param {Client} client 
 * */
function registerEvents(client) {
    try {
        const eventsPath = path.join(__dirname, "../olaylar"); // olaylar dizinini buluyoruz
        const eventFiles = fs.readdirSync(eventsPath).filter((files) => files.endsWith(".js")); // dosya uzantısı sadece JavaScript olanları alıyoruz

        for (const eventFile of eventFiles) {
            const events = path.join(eventsPath, eventFile); // .js dosyalarını buluyoruz
            const event = require(events); // dosyaları require ile içe aktarıyoruz

            if (event.once) {
                client.once(event.name, event.execute); // once durumu açıksa "client.once" yi çağırıyoruz
            } else {
                client.on(event.name, event.execute);
            }
        }
    } catch (error) {
        console.error("Hata: " + error);
    }

}

module.exports = {
    registerEvents
}