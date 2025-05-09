const numberSecret = Math.floor(Math.random() * 10 + 1)

// const gameNumber = parseInt(prompt("Adivina el numero secreto entre el 1 al 10"))

const gameNumber = parseInt(prompt("Adivina 1 al 10"))

console.log(`este es el numero con el que juegas ${gameNumber}`)

if (gameNumber === numberSecret) {
    console.log(`YOU WIN`);
}else if(gameNumber < numberSecret){
    console.log("ice, try again");
}else {
    console.log("number to hight, try again");
}