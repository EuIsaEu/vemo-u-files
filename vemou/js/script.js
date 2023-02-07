const vemou_database = {};

(function () {

	function new_word(word, translate, user, etnia, letter) {

		const database = firebase.database();

		const dbRef = database.ref(etnia+'/'+letter+'/'+word);
		dbRef.once('value',(snapshot) =>{
		alert(word)
		const data = snapshot.val() //snapshot do objeto é salvo em data
			if (snapshot.exists()) { //verifica se a snapshot existe no banco
				if (word == data.word) {
					alert("A palavra já existe neste dicionario")
				}
			}else{
			const word_data = {
				data: firebase.database.ServerValue.TIMESTAMP,
				user: user,
				word: word,
				translate: translate,
				lingua: etnia,
				letter: letter,
				};
			database.ref(etnia+'/'+letter+'/'+word).set(word_data)
			}
		})
	}

	function remove_word(word,etnia,letter) {

		const database = firebase.database();

		const dbRef = database.ref(etnia+'/'+letter+'/'+word);
		dbRef.once('value',(snapshot) =>{
			const data = snapshot.val() //snapshot do objeto é salvo em data
			if (snapshot.exists()) { //verifica se a snapshot existe no banco
				if(confirm("Deseja apagar a palavra "+"'"+data.word+"'"+"?")){
					dbRef.remove()
				}
			}else{
				console.log("palavra não existe")
			}
		})
	}

	function acess_word(word,etnia,letter) {

		const database = firebase.database();

		const dbRef = database.ref(etnia+'/'+letter+'/'+word)
		dbRef.once('value',(snapshot) =>{
			if (snapshot.exists()) {
				const data = snapshot.val()//snapshot do objeto é salvo em data
				console.log(data.word)//acessa o usuario no objeto em data
			}else{
				console.log("palavra não existe")
			}
		})
	}

	function update_word(word, user, etnia, letter) {

		const database = firebase.database();

		const dbRef = database.ref(etnia+'/'+letter+'/'+word)
		dbRef.once('value',(snapshot) =>{
			if (snapshot.exists()) {
				const word_data = {
					data: firebase.database.ServerValue.TIMESTAMP,
					user: user,
					word: word,
					lingua: etnia,
				}
				database.ref(etnia+'/'+letter+'/'+word).set(word_data)
			}else{
				console.log("palavra não existe")
			}
		})
	}

	function queryWords(etnia,letter) {
		const divLetter = document.getElementById(letter)

		const dbRef = firebase.database().ref(etnia+'/'+letter)
		dbRef.once('value', (snapshot)=>{
			divLetter.innerHTML += "<div id='word-item'></div>"
			const divWords = document.getElementById('word-item')
			snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key
				let val = childSnapshot.val()
				console.log(childSnapshot.val())
				divWords.innerHTML += "<p id='word-orig'>"+key+"</p>";
				divWords.innerHTML += "<p id='word-trad'>"+val.translate+"</p>"
			})
		})
	}

	//--- identifica qual letra sera clicada e adicionada
	document.getElementById('palavras').addEventListener('click', e =>{
		const elementVal = document.getElementById('idioma');
		const elem = e.composedPath()

		if (elem[0].id != 'palavras') {
			queryWords(elementVal.dataset.ativo,elem[0].id)
		}
	})

	vemou_database.new = new_word;
	vemou_database.remove = remove_word;
	vemou_database.update = update_word;
	vemou_database.acess = acess_word;
})()

