// Modul untuk Aljabar
function AkarPersamaanKuadrat([a, b, c]) {
  const diskriminan = b * b - 4 * a * c;
  if (diskriminan < 0) return []; // Tidak ada akar real

  const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
  const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
  return [akar1, akar2];
}

function HasilKuadrat([a, b]) {
  // Kuadrat dari (ax + b)^2 = a^2x^2 + 2abx + b^2
  return [a * a, 2 * a * b, b * b];
}

module.exports = { AkarPersamaanKuadrat, HasilKuadrat };
