// const hasil = document.getElementById('caption') // nyari element
const hasil = document.querySelector('h1.bukan-ibu') // nyari element

const isiTextHasil = hasil.innerHTML // get isi
console.log(isiTextHasil)

hasil.innerHTML = 'Coba ganti text' // set isi