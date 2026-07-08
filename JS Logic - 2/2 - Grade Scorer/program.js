const notas = [0.5, 6.7, 7.6, 9.0];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 6) {
    console.log("Aluno reprovado");
  } else {
    console.log("Aluno passou");
  }
}