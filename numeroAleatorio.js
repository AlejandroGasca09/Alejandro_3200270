let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("Adivina el numero de 1 a 10"));
let vidas = 3;

while(numeroMaquina !== numeroUsuario && vidas > 1){
    vidas --;
    numeroUsuario = parseInt(prompt("Vuelve a intentar" + vidas));
}

if(numeroMaquina === numeroUsuario){
    console.log("Ganaste");
}else{
    console.log("Esta muerto");
    console.log("el numero secreto es : " + numeroMaquina)
}