const { Client, GatewayIntentBits } = require("discord.js");
const { registerEvents } = require("./handlers/event_handler");
const { registerPrefixCommands } = require("./handlers/command_handler");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds
    ]
});

try {
    registerEvents(client);
    console.log("Olaylar yüklendi.");
    registerPrefixCommands(client);
    console.log("Prefix komutları yüklendi.");
} catch (error) {
    throw new Error(error);
}


client.login(process.env.TOKEN); // TOKEN değerini .env dosyasında kendi botunuzun tokeni ile değişmeyi unutmayın.