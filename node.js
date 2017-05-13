var cats = ['kitty', 'casper', 'bony'];
cats.forEach(

	function(item) {

	console.log('meow' + item);
}
);


var dogs = {

	count : 1,
	bark : function() {
		return 'guk';
	},
	dogCount : function() {
		return this.count;
	}
}


console.log(dogs.bark());
console.log(dogs.dogCount());




