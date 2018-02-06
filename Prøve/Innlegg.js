// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSq7yXnXc1xRvlWvSWLXHk_hP8JA2W_yg",
    authDomain: "webchat-8c826.firebaseapp.com",
    databaseURL: "https://webchat-8c826.firebaseio.com",
    projectId: "webchat-8c826",
    storageBucket: "webchat-8c826.appspot.com",
    messagingSenderId: "941258735132"
  };
  firebase.initializeApp(config);

      let database = firebase.database();

      let Medlem = database.ref("Medlem");
      Medlem.on("child_added", visMedlem);

      let Forum = database.ref("Forum");
      Forum.on("child_added", visForum);

      let Inlegg = database.ref("Innlegg");
     Inlegg.on("child_added", visInnlegg);

function visMedlem(snapshot) {
    let Medlem = snapshot.key;
    let divTarget = document.getElementById("Medlem");
    divTarget.innerHTML += 
    `<div>
    <br>Medlemnr ${Medlem}
    <br>Fornavn ${Medlem.Fornavn}
    <br>Etternavn ${Medlem.Etternavn}
    <br>Adresse ${Medlem.Adresse}
    <br>Epost ${Medlem.Epost}
   

  </div>`
}

function visForum(snapshot) {
    let Forum = snapshot.key;
    let divTarget = document.getElementById("Forum");
    divTarget.innerHTML += 
    `<div>
    <br>Forumnr ${Forum}
    <br>Beskrivelse ${Forum.Beskrivelse}
    
   
    
  </div>`
}

function visInnlegg(snapshot) {
    let Innlegg = snapshot.val();
    let divTarget = document.getElementById("Innlegg");
    divTarget.innerHTML += 
    `<div>
      <br>Forum ${Innlegg.Forumnr}
      <br>Medlem: ${Innlegg.Medlemnr}
      <br>Innlegg: ${Innlegg.Melding}
     
      
    </div>`
}