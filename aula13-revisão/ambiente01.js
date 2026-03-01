var c = 1;
do {
  console.log(`Passo ${c}`);
  c++; // c = c + 1
} while (c <= 6);

/* var c = 1 
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}
 */

/*console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')*/

// exercícios práticos. (1)

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é impar`);
  }
}

// exercícios práticos. (2)

for (let i = 1; i <= 20; i++) {
  if (i > 5 && i < 15 && i % 2 === 0) {
    console.log(i);
  }
}
