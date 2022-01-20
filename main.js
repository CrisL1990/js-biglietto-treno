//Aquisisce dall'utente i km da percorrere e l'età
let km = parseInt(prompt("Digitare Km da percorrere"));
let eta = parseInt(prompt("Digitare età del passeggero"));

//Imposta prezzo per ogni km percorso
const priceForKm = 0.21;

//Imposta valore degli sconti
const discount20 = 20;
const discount40 = 40;

//Prezzo totale del ticket
let ticketPrice = km * priceForKm;

//Contengono il totale dello sconto applicato e il totale al netto di eventuali sconti
let totalDiscount = 0;
let total = 0;

//Accetta solo valori numerici maggiori di 0
if((!isNaN(km) && !isNaN(eta)) && (km && eta > 0)){

    //Calcola eventuali sconti in base all'età
    if (eta <= 18){
        totalDiscount = ticketPrice * discount20 / 100;
        total = ticketPrice - totalDiscount;
        document.getElementById("discount").innerHTML="Hai diritto ad uno sconto minorenni pari a: " + totalDiscount.toFixed(2)  + " €";
    }

    else if (eta >= 65){
        totalDiscount = ticketPrice * discount40 / 100;
        total = ticketPrice - totalDiscount;
        document.getElementById("discount").innerHTML="Hai diritto ad uno sconto over 65 pari a: " + totalDiscount.toFixed(2) + " €";
    }

    else{
        total = ticketPrice;
    }

    //Mostra prezzo totale del biglietto
    document.getElementById("total").innerHTML="Totale del biglietto al netto di enventuali sconti: " + total.toFixed(2) + " €";
}

//Messaggio di errore in caso Km ed età non siano 2 numeri maggiori a 0
else{
    document.getElementById("discount").innerHTML="Prego inserire un valore valido";
}




