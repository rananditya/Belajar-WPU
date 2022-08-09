var tanya = true;
while (tanya) {
    //Menangkap pilihan player
var p = prompt('Pilih : gajah, semut, orang');

//Menangkap pilihan komputer
//Membangkitkan bilangan random
var comp = Math.random();

if( comp < 0.34 ) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'orang';
} else {
    comp = 'semut';
}



//Menentukan rules
if ( p == comp ) {
    hasilnya = 'SERI';
} else if ( p == 'gajah') {
    hasil = ( comp == 'orang' ) ? 'Menang' : 'Kalah';
} else if ( p == 'orang') {
    hasil = ( comp == 'semut' ) ? 'Menang' : 'Kalah';
} else if ( p == 'semut') {
    hasil = ( comp == 'gajah' ) ? 'Menang' : 'Kalah';
} else {
    hasil = 'Memasukan pilhan yang salah!!';
}

//Tampilkan hasil
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

tanya = confirm('lagi?');
} 

alert('Terimakasih sudah bermain');
