// rumus menghitung

function hitungLuasLingkaran (ruas) {
	const hasil = Math.PI * (ruas ** 2)
	return hasil
}

function logDenganPesan (arg) {
	console.log('log kamu: ', arg)
}

const luasLingkaran1 = hitungLuasLingkaran(50)
const luasLingkaran2 = hitungLuasLingkaran(75)
const luasLingkaran3 = hitungLuasLingkaran(23)

logDenganPesan(luasLingkaran1)
logDenganPesan(luasLingkaran2)
logDenganPesan(luasLingkaran3)