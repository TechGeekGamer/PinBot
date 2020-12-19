const Discord = require("discord.js")
const client = new Discord.Client({ws:{intents:["DIRECT_MESSAGES", "GUILDS"]}})
const config = require("./config.json")
let channels = require("./channels.json")
const fs = require("fs")

if(!fs.existsSync("./channels.json"))
    fs.writeFileSync("./channels.json", JSON.stringify({}))

client.on("ready", () => console.log("Ready"))
client.on("message", (message) => {
    if(message.channel.type == "dm" && message.author.bot == false){
        if(!channels[message.author.id]){
            message.client.guilds.cache.get("786354821207949352").channels.create(message.author.id, {
                topic:`This is ${message.author.tag}'s (${message.author.id}) channel.`,
                type:"text",
                parent:"786354821207949353",
            }).then(channel => {
                channels[message.author.id] = channel.id
                fs.writeFileSync("./channels.json", JSON.stringify(channels))
                channel.send(`\`\`\`\n${message.content}\n\`\`\`\nMessage by <@${message.author.id}>`)
                .then(msg => {
                    message.channel.send(`📤 Sent your message in <#${msg.channel.id}> (${msg.channel.id}). `)  
                })
            })
        }else{
            let channel = client.channels.cache.get(channels[message.author.id])
            channel.send(`\`\`\`\n${message.content}\n\`\`\`\nMessage by <@${message.author.id}>`)
            .then(msg => {
                message.channel.send(`📤 Sent your message in <#${msg.channel.id}> (${msg.channel.id}). `)  
            })
        }
    }
})

client.login(config.BOT_TOKEN)