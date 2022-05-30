function greetPirate(pirateName) {    // Объявление родительской функции
	var greeting = "Hello, ";
	function checkCaptain() {    	   // Объявление замыкания	
		if (pirateName != "Jack Sparrow")
			return greeting + pirateName;
		else
			return greeting + "CAPTAIN " + pirateName + "!";
	}
	return checkCaptain();
}


console.log(greetPirate("Mad Dog"));
console.log(greetPirate("Jack Sparrow"));