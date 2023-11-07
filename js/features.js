function initWords(lang) {
	//criar if nao rodas varias vezes por conta do main
	const alphPort = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	const alphTere = ['Aá','Mb','Nd','E','Ng','H','I','Nj','K','L','M','N','O','P','R','S','T','U','V','X','Y','Nz']

	const divP = document.getElementById('palavras')

	switch(lang){
		case 'port':
			divP.innerHTML = ""
			divP.innerHTML = "<div id=prod class=flex><h1>Em produção</h1><br><h2>🤫</h2></div>"
			break;
		case 'tere':
			divP.innerHTML = ""
			for (var i = 0; i < alphTere.length; i++) {
				divP.innerHTML += "<div class='word-letter' id="+alphTere[i]+" data-aberto='false'><h4>"+alphTere[i]+"</h4></div>"
			}
			break;
	}

}

function initLang() {
	//idioma animação
		const elementVal = document.getElementById('idioma');
		let item_1 = document.getElementById('item-1')
		let item_2 = document.getElementById('item-2')

		switch(elementVal.value){
			case "0":
				elementVal.dataset.ativo = 'terena'
				item_1.dataset.ativo = 'true'
				item_2.dataset.ativo = 'false'
				item_1.style.right = '45%'
				item_2.style.right = '0%'
				initWords('tere')
				break;
			case "1":
				elementVal.dataset.ativo = 'terena'
				item_1.dataset.ativo = 'false'
				item_2.dataset.ativo = 'true'
				item_1.style.right = '90%'
				item_2.style.right = '45%'
				initWords('port')
				break;
		}
}

//---- muda blur imgs yey
document.getElementById('qrt-pag').addEventListener('click', e=>{
	let elemIsa = document.getElementById('isakkj')
	let elemEu = document.getElementById('euk')
	let elemClick = e.composedPath()

	switch(elemClick[0].id){
	case "isakkj":
		elemIsa.dataset.ativo = 'true';
		elemIsa.style.cursor = 'default';
		elemEu.dataset.ativo = 'false';
		elemEu.style.cursor = 'pointer';
		document.getElementById('euText').style.alignItems = 'flex-start';
		document.getElementById('euText').style.textAlign = 'left';
		
		break;
	case "euk":
		elemIsa.dataset.ativo = 'false'
		elemIsa.style.cursor = 'pointer';
		elemEu.dataset.ativo = 'true'
		elemEu.style.cursor = 'default';
		document.getElementById('isaText').style.alignItems = 'flex-end';
		document.getElementById('isaText').style.textAlign = 'right';
		break;
	}


})

//---- inicia as letras na tela
document.getElementById('idioma').addEventListener("input", initLang)

//---- acessa o dicionario atráves da home, ou o contrario
document.getElementById('acess-dicio').addEventListener("click", function(){
	let item_1 = document.getElementById('cont-home')
	let item_2 = document.getElementById('cont-dicio')
	item_1.dataset.ativo = 'false';
	item_2.dataset.ativo = 'true';	
	initLang();
});

document.getElementById('vemou').addEventListener("click", function(){
	let item_1 = document.getElementById('cont-home')
	let item_2 = document.getElementById('cont-dicio')
	item_1.dataset.ativo = 'true';
	item_2.dataset.ativo = 'false';
});

