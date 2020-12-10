const Discord = require("discord.js")
const client = new Discord.Client({ws:{intents:["DIRECT_MESSAGES", "GUILDS"]}})
const config = require("./config.json")

client.on("ready", () => console.log("Ready"))
client.on("message", (message) => {
    if(message.channel.type == "dm" && message.author.bot == false){
        let channel = message.client.channels.cache.get(config.CHANNEL)
        channel.send(`\`\`\`\n${message.content}\n\`\`\`\nMessage by <@${message.author.id}>`)
        .then(msg => {
            msg.pin()
            .then(() => {
                channel.messages.fetchPinned(true).then(messages => {
                    message.channel.send(`📌 Pinned your message in <#${config.CHANNEL}> (${config.CHANNEL}). This was the ${messages.size} pinned message.`)  
                })
            })
        })
    }
})

client.on("message", msg => console.log(msg.content + "   " + msg.author.tag))

client.login(config.BOT_TOKEN)