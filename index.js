let result;
let questionUn = Number(window.prompt("donne moi un nombre"));

while (isNaN(questionUn)){
  questionUn = Number(window.prompt("c'est pas bon recommence. Entre un nombre!"));
};
let questionTrois = Number(window.prompt("donne moi un autre nombre"));

while (isNaN(questionTrois)){
questionTrois = Number(window.prompt("entre un deuxième chiffre"));
};
let questionDeux = window.prompt("donne moi un opérateur");
if (questionDeux === "+") {
  result = questionUn + questionTrois;
} else if (questionDeux === "*") {
  result = questionUn * questionTrois;
} else if (questionDeux === "/") {
  result = questionUn / questionTrois;
} else if (questionDeux === "-") {
  result = questionUn - questionTrois;
} else {
  questionDeux = window.prompt("entre un nouvel opérateur");
}
document.write(`<h1>Ton resultat est ${result}</h1>`)
