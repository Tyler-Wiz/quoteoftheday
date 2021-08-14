const button = document.getElementById('btn');  //Grab the button//
const quote = document.getElementById('quote');  //Grab The line that represents the Quote//
const greeting = document.getElementById('state_time');  //Grab the line that greets the user//
let date = new Date();   //get the present date//
let time = date.getHours();   //get time of the day//

// Array with Quote that displays if Time of day is morning// 
const morningQuote = [
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill', 
    'Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers', 
    'We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link'
];

// Array with Quote that displays if Time of day is Afternoon// 
const afternoonQuote = [
    'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi', 
    'Whether You Think You Can Or Think You Can’t, You’re Right. – Henry Ford', 
    'The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb'
];

// Array with Quote that displays if Time of day is Evening// 
const eveningQuote = [
    'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like? – Brian Tracy', 
    'Creativity Is Intelligence Having Fun.” – Albert Einstein (Try Again tomorrow)', 
     'To See What Is Right And Not Do It Is A Lack Of Courage.” – Confucius'
    ];

 
function displayQuote(quotes){
    let mfortune = quotes[Math.floor(Math.random() * quotes.length)];
    return mfortune 
}


function finalQuote(){
     if(time < 12){ 
          greeting.textContent = "Good morning, How are you doing today? ";
          quote.textContent = displayQuote(morningQuote);   //displays function with random quotes in HTML of selected ID//
     } else if(time >= 12 && time <= 18){
         greeting.textContent = "Good Afternoon, How is your day going? ";
         quote.textContent = displayQuote(afternoonQuote); //displays function with random quotes in HTML of selected ID//
     } else {
         greeting.textContent = "Good Evening, How was your day? ";
         quote.textContent = displayQuote(eveningQuote);//displays function with random quotes in HTML of selected ID//
     }
}

// Triggers the function 'finalQuote' on button click event//
button.addEventListener('click', finalQuote);


 
