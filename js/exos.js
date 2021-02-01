/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
// Ton code ici...
var score = 0;
var question1 = 'Quelle mer borde la ville de Sébastopol ?';
var solution1 = 'La mer Noire';
var reponse1 = prompt(question1);
if (reponse1 === solution1){
    alert('Gagné !')
    score = score + 1
}
else {
    alert('Perdu...')
}
/* Exo 2 */
// Ton code ici...
var question2 = 'Quel est l\'âge du capitaine ?';
var solution2 = '63';
var reponse2 = prompt(question2);
if (reponse2 === solution2){
    alert('Gagné !')
    score = score +1
}
else {
    alert('Perdu...')
}
parseInt (63)
/* Exo 3 */
// Ton code ici...
alert('Ton score est de : ' + score + '/2')