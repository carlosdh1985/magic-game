// 
let trivia = [
    {question: "Who hit the milestone 500th homerun the fastest?", 
    possibleAnswers: [{name: "Sammy Sosa", img: "./images/SammySosa.jpg"},
                      {name: "Jimmie Foxx", img: "./images/JimmyFox.jpg"},
                      {name: "Rafael Palmeiro", img: "./images/RafaelPalmeiro.jpg"},
                      {name: "Frank Thomas", img: "./images/FranKThomas.jpg"},
                      false],
    correctAnswer: {name: "Jimmie Foxx", img: "./images/JimmyFox.jpg"}
    
    },
    {question: "First player to sign a $100,000 contract?", 
    possibleAnswers: [{name: "Hank Greenberg", img: "./images/HankGreenberg.jpg"},
                      {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"},
                      {name: "Dick Allen", img: "./images/DickAllen.jpg"},
                      {name: "Mickey Mantle", img: "./images/MickeyMantle.jpeg"},
                      false],
    correctAnswer: {name: "Hank Greenberg", img: "./images/HankGreenberg.jpg"}
    },
    {question: "First player to hit 300 triples in his career?", 
    possibleAnswers: [{name: "Sam Crawford", img: "./images/SamCrawford.jpg"},
                      {name: "Fred Clarke", img: "./images/FredClark.jpg"},
                      {name: "Tris Speaker", img: "./images/TrisSpeaker.jpg"},
                      {name: "Sam Rice", img: "./images/SamRice.jpg"}],
    correctAnswer: {name: "Sam Crawford", img: "./images/SamCrawford.jpg"}
    },
    // {question: "Who hit the first-ever World Series home run?", 
    // possibleAnswers: [{name: "Jimmy Sebring", img: "./images/JimmySebring.jpg"},
    //                   {name: "Frank Robinson", img: "./images/FrankRobinson.jpg"},
    //                   {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"},
    //                   {name: "'Goose' Goslin", img: "./images/GooseGoslin.jpg"}],
    // correctAnswer: {name: "Jimmy Sebring", img: "./images/JimmySebring.jpg"}
    // },
    // {question: "Complete games All Time leader...", 
    // possibleAnswers: [{name: "Tim Keefe", img: "./images/TimKeefe.jpg"},
    //                   {name: "Cy Young", img: "./images/CyYoung.jpg"},
    //                   {name: "Pud Galvin", img: "./images/PudGalvin.jpg"},
    //                   {name: "Jim McCormick", img: "./images/JimMcCormick.jpg"}],
    // correctAnswer: {name: "Cy Young", img: "./images/CyYoung.jpg"}
    // },
    // {question: "Who holds the record for most batting titles won?", 
    // possibleAnswers: [{name: "Ted Williams", img: "./images/TedWilliams.jpg"},
    //                   {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
    //                   {name: "Ty Cobb", img: "./images/TyCobb.jpg"},
    //                   {name: "Tris Speaker", img: "./images/TrisSpeaker.jpg"}],
    // correctAnswer: {name: "Ty Cobb", img: "./images/TyCobb.jpg"}
    // },
    // {question: "Last player to win a batting title, and not hit a home run...", 
    // possibleAnswers: [{name: "Stan Musial", img: "./images/StanMusial.jpg"},
    //                   {name: "Joe Kelley", img: "./images/JoeKelley.jpg"},
    //                   {name: "Mel Ott", img: "./images/MelOtt.jpg"},
    //                   {name: "Rod Carew", img: "./images/RodCarew.jpg"},
    //                   false],
    // correctAnswer: {name: "Rod Carew", img: "./images/RodCarew.jpg"}
    // },
    // {question: "First outfielder to lead both leagues in hits in consecutive seasons...", 
    // possibleAnswers: [{name: "Don Mattingly", img: "./images/DonMattingly.jpg"},
    //                   {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"},
    //                   {name: "Lance Johnson", img: "./images/LanceJohnson.jpg"},
    //                   {name: "Nap Lajoie", img: "./images/NapLajoie.jpg"}],
    // correctAnswer: {name: "Lance Johnson", img: "./images/LanceJohnson.jpg"}
    // },
    // {question: "What 15 year old made his debut in the Majors in 1944?", 
    // possibleAnswers: [{name: "Alex George", img: "./images/AlexGeorge.jpg"},
    //                   {name: "Carl Scheib", img: "./images/CarlScheib.jpg"},
    //                   {name: "Jim Derrington", img: "./images/JimDerrington.jpg"},
    //                   {name: "Joe Nuxhall", img: "./images/JoeNuxhall.jpg"},
    //                   false],
    // correctAnswer: {name: "Joe Nuxhall", img: "./images/JoeNuxhall.jpg"}
    // },
    // {question: "Smacked 191 RBIs in 1930 and set a season record...", 
    // possibleAnswers: [{name: "Rudy York", img: "./images/RudyYork.jpg"},
    //                   {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"},
    //                   {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
    //                   {name: "Hack Wilson", img: "./images/HackWilson.jpg"}],
    // correctAnswer: {name: "Hack Wilson", img: "./images/HackWilson.jpg"}
    // },
    // {question: "What team won the World Series in the 2000?", 
    // possibleAnswers: [{name: "Yankees", img: "./images/yankees_logo.png"},
    //                   {name: "Marlins", img: "./images/marlins_logo.png"},
    //                   {name: "Braves", img: "./images/braves_logo.jpg"},
    //                   {name: "Indians", img: "./images/indians_logo.jpg"}],
    // correctAnswer: {name: "Yankees", img: "./images/yankees_logo.png"}
    // },
    // {question: "The team Sandy Koufax played as a rookie...", 
    // possibleAnswers: [{name: "Brooklyn Dodgers", img: "./images/brooklyn_dodgers.jpg"},
    //                   {name: "Arizona Diamonds", img: "./images/ArizonaDiamonds.jpg"},
    //                   {name: "Houston Astros", img: "./images/astros.png"},
    //                   {name: "KC Royals", img: "./images/royals_logo.jpg"}],
    // correctAnswer: {name: "Brooklyn Dodgers", img: "./images/brooklyn_dodgers.jpg"}
    // },
    // {question: "All-time career leader in Major League at-bats...", 
    // possibleAnswers: [{name: "Pete Rose", img: "./images/PeteRose.jpg"},
    //                   {name: "Hank Aaron", img: "./images/HankAaron.jpg"},
    //                   {name: "Derek Jeter", img: "./images/DerekJeter.jpg"},
    //                   {name: "Cal Ripken Jr.", img: "./images/CalRipken.jpg"}],
    // correctAnswer: {name: "Pete Rose", img: "./images/PeteRose.jpg"}
    // },
    // {question: "Career leader in Major League Bases on Balls...", 
    // possibleAnswers: [{name: "Ted Williams", img: "./images/TedWilliams.jpg"},
    //                   {name: "Barry Bonds", img: "./images/BarryBonds.jpg"},
    //                   {name: "Rickey Henderson", img: "./images/RickeyHenderson.jpg"},
    //                   {name: "Carl Yastrzemski", img: "./images/CarlYastrzemski.jpg"}],
    // correctAnswer: {name: "Barry Bonds", img: "./images/BarryBonds.jpg"}
    // },
    // {question: "Who is the All Time Leader in games saved?", 
    // possibleAnswers: [{name: "Trevor Hoffman", img: "./images/TrevorHoffman.jpg"},
    //                   {name: "Lee Smith", img: "./images/LeeSmith.jpg"},
    //                   {name: "Francisco Rodriguez", img: "./images/FranciscoRodriguez.jpg"},
    //                   {name: "Mariano Rivera", img: "./images/MarianoRivera.jpg"}],
    // correctAnswer: {name: "Mariano Rivera", img: "./images/MarianoRivera.jpg"}
    // },
    // {question: "Strikeouts All Time Leader?", 
    // possibleAnswers: [{name: "Pedro Martinez", img: "./images/PedroMartinez.jpg"},
    //                   {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"},
    //                   {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"},
    //                   {name: "Roger Clemens", img: "./images/RogersClemens.jpg"}],
    // correctAnswer: {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"}
    // },
    // {question: "First All-Star MVP and World Series MVP (same season)...", 
    // possibleAnswers: [{name: "Albert Pujols", img: "./images/AlbertPujols.jpg"},
    //                   {name: "Ken Griffey Jr.", img: "./images/KenGriffeyJr.jpg"},
    //                   {name: "Alex Rodriguez", img: "./images/AlexRodriguez.jpg"},
    //                   {name: "Derek Jeter", img: "./images/DerekJeter.jpg"},
    //                   false],
    // correctAnswer: {name: "Derek Jeter", img: "./images/DerekJeter.jpg"}
    // },
    // {question: "Best winning percentage...", 
    // possibleAnswers: [{name: "Clayton Kershaw", img: "./images/ClaytonKershaw.jpg"},
    //                   {name: "Spud Chandler", img: "./images/SPUDCHANDLER.jpg"},
    //                   {name: "Pedro Martinez", img: "./images/PedroMartinez.jpg"},
    //                   {name: "David Price", img: "./images/DavidPrice.jpg"}],
    // correctAnswer: {name: "Spud Chandler", img: "./images/SPUDCHANDLER.jpg"}
    // },
    // {question: "Wins All Time Leader...", 
    // possibleAnswers: [{name: "Bartolo Colon", img: "./images/BartoloColon.jpg"},
    //                   {name: "CC Sabathia", img: "./images/CCSabathia.jpg"},
    //                   {name: "Walter Johnson", img: "./images/WalterJohnson.jpg"},
    //                   {name: "Cy Young", img: "./images/CyYoung.jpg"}],
    // correctAnswer: {name: "Cy Young", img: "./images/CyYoung.jpg"}
    // },
    // {question: "1st player to have 3 games with 3 HR during one season...", 
    // possibleAnswers: [{name: "Mickey Mantle", img: "./images/MickeyMantle.jpeg"},
    //                   {name: "Andres Galarraga", img: "./images/AndresGalarraga.jpg"},
    //                   {name: "Aaron Judge", img: "./images/judge.jpg"},
    //                   {name: "Sammy Sosa", img: "./images/SammySosa.jpg"},
    //                   false],
    // correctAnswer: {name: "Sammy Sosa", img: "./images/SammySosa.jpg"}
    // },

    // {question: "1st left-handed pitcher to strike out 20 batters during one game?", 
    // possibleAnswers: [{name: "Steve Carlton", img: "./images/SteveCarlton.jpg"},
    //                   {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"},
    //                   {name: "Sandy Koufax", img: "./images/SandyKoufax.jpg"},
    //                   {name: "Tom Glavine", img: "./images/TomGlavine.jpg"}],
    // correctAnswer: {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"}
    // },
    // {question: "Oldest active ball park in Major League Baseball...", 
    // possibleAnswers: [{name: "Wrigley Field", img: "./images/wrigleyField.jpg"},
    //                   {name: "Yankee Stadium", img: "./images/yankeeStadium.jpg"},
    //                   {name: "Dodger Stadium", img: "./images/DodgerStadium.jpg"},
    //                   {name: "Fenway Park", img: "./images/fenway.jpg"}],
    // correctAnswer: {name: "Fenway Park", img: "./images/fenway.jpg"}
    // },
    // {question: "Mark McGwire and Sammy Sosa broke which player's 61 home run record?", 
    // possibleAnswers: [{name: "Willie Mays", img: "./images/WillieMays.jpg"},
    //                   {name: "Jose Canseco", img: "./images/JoseCanseco.jpg"},
    //                   {name: "Roger Maris", img: "./images/ROGERMARIS.jpg"},
    //                   {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"}],
    // correctAnswer: {name: "Roger Maris", img: "./images/ROGERMARIS.jpg"}
    // },
    // {question: "Only pitcher who won a World Series game in 3 different decades?", 
    // possibleAnswers: [{name: "Whitey Ford", img: "./images/WhiteyFord.jpg"},
    //                   {name: "Bob Welch", img: "./images/BobWelch.jpg"},
    //                   {name: "Johnny Podres", img: "./images/JohnnyPodres.jpg"},
    //                   {name: "Jim Palmer", img: "./images/JIMPALMER.jpg"},
    //                   false],
    // correctAnswer: {name: "Jim Palmer", img: "./images/JIMPALMER.jpg"}
    // },
    // {question: "1st player to pitch a ball over 100 mph?", 
    // possibleAnswers: [{name: "Aroldis Chapman", img: "./images/AroldisChapman.jpg"},
    //                   {name: "Roger Clemens", img: "./images/RogersClemens.jpg"},
    //                   {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"},
    //                   {name: "Tom Seaver", img: "./images/TomSeaver.jpg"}],
    // correctAnswer: {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"}
    // },
    // {question: "1st player to have his number retired?", 
    // possibleAnswers: [{name: "Charlie Robertson", img: "./images/CharlieRobertson.jpg"},
    //                   {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
    //                   {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"},
    //                   {name: "Ty Cobb", img: "./images/TyCobb.jpg"}],
    // correctAnswer: {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"}
    // },
    // {question: "Player killed by a pitch from Yankees pitcher Carl Mays?", 
    // possibleAnswers: [{name: "Ray Chapman", img: "./images/RAYCHAPMAN.jpg"},
    //                   {name: "Tony Conigliaro", img: "./images/TonyConigliaro.jpg"},
    //                   {name: "Bryce Florie", img: "./images/BryceFlorie.jpg"},
    //                   {name: "Herb Score", img: "./images/HerbScore.jpg"},
    //                   false],
    // correctAnswer: {name: "Ray Chapman", img: "./images/RAYCHAPMAN.jpg"}
    // },
    // {question: "Who holds the record for most hits in a season?", 
    // possibleAnswers: [{name: "Lefty O'Doul", img: "./images/LeftyO'Doul.jpg"},
    //                   {name: "Pete Rose", img: "./images/PeteRose.jpg"},
    //                   {name: "Ted Williams", img: "./images/TedWilliams.jpg"},
    //                   {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"}
    //             ],
    // correctAnswer: {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"}
    // }
];

function starting(){
    document.getElementById('started').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    let audio = new Audio('takemeintro.mp3');
    audio.play();
    let playball = new Audio('playball.mp3');
    setTimeout(function(){playball.play();}, 11000);
    setTimeout(function(){$('#card1').fadeIn();
                          $('#card1 > img').fadeIn();
                          $('#card2').fadeIn('slow');
                          $('#card2 > img').fadeIn('slow');
                          $('#card3').fadeIn(1000);
                          $('#card3 > img').fadeIn(1000);
                          $('#card4 > p').fadeIn(2000);
                          $('#card4 > img').fadeIn(2000);
                          $('#theQuestion > p').fadeIn(3000);
                          $('#score_board').fadeIn(3000);

                                                             
}, 11000);
}
    function shuffleQuestions(arr){
     for (let i = arr.length - 1; i > 0; i--){
     let j = Math.floor(Math.random() * (i + 1));
     [arr[i], arr[j]] = [arr[j], arr[i]];
     }
     return arr;
    }
    shuffleQuestions(trivia);

    let someArr = [...trivia];

    let firstCard = document.getElementById('first');
    let playerName1 = document.querySelector('#card1 > p');

    let secondCard = document.getElementById('second');
    let playerName2 = document.querySelector('#card2 > p');

    let thirdCard = document.getElementById('third');
    let playerName3 = document.querySelector('#card3 > p');

    let fourthCard = document.getElementById('fourth');
    let playerName4 = document.querySelector('#card4 > p');

    let quest = document.querySelector('#theQuestion > p');
    
    let lastQuestionIndex = someArr.length-1;
    let currentQuestionIndex = 0;
    let x;
    let checkAnswer;

    function nextQuestion(){
      
      if (currentQuestionIndex > lastQuestionIndex){
        $('#card1').fadeOut();
        $('#card1 > img').fadeOut();
        $('#card2').fadeOut();
        $('#card2 > img').fadeOut();
        $('#card3').fadeOut();
        $('#card3 > img').fadeOut();
        $('#card4 > p').fadeOut();
        $('#card4 > img').fadeOut();
        $('#theQuestion > p').fadeOut();
        $('#score_board').fadeOut();
        $('#ballPark').fadeOut();
          let audio = new Audio('takemeout.mp3');
          audio.play();
        $('#imgContainer').fadeIn(1500);
        let message = document.querySelector('#imgContainer > div');
            message.innerHTML = finalResult;
            return message;

      }
      
      else{
       
        x = someArr[currentQuestionIndex];
        
        firstCard.src =  x.possibleAnswers[0].img;
        playerName1.innerHTML = "<p>" + x.possibleAnswers[0].name + "</p>";

        secondCard.src= x.possibleAnswers[1].img;
        playerName2.innerHTML = "<p>" + x.possibleAnswers[1].name + "</p>";

        thirdCard.src=  x.possibleAnswers[2].img;
        playerName3.innerHTML = "<p>" + x.possibleAnswers[2].name + "</p>";

        fourthCard.src= x.possibleAnswers[3].img;
        playerName4.innerHTML = "<p>" + x.possibleAnswers[3].name + "</p>";

        quest.innerHTML = "<p>" + x.question + "</p>";
        
        $('#card1,#card2, #card3,#card4').removeClass("rightAnswer");
        $('#card1,#card2, #card3,#card4').removeClass("wrongAnswer");
        $('#card1 > p').css("color", "#002d72");
        $('#card2 > p').css("color", "#002d72");
        $('#card3 > p').css("color", "#002d72");
        $('#card4 > p').css("color", "#002d72");
        
        }
        
        
    }
    
    currentQuestionIndex = 0;
    nextQuestion();
    
   let rightChoice = x.correctAnswer.name;
   let scoreCounter = 0;
   let strikesCounter = 0;
   let finalResult;
   
   theCorrectAnswer();

   
   function theCorrectAnswer(){
        $("#cardsboard").children().click(function(){
              if($('p', this).text().slice(0, $('p', this).text().length/2) !== rightChoice &&
                strikesCounter === 0){
                strikesCounter++;
                console.log(strikesCounter)
                $(this).addClass("wrongAnswer");
                $('p', this).css("color", "red");
                let strike1 = new Audio('strike1.mp3');
                strike1.play();
              }
              else if($('p', this).text().slice(0, $('p', this).text().length/2) !== rightChoice &&
              strikesCounter === 1){
                strikesCounter++;
                $(this).addClass("wrongAnswer");
                $('p', this).css("color", "red");
                let strike2 = new Audio('strike2.mp3');
                strike2.play();
              }
              else if($('p', this).text().slice(0, $('p', this).text().length/2) !== rightChoice &&
              strikesCounter === 2){
                strikesCounter= 0;  
                $(this).addClass("wrongAnswer");
                $('p', this).css("color", "red");
                let strike3 = new Audio('strike3.mp3');
                strike3.play();
                setTimeout(function(){ currentQuestionIndex++; nextQuestion(); }, 700);
              }
               else if($('p', this).text().slice(0, $('p', this).text().length/2) === rightChoice){
                $(this).addClass("rightAnswer");
                $('p', this).css("color", "green");
                let homerun = new Audio('Homerun.mp3');
                homerun.play();
                setTimeout(function(){ currentQuestionIndex++; nextQuestion(); strikesCounter= 0; }, 700);
                       if(x.possibleAnswers.includes(false)){
                             scoreCounter += 50;
                             setTimeout(function(){let cow = new Audio('holycow.mp3'); cow.play();}, 500)
                             document.getElementById('td').innerHTML = scoreCounter;
                         }
                        else {
                         scoreCounter += 25;
                         setTimeout(function(){let organ = new Audio('organ.mp3'); organ.play();}, 500)
                         document.getElementById('td').innerHTML = scoreCounter;
                         }
                        
                      }
                      finalResult = finalScore();
                        function finalScore(){
                        if(scoreCounter < 100){
                         return "You are not a baseball fan. Are you? You scored only " + scoreCounter + " points.";
                        }
                       else if (scoreCounter >= 100 && scoreCounter < 200){
                        return "Not your day. You scored only " + scoreCounter + " points.";
                        }
                        else if(scoreCounter >= 200 && scoreCounter < 600) {
                          return "You can do better than " + scoreCounter + " points.";
                        }
                        else if(scoreCounter >= 600 && scoreCounter < 700){
                          return "Amazing job! Bet you work for ESPN... You scored " + scoreCounter + " points.";
                        }
                        else{
                          return "Did you know you were a baseball nerd? You scored " + scoreCounter + " points.";
                        }     
                      } 
             });
            
            }
            
            
            
            

   