// Passo 1: Criação de um array de nomes
const nomes: string[] = ["Alice", "Ana", "José", "Maria", "Joaquim", "Lucas", "Amanda", "Paula", "João", "Pedro"];

// Passo 2: Usando um loop for para percorrer o array e imprimir os nomes
console.log("Imprimindo todos os nomes exceto os que começam com 'J':");
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].startsWith("J")) {
    continue; // Pula os nomes que começam com 'J'
  }
  if (nomes[i].startsWith("M")) {
    break; // Para o loop quando o nome começar com 'M'
  }
  console.log(nomes[i]);
}

// Passo 3: Usando um loop while para contar quantos nomes começam com 'A'
let contador = 0;
let index = 0;

console.log("\nContando nomes que começam com 'A':");
while (index < nomes.length) {
  if (nomes[index].startsWith("A")) {
    contador++;
  }
  index++;
}

console.log(`Quantidade de nomes que começam com 'A': ${contador}`);

// Passo 4: Usando for of para iterar sobre uma string
const palavra = "TypeScript";
console.log("\nIterando sobre a palavra 'TypeScript' caractere por caractere:");
for (const char of palavra) {
  console.log(char);
}
