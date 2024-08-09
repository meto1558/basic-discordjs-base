const { Client, REST } = require("discord.js");
const fs = require("fs");
const path = require("path");

const PREFIX = "?"; // Bunu değiştirebilirsiniz

/**
 * @author meto1558
 * @param {Client} client 
 * */
function registerPrefixCommands(client) {
    const commandsPath = path.join(__dirname, "../komutlar/prefix");
    const commandFiles = fs.readdirSync(commandsPath).filter((files) => files.endsWith(".js"));

    for (const commandFile of commandFiles) {
        const commands = path.join(commandsPath, commandFile);
        const command = require(commands);
    
        client.on("messageCreate", async (message) => {
            if (isPrefixCommand(message.content, command.name, command.aliases)) {
                command.execute(message);
            }
        });
    }
}

/**@param {Client} client */
function registerSlashCommands(client) { // Later

}

/**
 * @param {string} content
 * @param {string} name
 * @param {string[]} aliases 
 */
function isPrefixCommand(content, name, aliases) {
    if (content.startsWith(PREFIX + name)) return true;

    for (const alias of aliases) {
        if (content.startsWith(PREFIX + alias)) return true;
    }

    return false;
}

module.exports = {
    registerPrefixCommands,
    PREFIX
}