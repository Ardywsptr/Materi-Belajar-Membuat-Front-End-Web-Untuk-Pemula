//CUSTON EVENT
//membuat custom event
const changeCaption = new Event ('changeCaption');

window.addEventListener('load', function(){
    const tombol = document.getElementById('tombol');
    tombol.addEventListener('changeCaption', customEventHandler);
    tombol.addEventListener('click', function(){});
})

function customEventHandler(ev){
    console.log('Event' + ev.type + 'telah dijalankan');
    const caption = document.getElementById('caption');
    caption.innerText = 'Anda telah membangkitkan custom event';
}

tombol.addEventListener('click', function(){
    tombol.dispatchEvent(changeCaption);
})