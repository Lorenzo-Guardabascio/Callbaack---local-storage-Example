/*
// Funzione per simulare una richiesta al server (in modo asincrono)
function richiediDatiDalServer(callbackpippo) {
    setTimeout(function() {
      const dati = { nome: "Mario", cognome: "Rossi" };
      // Dopo un ritardo simulato, esegui il callback con i dati ottenuti
      gestisciDati(dati);
    }, 2); // Simula un ritardo di 2 secondi
  }
  
  // Funzione di callback per gestire i dati ottenuti dal server
  function gestisciDati(dati) {
    console.log("Dati ottenuti:", dati);
    console.log("Nome completo:", dati.nome + " " + dati.cognome);
  }
  
  // Chiamata alla funzione per richiedere dati al server, passando la funzione di gestione dei dati come callback
  richiediDatiDalServer(gestisciDati);

console.log("Richiesta inviata al server. In attesa di risposta...");

function datiIngresso(datiAttesi){
    let letA = 'Mario';
    let letB = 'Rossi';

    consoleLogOutput(letA, letB);
    datiAttesi(letA, letB);
}


function consoleLogOutput(letA, letB){
    console.log( letA);
    console.log( letB);
}

datiIngresso(consoleLogOutput);
*/

function saveId(event){

    let buttonId = event.target.id;
    localStorage.setItem( 
        buttonId , buttonId
     );
     console.log(localStorage.getItem('idPulsante2'))
}
