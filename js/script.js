var nome, cognome, colore, numero, password;

nome = prompt('Qual è il tuo nome?');
cognome = prompt('E il tuo cognome?');
colore = prompt('Qual è il tuo colore preferito?');
numero = 19;
password = nome + cognome + colore + numero;

var max = password.charAt(0).toUpperCase();
var min = password.substring(1).toLowerCase();
password = max + min;

document.getElementById('generated-pwd').innerHTML = password;
