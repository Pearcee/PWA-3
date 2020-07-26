var firebaseConfig = {
    apiKey: "AIzaSyCb3oQqD_4WEZyNk1dmj2nSpmIsurcNMqo",
    authDomain: "food-ninja-32746.firebaseapp.com",
    databaseURL: "https://food-ninja-32746.firebaseio.com",
    projectId: "food-ninja-32746",
    storageBucket: "food-ninja-32746.appspot.com",
    messagingSenderId: "207774210375",
    appId: "1:207774210375:web:4f87a66acad79213"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();