const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



console.log("*****le livre avec l'ID: 873495*********")
books.forEach(b =>{
let z=Number(b.id)
if (z===873495){
console.log(b)
}
});



for(let i=0; i<books.lenght; i++){
	console.log("*****Suppression de l'ID: 873495*********")
	if (books.id[i]===133712){
	books.splice(i,1);
	break;
}
}
v=books.lenght;
console.log(v);

books.forEach(b => {
	e= Number(b.rented)
	console.log("Les livres empruntés plus d'une fois:")
	if (e>=1){
		console.log(b)
	}
	else{console.log("Les jamais pu empruntés:")}
})

/*
var maxRented=0;
//var tabRanted;
books.forEach(b=>{
	if (maxRented<b.rented){
	  maxRented=b.rented;
	  //tabRanted=b
	console.log(b)

}	
else{
	maxRented=maxRented
}
});
*/
console.log("Le plus empruntés:")

var max=0;

for (var i = 0; i <= books.length - 1; i++) {
	if (max<books[i].rented){
	 var max = books[i].rented;
	  tabRanted=books[i]

}	
else{
	max=max
}
	}
	console.log(tabRanted)
//console.log(tabRanted)

//console.log(Math.max(5,4,5,789,7,5,7,5,2,0,1,3,4,6,5,7,4,1,2,8,9,62,2,41,1000,1,2,3,4,5,4,6,8,7,9,789,74,5))
	
console.log("Le moins empruntés:")
var min=0;
for(var i=0; i<=books.length-1; i++){
	if (min>books[i].rented){
		var min = books[i].rented;
		var tab=books[i];
	}
	else{
		min=min
	}
}
console.log(tab)