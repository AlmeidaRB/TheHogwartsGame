prompt("Welcome to Hogwarts School of Witchcraft and Wizardry. Yes it's real. Yes you've been accepted. It's your first day of school and... uh oh, wait...It seems the sorting hat is having a little trouble placing you into your proper house. Do you believe you should be in Gryffindor, Ravenclaw, Slytherin, or Hufflepuff?");
alert("Excellent choice, the sorting hat agrees! Welcome aboard");
alert("You've been awarded a 100 points for your house as a welcoming gift. Your goal is to finish the game keeping as many points as you started with.");
alert("First let's choose a level by finding out what grade year you're in.");
var level = prompt("Will you be a first, second, or third year new student at Hogwarts?");

//////////LEVEL ONE//////////

if ( level === "first") {
  alert("First year! Best of luck kiddo, hope things go swimmingly for you.");

var broom = prompt("Only first year students are required to take flying. Today you have to purchase your first boom. Select which broom you would like to purchase, 1, 2, or 3");
}

if (broom === '1') {
  alert("Congrats, you picked the Nimbus3000 broom! Although you were so scared you peed your pants, you still got mad air. No points lost for you.");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'.")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

if (quidditch === "player") {
  alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
  alert("Welp that wraps up the weekend you little wizard. You should be proud, you finished in first place with 80 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
} else if (quidditch === "pong") {
  alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
  alert("Welp that wraps up the weekend you little wizard. Not too shabby, you finished in second place with 70 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
}
}

else if (broom === '2') {
  alert("Oof sorry bloke, although you lifted off, your broom gave you a few splinters right in the butt cheek causing you to let go and fall off. Minus 10 points for you!");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. Not too shabby, you finished in second place with 70 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }

}
else if (broom ==='3') {
  alert("Uh oh, seems like you didn't match up well with your broom. Despite your best efforts you were unable to get off the ground and started swatting others with your broom bristles. Minus 20 points for you!");
  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. Not your best, you finished in last place. But you managed to keep half of your winnings and award your house with 50 points! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }

}


//////////LEVEL TWO//////////

else if (level === "second") {
  alert("A second year student! Don't expect this to be as easy for you as it is for the first year students");
var partner = prompt("As a second year student you have to take your potions class. Would you like Ron or Hermoine to be your lab partner?");
  }
if (partner === 'ron') {
  alert("You obviously haven't watched or read much Harry Potter. You and Ron goof off the entire class, failing your first potion's project, way to go. Minus 20 points for you.");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. Not your best, you finished in last place. But you managed to keep half of your winnings and award your house with 50 points! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }

} else if (partner === 'hermoine') {
  alert("Wise choice, Hermoine is a smart cookie! Togther the two of you ace your first potion's project. However you have to admit that Hermoine did most of the work, therefore 10 points lost for you.");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. Not too shabby, you finished in second place with 70 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }

}



//////////LEVEL THREE//////////

else if (level ==="third") {
  alert("A third year student! Way to take on the challenge!");
var wand = prompt("Third year students get to take Defense against the Dark Arts with professor Snape. This means you get to buy a new wand! Will you be using wand number 1, 2, or 3?");
}
if (wand === '1') {
  alert("Rough start... you and your wand aren't syncing up very well and you accidentally strike Snape's cloak on fire. Minus 20 points for you");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. Not your best, you finished in last place. But you managed to keep half of your winnings and award your house with 50 points! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }


} else if (wand === '2') {
  alert("Not a bad choice, you managed your first defense spell. However, Snape caught you sticking your wand up your classmates nose. Minus 10 points for you");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. Not too shabby, you finished in second place with 70 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. You still managed to finish in 3rd place with 60 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }


} else if (wand ==='3') {
  alert("Nice choice, your wand really fits you and even if it's just beginners luck, you look like a total badass casting defensive spells. No points lost for you");

  var cloak = prompt("Now that you're done with class you have some free time to wander the halls. You and your friends discover an invisibility cloak. You guys decided to put it on and sneak around. Do you sneak into the the forbidden forest or the hidden dungeon. Answer 'forest' or 'dungeon'")
  if (cloak === 'forest') {
    alert("The forest was scary and luckily nothing happened to you guys, but you did take too long to get back which resulted in getting caught! Minus 20 points");
  } else if (cloak==='dungeon') {
    alert("You guys made it to the dungeon and back without getting caught! However the three-headed dog guarding the dungeon door scratched your arm. Minus 20 points");
  }

  var quidditch = prompt("Well you've managed to finish your first week of classes without any major hiccups. It is now the weekend and there is a big quidditch match. Will you be a player in the game, or will you be  the number one fan at the butter beer-pong table? Answer 'player' or 'pong'.");

  if (quidditch === "player") {
    alert("Congratulations on your first game, you magical little jock, you. You weren't the star player but you did have a few zoomy moves, so no points lost for you.");
    alert("Welp that wraps up the weekend you little wizard. You should be proud, you finished in first place with 80 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  } else if (quidditch === "pong") {
    alert("Welp, somebody had a little too much butter beer and spilled their drink on their own shirt. Not a good look, you rookie. Minus 10 points. But hey, let's play some butter-beer pong!");
    alert("Welp that wraps up the weekend you little wizard. Not too shabby, you finished in second place with 70 points remaining for your house! Congratulations on your first full week at Hogwarts. Thanks for playing.");
  }
}
