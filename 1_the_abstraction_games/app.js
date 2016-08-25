// Practice abstraction.
// https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)

/**
 * 1. Create a Person constructor with the following object properties:
 * firstName
 * lastName
 * district
 * weapon
 * luck
 * matches
 * wins
 */

 function Person (firstName, lastName, district, weapon, luck, matches, wins){
   this.firstName=firstName;
   this.lastName=lastName;
   this.district=district;
   this.weapon=weapon;
   this.luck=luck;
   this.matches=matches;
   this.wins=wins;

 }


/**
 * 2. Create person objects for Katniss, Rue, Peeta, and Gale with the
 * following values:
 * Katniss, Everdeen, 12, bow and arrow, 10, 0, 0
 * Peeta, Mellark, 12, camoflague, 5, 0, 0
 * Rue, null, 11, slingshot, 4, 0, 0
 * Thresh, null, 11, rock, 3, 0, 0
 */
  // var winner = 0;
  // var competitor = 0;
 // katniss
 var Katniss = new Person("Katniss", "Everdeen", 12, "bow and arrow", 10, 0, 0);
 // peeta
 var Peeta = new Person("Peeta", "Mellark", 12, "camoflague", 5, 0, 0);
 // rue
 var Rue = new Person("Rue", null, 11, "slingshot", 4, 0, 0);
 // thresh
 var Thresh = new Person("Thresh", null, 11, "rock", 3, 0, 0);
 console.log(Katniss);

/**
  * 3. Create 4 arrays that represent matches between two characters.
  * For example, you might have an array named match1 where the first index
  * of the array is the Katniss object and the second index is the Thresh object.
  */

// match1
var match1 = [Katniss, Thresh];
// match2
var match2 = [Peeta, Thresh];
// match3
var match3 = [Katniss, Peeta];
// match4
var match4 = [Thresh, Rue];

/**
  * 4. Create an array, named matches. It will contain all the matches you
  * created above.
  */
var matches = [match1, match2, match3, match4];

/**
  * 5. Create a function, named winner, that takes a single person object as
  * a parameter. The function will
  * - increment the winner's luck score by 1
  * - increment the winner's wins property by 1
  * BUT, the max luck score is 10.
  */


function winner (pers) {
  if(pers.luck < 10){
    pers.luck++;
    pers.wins++;
  }
  else if (pers.luck == 10){
    pers.wins++
  }
  return pers;
}





/**
  * 6. Create a function, named battle, that takes a single match array as a
  * parameter.
  * The function will
  * - increment the matches property of each object
  * - return the winner of the match
  * The winner is the person with the highest luck score.
  */

  function battle (match) {
    match[0].matches++;
    match[1].matches++;
    if (match[0].luck > match[1].luck){
      return match[0];
    }
    else {
      return match[1];
    }
  };




/**
  * 7. Create a function, named runAllBattles, that takes an array of matches
  * as a parameter.
  * For each match array, invoke the battle function.
  * Pass the result of the battle function to the winner function.
  * Console log each person object after all battles have been completed.
  */
  //function runAllBattles (matchesArray) {

function runAllBattles (matchesArray) {
  matchesArray.forEach(function (array){
    battle();
    winner(battle());
  });
}
  //}

/**
  * 8. Invoke the battle function with one of the matches you created above.
  * Pass the result of the battle function to the winner function.
  * Console log each person object.
  */
  battle(match1);
  battle(match2);
  battle(match3);
  battle(match4);
  winner(battle(match1));
  winner(battle(match2));
  winner(battle(match3));
  winner(battle(match4));

  console.log(Katniss);
  console.log(Peeta);
  console.log(Rue);
  console.log(Thresh);


  /**
   * TAKEAWAYS
   * When we abstract our logic into functions, we can perform those functions
   * on one or more objects or arrays. This gives us more flexibility and
   * allows us to not repeat the same code in multiple places (DRY).
   */
