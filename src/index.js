const Discord = require("discord.js");
const client = new Discord.Client();


//define las cargas
var cargas = [0,0,0,1,0,0,0,0]

//realiza el login 
client.on("ready", () => {
    console.log("Estoy listo!");
 });
 

 //si el cliente envia un mensaje de tipo !ruleta
 client.on("message", (message) => {
   if(message.content.startsWith("!ruleta")) {

    //obtiene un valor entre 0 y 7
    var disparo = Math.floor(Math.random() * 7);
    //obtiene la carga entre 0 y 7 
    var muerto = cargas[disparo];

    //si se selecciono el numero con la carga (cargador 3 se muere)
    if(muerto == 1){
        message.channel.send("El jugador **" + message.author.username +  "** ahora esta muerto! Busquen otra forma de hablarle xD"); 
        usuarioMuteado = message.member.setNickname("Espiritu de " + message.author.username);

        //kickea al usuario
        message.member.kick()
        .then(() => console.log(`Owned ${member.displayName}`))
        .catch(console.error);
    }else{
        message.channel.send("Te salvaste, sigues en el juego **" + message.author.username + "**");
      
    }
    
   }
 
 });
 
 client.login("SUPERTOKEN");


 /*
  async function muting(message) {
    await  message.member.setMute(true).then()
  }
  */