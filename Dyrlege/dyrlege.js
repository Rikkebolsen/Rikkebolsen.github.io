function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB-t4zZd1tMRL0ziNrzHuEpcJ04c3oKTkY",
        authDomain: "dyrlegen-29728.firebaseapp.com",
        databaseURL: "https://dyrlegen-29728.firebaseio.com",
        projectId: "dyrlegen-29728",
        storageBucket: "dyrlegen-29728.appspot.com",
        messagingSenderId: "700931357863"
    };

    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             
             <li>${info.fornavn} ${info.etternavn}
             <li> Epost :${info.epost}
             <li> Mobil :${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);


    let divListe2 = document.getElementById("liste");
    let ref2 = firebase.database().ref("dyr");
    
    function visDyr(snapshot) {
        let dnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
              <div>
                <h4>dnr ${dnr}</h4>
                <ul>
                 
                 <li> Art :${info.art} 
                 <li> Kjønn :${info.kjønn}
                 <li> Vekt :${info.vekt}
                 <li> Fdato :${info.fdato}
                 <li> kundenr :${info.kundenr}
                </ul>
              </div>
            `;
    }
    ref2.on("child_added", visDyr);

    
}


