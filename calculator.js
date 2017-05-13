var calculator = {

	tambah : function(a,b) {

		return a + b;
	},

	kurang : function(a,b) {
		return a - b;
	},

	kali : function(a,b) {
		return a * b;
	},

	bagi : function(a,b) {
		return a/b;
	},

	samadengan : function(a,b) {

		if(a > b) {

			return a + ' lebih besar dari ' + b;

		}
		if(a < b ) {

			return a + ' lebih kecil dari ' + b;
		} else {

			return a + ' samadengan '+ b;
		}
	}

}

var bil1 = 89;
var bil2 = 100;


var jumlah = 'Jumlah ' + bil1 + ' dengan ' + bil2 +' adalah ' + calculator.tambah(bil1, bil2);
var hasilKurang = 'Hasil pengurangan ' + bil1 + ' dengan ' + bil2 +' adalah ' + calculator.kurang(bil1, bil2);
var hasilKali = 'Hasil perkalian ' + bil1 + ' dengan ' + bil2 +' adalah ' + calculator.kali(bil1, bil2);
var hasilBagi = 'Hasil pembagian ' + bil1 + ' dengan ' + bil2 +' adalah ' + calculator.bagi(bil1, bil2);
var samaDengan = calculator.samadengan(bil1, bil2);

console.log(jumlah);
console.log(hasilKurang);
console.log(hasilKali);
console.log(hasilBagi);
console.log(samaDengan);
