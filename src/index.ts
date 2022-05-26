let base: number = Number(prompt(" ingrese numero de base"));
let exponente: number = Number(prompt(" ingrese numero de exponente"));

function calcularResultado(base: number, exponente: number): number {
  let resultado: number = 1;
  exponente <= 0;
  for (let i = 1; i <= exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}
console.log(
  "el calculo de la potencia es: ",
  calcularResultado(base, exponente)
);
?