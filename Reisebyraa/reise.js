// Initialize Firebase
// @ts-check

function setup() {
    var config = {
        apiKey: "AIzaSyBQFnWnb_TNdmj0NHFgVNnfIjre7bGu82k",
        authDomain: "reisebyraa.firebaseapp.com",
        databaseURL: "https://reisebyraa.firebaseio.com",
        projectId: "reisebyraa",
        storageBucket: "reisebyraa.appspot.com",
        messagingSenderId: "42868681378"
    };
    firebase.initializeApp(config);
    let database = firebase.database();

    let inpFornavn = document.getElementById("Fornavn");
    let inpEtternavn = document.getElementById("Etternavn");
    let inpBrukernavn = document.getElementById("Brukernavn");
    let inpPassord = document.getElementById("Passord");

    let btnlagrebruker = document.getElementById("lagrebruker");
    btnlagrebruker.addEventListener("click", lagreBrukere);



    function lagreBrukere(e) {
        let Fornavn = inpFornavn.value;
        let Etternavn = inpEtternavn.value;
        let Brukernavn = inpBrukernavn.value;
        let Passord = inpPassord.value;
        let ref = database.ref("brukere/" + Brukernavn);
        ref.set({ Fornavn,Etternavn,Passord });
    }



}