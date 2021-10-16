


let numeroAlunos = 5;
let listaAlunos = ["Pablo", "Jessica", "Davi", "Ana", "Derek", "Anamor"];
let cont = 0;

// while (cont < listaAlunos.length) {
//     if (cont == 0) {
//         console.log(cont + " - ZERO"); //concatenacao
//     }
//     else if (cont % 2 == 1) {

//         console.log(cont + " - IMPAR"); //interpolacao
//     }
//     else {
//         console.log(cont + " - PAR");
//     }
//     cont++;


// }

for (let cont = 0; cont < numeroAlunos; cont++) {
    //console.log(cont)

    if (cont == 0) {
        console.log(cont + " - ZERO - " + listaAlunos[cont]); //concatenacao
    }
    else if (cont % 2 == 1) {

        console.log(cont + " - IMPAR - " + listaAlunos[cont]); //interpolacao
    }
    else {
        console.log(cont + " - PAR - " + listaAlunos[cont]);
    }
}




