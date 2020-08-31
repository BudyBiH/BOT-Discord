const discord = require('discord.js')
const client = new discord.Client()

client.on('ready',()=>{
    client.user.setActivity("Subscribe na Emko kanal https://www.youtube.com/channel/UCGu6K2MvaB2seuoMtu9AsZA",{
        type:"WATCHING",       
    })

    console.log(`Bot is je spreman`)
})

client.on('message',msg=>{
    if(msg.content = ''){
        msg.channel.send(``)
    }
});

client.login(process.env.BOT_TOKEN);
