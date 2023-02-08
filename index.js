const Discord = require('discord.js')
const client = new Discord.Client();

// meke prefix eka dapan
let prefix = '!'

client.once('ready', () => {
  console.log('Ready to run!');
  client.user.setActivity('!help'); //botge activity eka
});

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  
  //help
  if (command === 'help') {
    let embed = new Discord.MessageEmbed()
      .setColor('YELLOW')
      .setAuthor('Commands')
      .addField('Hi!', 'Help menu is here!')
      .setFooter(`Made by NEJAN`);

    message.channel.send(embed);
  }
});

//botge token eka "" athulata dapan
client.login("");