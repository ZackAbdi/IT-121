<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Guess the number</title>
</head>
<body> 
        <h1>Guess The Number</h1>
        <P>This page will have you guess a number between 1 and 100</p>
        <div id ="output"></div>
        <script>
      /*
        In this application you'll use JS to pick a random number between 1 and 100.  Once the number is chosen, the user can guess a number and your application will provide feedback, 'higher', 'lower' or Got it! in which case the user wins!

        Your application will also need to keep track of how many guesses it took and tell the user in the feedback.  The feedback could be for example:

        Congratulations! You guessed the correct number, which was 78 and it took you 5 guesses.

        to do;

        generate a random number 
        get data from user ( guess a numer)
        see if data matches random number

        if num > random, tell user lower

        if num < random tell user higher
      */ 
      </script>
<script>
var x = Math.floor(Math.random() * 100) + 1;
var turns = 5;
var hint = 'Guess my number, 1-100!';

while (turns > 0) {
  var guess = prompt(hint +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  guess = Number(guess);
  if (guess == x) {
    document.write('<p>YOU WIN!</p>' +
      '<p><img src="/images/photo/gold_trophy.jpg">');
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    turns = turns - 1;
  }
}
alert('The secret number was ' + x + '.');
</script>
</body>
</html> 