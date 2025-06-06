const { AkarPersamaanKuadrat, HasilKuadrat } = require('./aljabarLibraries');

const akar = AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar-akar persamaan kuadrat x^2 - 3x - 10:", akar);

const kuadrat = HasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3)^2:", kuadrat);
