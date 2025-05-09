
// switch (key) {
//     case value:
//         //code to execute
//         break;

//     case value2:
//         //code to exucute

//         break;

//     default: //si no existe en los cases, ira directamente a este apartado
//         //code to execute
//         break;
// }


let expression = "tomatess"

switch (expression) {
    case "tomates": 
        console.log("los tomates cuestan 20$ el kilo");
        break;

    case "manzanas":
        console.log("las manzanas cuestan $40 el kilo");
        break;
    default:
        console.log(`esta agotado el producto ${expression}`);
        break;
}