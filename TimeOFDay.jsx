<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>zack's IT121 Portal Page</title>
 
</head>
<body>
   <h1> zack's IT121 Portal Page</h1>
   <div id="output"></div>
   <div><img src="" id="timePic" /></div></div>
   <script>
   let myDate = new Date();
 
   let myHour = myDate.getHours();
 
   let myOutput = "";
 
   let myPic = "";
 
// Remove - Testing ONLY
   myHour = 15;
 
   if(myHour > 12){
      //alert('Good afternoon!');
      myOutput += "Good afternoon!";
      myPic = "images/afternoon.jpg";
   }else{
       //alert('Good morning!');
       myOutput += "Good morning!";
       myPic = "images/morning.jpg";
}
document.getElementById('output').innerHTML = myOutput;
document.getElementById('timePic').src = myPic;
 
   </script>
   </body>
   </html>
 


 //Here we added colors to our time of day assignment:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>Time of Day</title>
 
</head>
<body>
   <h1>Time of Day</h1>
   <p>In this assignment, we created a web page that uses JavaScript to determine the current hour, and presents a different image, custom message, and color based on the each following times of day</p>
   <div id="output"></div>
   <div><img src="" id="timePic" /></div></div>
   <script>
       /*
       Deliverable: Create a web page that uses JavaScript to determine the current hour, and presents a different image, custom message, and color based on the each following times of day:
 
       Morning (5am to 12 noon)
       Afternoon (12 noon to 6pm)
       Evening (6pm to 11pm)
       Night (11pm to 5am)
 
 
       */
   let myDate = new Date();
 
   let myHour = myDate.getHours();
 
   let myOutput = "";
 
   let myPic = "";
 
   let myColor = "";
 
   //Remove - TEST ONLY
   //myHour = 5;
 
   if(myHour >= 5 && myHour < 12){ //Morning (5am to 12 noon)
       myOutput += 'Good morning!';
       myPic = "images/morning.jpg";
       myColor = "orange"
 
   } else if(myHour >= 12 && myHour < 18){ //Afternoon (12 noon to 6pm)
       myOutput += 'Good afternoon!';
       myPic = "images/afternoon.jpg";
       myColor = "yellow"
 
   } else if(myHour >= 18 && myHour < 23){ //Evening (6pm to 11pm)
       myOutput += 'Good evening!';
       myPic = "images/evening.jpg";
       myColor = "red"
 
   }else{ //Night (11pm to 5am)
       myOutput += 'Good night!';
       myPic = "images/night.jpg";
       myColor = "blue"
   }
 
// Remove - Testing ONLY
//  myHour = 15;
   /*
   Orginal version
   if(myHour > 12){
      //alert('Good afternoon!');
      myOutput += "Good afternoon!";
      myPic = "images/afternoon.jpg";
   }else{
       //alert('Good morning!');
       myOutput += "Good morning!";
       myPic = "images/morning.jpg";
}
   */
document.getElementById('output').innerHTML = myOutput;
document.getElementById('timePic').src = myPic;
document.body.style.backgroundColor = myColor;
   </script>
   </body>
   </html>

 In order to do copyright, we needed the current year:

   let myYear = myDate.getFullYear();
 
   console.log("myYear is " myYear);

//Here’s how we can change the colors of all fonts on a page:

       var all = document.getElementsByTagName("*");
 
       for (var i=0, max=all.length); i < max; i++) {
       all[i].style.color = "white";
       }

//Here’s the beginning of our Guess the number app:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>Guess The Number</title>
 
</head>
<body>
   <h1>Guess The Number</h1>
   <p>This pages will have you guess a number between 1 & 100</p>
   <div id="output"></div>
   <div><img src="" id="timePic" /></div></div>
 
   <script> 
       /*
       In this application you'll use JS to pick a random number between 1 and 100.  Once the number is chosen, the user can guess a number and your application will provide feedback, 'higher', 'lower' or Got it! in which case the user wins!
 
       Your application will also need to keep track of how many guesses it took and tell the user in the feedback.  The feedback could be for example:
 
       Congratulations! You guessed the correct number, which was 78 and it took you 5 guesses.
 
       to do:
 
       generate a random number
       get data from user (guess a number)
       see if data matches random number
 
       if num > random, tell use lower
 
       if nun < random tell user higher
 
       */
 
       let myRandom = Math.floor(Math.random() * 11);
       alert(myRandom);
 
   </script>
   </body>
   </html>