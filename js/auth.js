    // var config = {
    //   apiKey: "AIzaSyDR1D17Q6l3DMcs4M5CpiA-c7jWWaKw1-Y",
    //   authDomain: "gradebook-4e8b4.firebaseapp.com",
    //   databaseURL: "https://gradebook-4e8b4.firebaseio.com",
    //   projectId: "gradebook-4e8b4",
    //   storageBucket: "gradebook-4e8b4.appspot.com",
    //   messagingSenderId: "1000813412608"
    // };
    // firebase.initializeApp(config);

    function IngresoGoogle(){
      if(!firebase.auth().currentUser){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope ('https:www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(user);
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          if (errorCode=='auth/account-exists-with-different-credential'){
            alert ("Es el mismo usuario");
          }
        });
      }else{
        firebase.auth().signOut();
      }
    }

    document.getElementById('btn-google').addEventListener('click', IngresoGoogle, false);
