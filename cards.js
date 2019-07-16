// 
let trivia = [
    {question: "Who hit the milestone 500th homerun the fastest?", 
    possibleAnswers: [{name: "Sammy Sosa", img: "./images/SammySosa.jpg"},
                      {name: "Jimmie Foxx", img: "./images/JimmyFox.jpg"},
                      {name: "Rafael Palmeiro", img: "./images/RafaelPalmeiro.jpg"},
                      {name: "Frank Thomas", img: "./images/FranKThomas.jpg"}],
    correctAnswer: {name: "Jimmie Foxx", img: "./images/JimmyFox.jpg"}
    },
    {question: "First player to sign a $100,000 contract?", 
    possibleAnswers: [{name: "Hank Greenberg", img: "./images/HankGreenberg.jpg"},
                      {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"},
                      {name: "Dick Allen", img: "./images/DickAllen.jpg"},
                      {name: "Mickey Mantle", img: "./images/MickeyMantle.jpeg"}],
    correctAnswer: {name: "Hank Greenberg", img: "./images/HankGreenberg.jpg"}
    },
    {question: "First player to hit 300 triples in his career?", 
    possibleAnswers: [{name: "Sam Crawford", img: "./images/SamCrawford.jpg"},
                      {name: "Fred Clarke", img: "./images/FredClark.jpg"},
                      {name: "Tris Speaker", img: "./images/TrisSpeaker.jpg"},
                      {name: "Sam Rice", img: "./images/SamRice.jpg"}],
    correctAnswer: {name: "Sam Crawford", img: "./images/SamCrawford.jpg"}
    },
    {question: "Who hit the first-ever World Series home run?", 
    possibleAnswers: [{name: "Jimmy Sebring", img: "./images/JimmySebring.jpg"},
                      {name: "Frank Robinson", img: "./images/FrankRobinson.jpg"},
                      {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"},
                      {name: "'Goose' Goslin", img: "./images/GooseGoslin.jpg"}],
    correctAnswer: {name: "Jimmy Sebring", img: "./images/JimmySebring.jpg"}
    },
    {question: "Complete games All Time leader...", 
    possibleAnswers: [{name: "Tim Keefe", img: "./images/TimKeefe.jpg"},
                      {name: "Cy Young", img: "./images/CyYoung.jpg"},
                      {name: "Pud Galvin", img: "./images/PudGalvin.jpg"},
                      {name: "Jim McCormick", img: "./images/JimMcCormick.jpg"}],
    correctAnswer: {name: "Cy Young", img: "./images/CyYoung.jpg"}
    },
    {question: "Who holds the record for most batting titles won?", 
    possibleAnswers: [{name: "Ted Williams", img: "./images/TedWilliams.jpg"},
                      {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
                      {name: "Ty Cobb", img: "./images/TyCobb.jpg"},
                      {name: "Tris Speaker", img: "./images/TrisSpeaker.jpg"}],
    correctAnswer: {name: "Ty Cobb", img: "./images/TyCobb.jpg"}
    },
    {question: "Last player to win a batting title, and not hit a home run...", 
    possibleAnswers: [{name: "Stan Musial", img: "./images/StanMusial.jpg"},
                      {name: "Joe Kelley", img: "./images/JoeKelley.jpg"},
                      {name: "Mel Ott", img: "./images/MelOtt.jpg"},
                      {name: "Rod Carew", img: "./images/RodCarew.jpg"}],
    correctAnswer: {name: "Rod Carew", img: "./images/RodCarew.jpg"}
    },
    {question: "First outfielder to lead both leagues in hits in consecutive seasons...", 
    possibleAnswers: [{name: "Don Mattingly", img: "./images/DonMattingly.jpg"},
                      {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"},
                      {name: "Lance Johnson", img: "./images/LanceJohnson.jpg"},
                      {name: "Nap Lajoie", img: "./images/NapLajoie.jpg"}],
    correctAnswer: {name: "Lance Johnson", img: "./images/LanceJohnson.jpg"}
    },
    {question: "What 15 year old made his debut in the Majors in 1944?", 
    possibleAnswers: [{name: "Alex George", img: "./images/AlexGeorge.jpg"},
                      {name: "Carl Scheib", img: "./images/CarlScheib.jpg"},
                      {name: "Jim Derrington", img: "./images/JimDerrington.jpg"},
                      {name: "Joe Nuxhall", img: "./images/JoeNuxhall.jpg"}],
    correctAnswer: {name: "Joe Nuxhall", img: "./images/JoeNuxhall.jpg"}
    },
    {question: "Smacked 191 RBIs in 1930 and set a season record...", 
    possibleAnswers: [{name: "Rudy York", img: "./images/RudyYork.jpg"},
                      {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"},
                      {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
                      {name: "Hack Wilson", img: "./images/HackWilson.jpg"}],
    correctAnswer: {name: "Hack Wilson", img: "./images/HackWilson.jpg"}
    },
    {question: "What team won the World Series in the 2000?", 
    possibleAnswers: [{name: "Yankees", img: "./images/yankees_logo.png"},
                      {name: "Marlins", img: "./images/marlins_logo.png"},
                      {name: "Braves", img: "./images/braves_logo.jpg"},
                      {name: "Indians", img: "./images/indians_logo.jpg"}],
    correctAnswer: {name: "Yankees", img: "./images/yankees_logo.png"}
    },
    {question: "The team Sandy Koufax played as a rookie...", 
    possibleAnswers: [{name: "Brooklyn Dodgers", img: "./images/brooklyn_dodgers.jpg"},
                      {name: "Arizona Diamonds", img: "./images/ArizonaDiamonds.jpg"},
                      {name: "Houston Astros", img: "./images/astros.png"},
                      {name: "KC Royals", img: "./images/royals_logo.jpg"}],
    correctAnswer: {name: "Brooklyn Dodgers", img: "./images/brooklyn_dodgers.jpg"}
    },
    {question: "All-time career leader in Major League at-bats...", 
    possibleAnswers: [{name: "Pete Rose", img: "./images/PeteRose.jpg"},
                      {name: "Hank Aaron", img: "./images/HankAaron.jpg"},
                      {name: "Derek Jeter", img: "./images/DerekJeter.jpg"},
                      {name: "Cal Ripken Jr.", img: "./images/CalRipken.jpg"}],
    correctAnswer: {name: "Pete Rose", img: "./images/PeteRose.jpg"}
    },
    {question: "Career leader in Major League Bases on Balls...", 
    possibleAnswers: [{name: "Ted Williams", img: "./images/TedWilliams.jpg"},
                      {name: "Barry Bonds", img: "./images/BarryBonds.jpg"},
                      {name: "Rickey Henderson", img: "./images/RickeyHenderson.jpg"},
                      {name: "Carl Yastrzemski", img: "./images/CarlYastrzemski.jpg"}],
    correctAnswer: {name: "Barry Bonds", img: "./images/BarryBonds.jpg"}
    },
    {question: "Who is the All Time Leader in games saved?", 
    possibleAnswers: [{name: "Trevor Hoffman", img: "./images/TrevorHoffman.jpg"},
                      {name: "Lee Smith", img: "./images/LeeSmith.jpg"},
                      {name: "Francisco Rodriguez", img: "./images/FranciscoRodriguez.jpg"},
                      {name: "Mariano Rivera", img: "./images/MarianoRivera.jpg"}],
    correctAnswer: {name: "Mariano Rivera", img: "./images/MarianoRivera.jpg"}
    },
    {question: "Strikeouts All Time Leader?", 
    possibleAnswers: [{name: "Pedro Martinez", img: "./images/PedroMartinez.jpg"},
                      {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"},
                      {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"},
                      {name: "Roger Clemens", img: "./images/RogersClemens.jpg"}],
    correctAnswer: {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"}
    },
    {question: "First All-Star MVP and World Series MVP (same season)...", 
    possibleAnswers: [{name: "Albert Pujols", img: "./images/AlbertPujols.jpg"},
                      {name: "Ken Griffey Jr.", img: "./images/KenGriffeyJr.jpg"},
                      {name: "Alex Rodriguez", img: "./images/AlexRodriguez.jpg"},
                      {name: "Derek Jeter", img: "./images/DerekJeter.jpg"}],
    correctAnswer: {name: "Derek Jeter", img: "./images/DerekJeter.jpg"}
    },
    {question: "Best winning percentage...", 
    possibleAnswers: [{name: "Clayton Kershaw", img: "./images/ClaytonKershaw.jpg"},
                      {name: "Spud Chandler", img: "./images/SPUDCHANDLER.jpg"},
                      {name: "Pedro Martinez", img: "./images/PedroMartinez.jpg"},
                      {name: "David Price", img: "./images/DavidPrice.jpg"}],
    correctAnswer: {name: "Spud Chandler", img: "./images/SPUDCHANDLER.jpg"}
    },
    {question: "Wins All Time Leaders...", 
    possibleAnswers: [{name: "Bartolo Colon", img: "./images/BartoloColon.jpg"},
                      {name: "CC Sabathia", img: "./images/CCSabathia.jpg"},
                      {name: "Walter Johnson", img: "./images/WalterJohnson.jpg"},
                      {name: "Cy Young", img: "./images/CyYoung.jpg"}],
    correctAnswer: {name: "Cy Young", img: "./images/CyYoung.jpg"}
    },
    {question: "1st player to have 3 games with 3 HR during one season...", 
    possibleAnswers: [{name: "Mickey Mantle", img: "./images/MickeyMantle.jpeg"},
                      {name: "Andres Galarraga", img: "./images/AndresGalarraga.jpg"},
                      {name: "Aaron Judge", img: "./images/judge.jpg"},
                      {name: "Sammy Sosa", img: "./images/SammySosa.jpg"}],
    correctAnswer: {name: "Sammy Sosa", img: "./images/SammySosa.jpg"}
    },

    {question: "1st left-handed pitcher to strike out 20 batters during one game?", 
    possibleAnswers: [{name: "Steve Carlton", img: "./images/SteveCarlton.jpg"},
                      {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"},
                      {name: "Sandy Koufax", img: "./images/SandyKoufax.jpg"},
                      {name: "Tom Glavine", img: "./images/TomGlavine.jpg"}],
    correctAnswer: {name: "Randy Johnson", img: "./images/RandyJohnson.jpg"}
    },
    {question: "Oldest active ball park in Major League Baseball...", 
    possibleAnswers: [{name: "Wrigley Field", img: "./images/wrigleyField.jpg"},
                      {name: "Yankee Stadium", img: "./images/yankeeStadium.jpg"},
                      {name: "Dodger Stadium", img: "./images/DodgerStadium.jpg"},
                      {name: "Fenway Park", img: "./images/fenway.jpg"}],
    correctAnswer: {name: "Fenway Park", img: "./images/fenway.jpg"}
    },
    {question: "Mark McGwire and Sammy Sosa broke which player's 61 home run record?", 
    possibleAnswers: [{name: "Willie Mays", img: "./images/WillieMays.jpg"},
                      {name: "Jose Canseco", img: "./images/JoseCanseco.jpg"},
                      {name: "Roger Maris", img: "./images/ROGERMARIS.jpg"},
                      {name: "Joe DiMaggio", img: "./images/JoeDiMaggio.jpg"}],
    correctAnswer: {name: "Roger Maris", img: "./images/ROGERMARIS.jpg"}
    },
    {question: "Only pitcher who won a World Series game in 3 different decades?", 
    possibleAnswers: [{name: "Whitey Ford", img: "./images/WhiteyFord.jpg"},
                      {name: "Bob Welch", img: "./images/BobWelch.jpg"},
                      {name: "Johnny Podres", img: "./images/JohnnyPodres.jpg"},
                      {name: "Jim Palmer", img: "./images/JIMPALMER.jpg"}],
    correctAnswer: {name: "Jim Palmer", img: "./images/JIMPALMER.jpg"}
    },
    {question: "1st player to pitch a ball over 100 mph?", 
    possibleAnswers: [{name: "Aroldis Chapman", img: "./images/AroldisChapman.jpg"},
                      {name: "Roger Clemens", img: "./images/RogersClemens.jpg"},
                      {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"},
                      {name: "Tom Seaver", img: "./images/TomSeaver.jpg"}],
    correctAnswer: {name: "Nolan Ryan", img: "./images/NolanRyan.jpg"}
    },
    {question: "1st player to have his number retired?", 
    possibleAnswers: [{name: "Charlie Robertson", img: "./images/CharlieRobertson.jpg"},
                      {name: "Babe Ruth", img: "./images/BabeRuth.jpg"},
                      {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"},
                      {name: "Ty Cobb", img: "./images/TyCobb.jpg"}],
    correctAnswer: {name: "Lou Gehrig", img: "./images/LouGehrig.jpg"}
    },
    {question: "Player killed by a pitch from Yankees pitcher Carl Mays?", 
    possibleAnswers: [{name: "Ray Chapman", img: "./images/RAYCHAPMAN.jpg"},
                      {name: "Tony Conigliaro", img: "./images/TonyConigliaro.jpg"},
                      {name: "Bryce Florie", img: "./images/BryceFlorie.jpg"},
                      {name: "Herb Score", img: "./images/HerbScore.jpg"}],
    correctAnswer: {name: "Ray Chapman", img: "./images/RAYCHAPMAN.jpg"}
    },
    {question: "Who holds the record for most hits in a season?", 
    possibleAnswers: [{name: "Lefty O'Doul", img: "./images/LeftyO'Doul.jpg"},
                      {name: "Pete Rose", img: "./images/PeteRose.jpg"},
                      {name: "Ted Williams", img: "./images/TedWilliams.jpg"},
                      {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"}],
    correctAnswer: {name: "Ichiro Suzuki", img: "./images/IchiroSuzuki.jpg"}
    },
];




function shuffleQuestions(arr){
    for (let i = arr.length - 1; i > 0; i--){
     let j = Math.floor(Math.random() * (i + 1));
     [arr[i], arr[j]] = [arr[j], arr[i]];
     }
     return arr;
    }
        shuffleQuestions(trivia);


function startPlaying(){

    let firstCard = document.getElementById('first');
    firstCard.src = trivia[0].possibleAnswers[0].img;
    document.getElementById('first').style.display = 'block';
    let playerName1 = document.querySelector('#card1 > p');
    playerName1.innerHTML = trivia[0].possibleAnswers[0].name;

    let secondCard = document.getElementById('second');
    secondCard.src = trivia[0].possibleAnswers[1].img;
    document.getElementById('second').style.display = 'block';
    let playerName2 = document.querySelector('#card2 > p');
    playerName2.innerHTML = trivia[0].possibleAnswers[1].name;

    let thirdCard = document.getElementById('third');
    thirdCard.src = trivia[0].possibleAnswers[2].img;
    document.getElementById('third').style.display = 'block';
    let playerName3 = document.querySelector('#card3 > p');
    playerName3.innerHTML = trivia[0].possibleAnswers[2].name;

    let fourthCard = document.getElementById('fourth');
    fourthCard.src = trivia[0].possibleAnswers[3].img;
    document.getElementById('fourth').style.display = 'block';
    let playerName4 = document.querySelector('#card4 > p');
    playerName4.innerHTML = trivia[0].possibleAnswers[3].name;

    let quest = document.querySelector('#theQuestion > p');
    quest.innerHTML = trivia[0].question;
    
   }
   startPlaying();

    let rightAnswer = trivia[0].correctAnswer.name;
   console.log(rightAnswer);

 function theCorrectAnswer(){
           $("#cardsboard").children().click(function(){
    
           if($('p', this).html() === rightAnswer){
            $(this).addClass("correctAnswer");
           }
            else{
            $(this).addClass("wrongAnswer");
           }

          
       });
   }



   theCorrectAnswer();