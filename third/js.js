//EVENT HANDLER - EVENT ONLOAD
//membuat fungsi menghapus elemen hidden
function welcome(){
    alert('simsalabim munculah elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

//menambahkan event handler untuk event onload dari elemen body
// document.body.onload = welcome;
//kode di atas dipindahkan ke inline element body

//EVENT HANDLER - EVENT ONCLICK
//membuat fungsi increment (kenaikan angka) saat button di tekan
function increment(){
    document.getElementById('count').innerText++;

    //menambahkan elemen gambar ketika button sampai di klik 7 kali
    if (document.getElementById('count').innerText == 7){
        
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda mendapatkan hadiah tersembunyi...';
        
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}
//menambahkan event handler untuk event onclick saat button di click
// document.getElementById('incrementButton').onclick = increment;
//kode di atas dipindahkan ke inline element button

//memanggil event menggunakan addEventListener()
window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);
