/*
	-on cheche tous les titres dans un container 
	- on prépare l'element qui vas acceuillir notre sommaire
	pour chaque titre 
		on creer un <li><a> Mon titre</a></li>
		on le place dans le <ul> du parent 
			-SI le parent n'as pas de ul on le creer 
		on greffe l'evenement pour le scroll

 */
 

/*

 var container = document.querySelector('.container');
 var titles = container.querySelectorAll('h2, h3, h4, h5');

var sommaire = document.querySelector('#sommaire');
var uls =[]
uls[0] = sommaire


for(var i = 0 ; i < titles.length;i++){
	var title = titles[i]
	var  lvl = parseInt(title.tagName.replace('H', ''))-1
	//console.log(title);
	var li = document.createElement('li');
	var a = document.createElement('a')
	a.setAttribute('href', '#')
	a.textContent = title.textContent
	li.appendChild(a)
	if(!uls[lvl-1]){
		var ul = document.createElement('ul')
		uls[lvl - 1] = ul
		uls[lvl-2].lastChild.appendChild(ul)
	}
	uls[lvl]=null
	uls[lvl - 1].appendChild(li)


	a.addEventListener('click', function(e){
		e.preventDefault()
		console.log(title.offsetTop);
	})


}
*/



function Sommaire(container){
	this.container = container ;
	this.uls = [document.createElement('ul')];
	this.buildStructure();

};

Sommaire.prototype.buildStructure = function() {
	// body...
	
	var titles = this.container.querySelectorAll('h2, h3, h4, h5');
	for(var i = 0 ; i < titles.length ;i++){
	var title = titles[i];
	var  lvl = parseInt(title.tagName.replace('H', ''))-1;
	//console.log(title);
	var li = document.createElement('li');
	var a = document.createElement('a');
	a.setAttribute('href', '#');
	a.textContent = title.textContent;
	li.appendChild(a);
	if(!this.uls[lvl-1]){
		var ul = document.createElement('ul');
		this.uls[lvl - 1] = ul;
		this.uls[lvl-2].lastChild.appendChild(ul);;
	}
	this.uls[lvl]=null;
	this.uls[lvl - 1].appendChild(li);
	this.bindScroll(a,title);
	}

};

Sommaire.prototype.bindScroll = function(a,title){
	/* body... */
	a.addEventListener('clik', function(e){
		e.preventDefault();
		console.log(title.offsetTop);
		document.body.scrollTop = title.offsetTop;
	});


};

Sommaire.prototype.AppendTo = function(element){
	/* body... */
	element.appendChild(this.uls[0]);
};

var s = new Sommaire(document.querySelector('.container'));
s.AppendTo(document.querySelector('#sommaire'));