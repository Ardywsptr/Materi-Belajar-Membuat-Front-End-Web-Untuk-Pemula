//APPEND CHILD
//membuat elemen child baru terlebih dahulu
const newElement = document.createElement('li');
//menambahkan teks pada element li yang baru
newElement.innerText = 'Selamat menikmati !';
//mengakses element ol (parent) untuk di masukan elemen li yang baru
const daftar = document.getElementById('daftar');
//menambahkan element baru li (child) pada akhir element ol (parent)
daftar.appendChild(newElement);

//INSERT BEFORE
//membuat elemen child baru terlebih dahulu 
const elemenAwal = document.createElement('li');
//menambahkan teks pada element li yang baru
elemenAwal.innerText = 'Hidupkan Kompor';
//mengakses element yang ingin diganti posisinya
const itemAwal = document.getElementById('awal');
//menambahkan elemen baru li (child) pada awal element ol (parent) 
daftar.insertBefore(elemenAwal, itemAwal);
