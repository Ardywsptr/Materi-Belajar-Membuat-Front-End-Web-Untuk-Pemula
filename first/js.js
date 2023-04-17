// const tamu = prompt('siapakah anda?');
// alert('selamat datang'+' '+tamu+' '+'!');

//SET ATRIBUTTE
//Menyesuaikan ukuran gambar yang terlalu kecil

//mengakses element dengan id gambar
const gambar = document.getElementById('gambar');
//menambahkan style atributte id gambar
gambar.setAttribute ('width', 300);
gambar.setAttribute ('height', 215);

//menonaktifkan button ke-4 (play(coming soon))

//mengakses selector pada class button secara menyeluruh
const buttons = document.querySelectorAll('.button');
//mengakses selector pada class button ke-4
const playButton = buttons[3];
//mengakses elemen button yang merupakan children dari class button
const  playButtonElement = playButton.children[0];
//menambahkan atribute gambar
playButtonElement.setAttribute('type', 'submit');

//INNER TEXT
//mengakses element dengan id dicodingLink
const dicoding = document.getElementById('dicodingLink');
//mengubah isi teks dari konten yang ada pada id dicodingLink 
dicoding.innerText = 'Belajar Programming di Dicoding';
//mengakses element dengan id googleLink
const google = document.getElementById('googleLink');
//mengubah isi teks dari konten yang ada pada id googleLink
google.innerText = 'Mencari sesuatu di Google'

//INNER HTML
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';
google.innerHTML = '<i>Mencari sesuatu di Google</i>';

//STYLE.PROPERTY
//mengakses class secara menyuluruh dengan nama class button
const buttonss = document.getElementsByClassName('button');
//mendapatkan HTMLCollection dengan looping
for (const button of buttonss){
    console.log(button.children[0]);
}
//mengubah style class button secara menyuluruh
for (const button of buttonss){
    button.children[0].style.borderRadius = '10px';
}
