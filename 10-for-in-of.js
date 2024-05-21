const cars = ['Supra', 'R34', 'RX7']

// cara pertama
for (let n = 0; n < cars.length; n++) {
	console.log(cars[n])
}

// cara kedua : looping value pakai for/of
for (let car of cars) {
	console.log(car)
}

// cara ketiga : looping index pakai for/in
for (let carIndex in cars) {
	console.log(cars[carIndex])
}