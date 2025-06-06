// Library Matematika

function FPB(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

function Turunan(persamaan) {
  const turunan = persamaan
    .slice(0, -1)
    .map((coef, i) => coef * (persamaan.length - i - 1))
    .map((coef, i) => {
      const pangkat = persamaan.length - i - 2;
      if (pangkat === 0) return `${coef}`;
      if (pangkat === 1) return `${coef}x`;
      return `${coef}x${pangkat}`;
    });
  return turunan.join(' + ').replace(/\+\s\-/g, '- ');
}

function Integral(persamaan) {
  const integral = persamaan
    .map((coef, i) => {
      const pangkat = persamaan.length - i;
      const hasil = coef / pangkat;
      if (pangkat === 1) return `${hasil}x`;
      return `${hasil}x${pangkat}`;
    });
  return integral.join(' + ') + ' + C';
}

module.exports = { FPB, KPK, Turunan, Integral };
