(function () {

	const firebaseConfig = {
	  apiKey: "AIzaSyDeKHP3lZwqW_8ytEhRwa5rKByHYmLp1Z4",
	  authDomain: "vomuti-2022.firebaseapp.com",
	  databaseURL: "https://vomuti-2022-default-rtdb.firebaseio.com",
	  projectId: "vomuti-2022",
	  storageBucket: "vomuti-2022.appspot.com",
	  messagingSenderId: "488012243683",
	  appId: "1:488012243683:web:38cf3419b4cbd2163a5bd6",
	  measurementId: "G-1WKCCBHNV6",
	  databaseURL: "https://vomuti-2022-default-rtdb.firebaseio.com/"
	};

	// const app = initializeApp(firebaseConfig)
	firebase.initializeApp(firebaseConfig);
	const database = firebase.database()

})()