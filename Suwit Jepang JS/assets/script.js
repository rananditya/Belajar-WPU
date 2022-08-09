var tanya = true;

while (tanya) {
    var p = prompt('Pilih : batu, gunting, kertas');
    
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'batu';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }



    if ( p == comp) {
        hasil = 'SERI'
    } else if ( p == 'batu') {
        hasil = (comp == 'gunting') ? 'Menang' : 'Kalah';
    } else if ( p == 'gunting') {
        hasil = (comp == 'kertas') ? 'Menang' : 'Kalah';
    } else if (p == 'kertas') {
        hasil = (comp == 'batu') ? 'Menang' : 'Kalah';
    } else {
        hasil = 'Jawaban tidak sesuai perrintah!';
    }

    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('Terimaksih sudah bermain');