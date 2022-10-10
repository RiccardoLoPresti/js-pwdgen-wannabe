let nomeUtente;
let cognomeUtente;
let colorePreferito;
let output;


nomeUtente = prompt('Qualè il tuo nome?');

cognomeUtente = prompt(`${nomeUtente} qualè il tuo cognome?`);

nomeCompleto = nomeUtente + cognomeUtente;

colorePreferito = prompt(`${nomeCompleto} qualè il tuo colore preferito?`);

output = nomeCompleto + colorePreferito + 22;

document.getElementById('password').innerHTML = `
  La tua password sicurissima è:<span class="bg-info pt-3">${output} </span>
`;



