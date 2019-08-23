console.log("Factorielle d'un nombre donné:")
function fact(inputNum1){
	if (inputNum1==0)
	return 1;
else
	return value=inputNum1 * fact(inputNum1-1);
};
inputNum1=prompt("Nombre:")

console.log("Le resultat est:" + fact(inputNum1));

