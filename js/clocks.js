
/*
 * Un petit script mesurant l'écoulement du temps
 *
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

//afficher une alerte hello world

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);


function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var date = new Date();

  // document.getElementById("horloge").innerHTML = d.toLocaleTimeString();

  // mettre les secondes dans le bloc des secondes
  var seconde = date.getSeconds();
  var minute = date.getMinutes();
  var heure = date.getHours();

  document.getElementById("sec-txt").innerHTML = seconde +"s";
  document.getElementById("min-txt").innerHTML = minute +"m";

  // Faire pencher l'élément des secondes...
  // transform: skewX(-25deg);

  function SuperMathematique(valeur) {
    valeur = valeur *1.5;
    valeur = valeur -45;
    return valeur;
  }

  // console.log( SuperMathematique(seconde) );

  document.getElementById("sec-ombre").style.transform = 'skewX('+ SuperMathematique(seconde) +'deg) translateX(0px)';

  document.getElementById("min-ombre").style.transform = 'skewX('+ SuperMathematique(minute) +'deg)';

  // de zéro sec à 60sec = traduire en : de -45 à 45.



}
