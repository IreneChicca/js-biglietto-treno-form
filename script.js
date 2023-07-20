/*

- al click del bottone comparirà sulla pagina il prezzo da pagare 

*/


// - Attraverso un form raccolgo le informazioni dell'utente relative ai km da percorrere e la sua età anagrafica
//- Raccolgo queste informazioni attraverso l'id dei vari input e le inserisco all'interno di variabili


// - Imposto delle condizioni di sconto relative all'età dell'utente

/*
if (userAge < 18) {

    ticketPrice * 10

    console.log(ticketPrice)

}

else if (age > 65) {


}

*/

// creo bottone collegato ad evento

const sendBtn = document.getElementById("btn")


// individuo campi da valorizzare dopo il click del bottone 

const bglName = document.getElementById("bgl-name");
const bglAge = document.getElementById("bgl-age");
const bglKm = document.getElementById("bgl-km");
const bglPrice = document.getElementById("bgl-price");


// prova

const ticket = document.getElementById("ticket");




sendBtn.addEventListener('click', function () {



    const userName = document.getElementById("name").value
    bglName.innerHTML = userName;

    const userAge = parseInt(document.getElementById("age").value)
    bglAge.innerHTML = userAge;


    const userKm = parseFloat(document.getElementById("km").value)
    bglKm.innerHTML = userKm;


    let ticketPrice = (userKm * 0.21)



    if (userAge < 18) {

        ticketPrice = ticketPrice - ticketPrice * 0.20

    }

    else if (userAge > 65) {
        ticketPrice = ticketPrice - ticketPrice * 0.40

    }

    bglPrice.innerHTML = ticketPrice;


    ticket.className = " d-block"



})


