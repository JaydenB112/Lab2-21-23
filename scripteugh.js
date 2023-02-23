
function quiz() {
      let Q1 = prompt("Did I go to Tennessee State?")
      let Q1low = Q1.toLowerCase();
      if (Q1low == "yes" || Q1low == "y"){
        alert("correct")

      } else{
        alert("No, how do you take a test and not read...")
      }

      let Q2 = prompt("Am I 21 years old?")
      let Q2low = Q2.toLowerCase();
      if (Q2low =="no" || Q2low == "n"){
        alert("correct")

      } else{
        alert("I wish I was 21, maybe I should just start lying.")
      }
      
      let Q3 = prompt("Did I go to Germantown High School?")
      let Q3low = Q3.toLowerCase();
      if (Q3low == "yes" || Q3low == "y"){
        alert("Correct! Go Devils! If else you a clown.")
        
      } else{
        alert("You are a clown, a bum even, an absolute loser perhaps, like bro just READ.")
      }

      let Q4 = prompt("Was I born in Grand Rapids, Michigan?")
      let Q4low = Q4.toLowerCase();
      if (Q4low == "no" || Q4low == "n"){
        alert("Correct!, My family from there though")

      } else{
        alert("... you should be ashamed of yourself dawg, seriously.")
      }

      let Q5 = prompt("Is Jay my full name?")
      let Q5low = Q5.toLowerCase();
      if (Q5low == "no" || Q4low == "n"){
        alert(" Correct!I wish it was")

      } else{
        alert("You're wrong, but honestly are you wrong?")
      }

      let theRightAnswer = 8;
      let youGotItRight = false;

      for(let attempt = 1; attempt<=7; attempt++) {
        let guessedNumber = prompt("Guess the number");
        if(guessedNumber > theRightAnswer) {
          alert("Hey my sibling in Christ that number is a little too high.");
        

        }
        if (guessedNumber < theRightAnswer) {
          alert("Yea gangsta that's a little too low.");
        }

        if(guessedNumber == theRightAnswer) {
          alert("Well shake up a redbull and strap it to my back, by gum you've done it!!");
          youGotItRight = true;
          break;
        }

        if(attempt > 7) {
          alert("You are terrible, like I want you to leave this experience understanding that....embarrassing.");
            
      }

      }

      
      

      console.log("What a loser lol.");



    
} 
