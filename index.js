const button = document.getElementById('btn');  //Grab the button//
const quote = document.getElementById('quote');  //Grab The line that represents the Quote//
const greeting = document.getElementById('state_time');  //Grab the line that greets the user//
let date = new Date();   //get the present date//
let time = date.getHours();   //get time of the day//

// Array with Quote that displays if Time of day is morning// 
const morningQuote = ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill', 'Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers', 'We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link'];

// Array with Quote that displays if Time of day is Afternoon// 
const afternoonQuote = ['It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi', 'Whether You Think You Can Or Think You Can’t, You’re Right. – Henry Ford', 'The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb'];

// Array with Quote that displays if Time of day is Evening// 
const eveningQuote = ['Imagine Your Life Is Perfect In Every Respect; What Would It Look Like? – Brian Tracy', 'Creativity Is Intelligence Having Fun.” – Albert Einstein (Try Again tomorrow)',  'To See What Is Right And Not Do It Is A Lack Of Courage.” – Confucius'];

// functions pick random quote from the array morningQuote//
function morning(){
    let mfortune = morningQuote[Math.floor(Math.random() * morningQuote.length)];
    return mfortune 
}

// functions pick random quote from the array afternoonQuote//
function afternoon(){
    let afortune = afternoon[Math.floor(Math.random() * morningQuote.length)];
    return afortune 
}

// functions pick random quote from the array eveningQuote//
function evening(){
    let efortune = eveningQuote[Math.floor(Math.random() * morningQuote.length)];
    return efortune 
}

function finalQuote(){
      if(time < 12){
          greeting.style.display = 'block';  // displays hidden greeting h2 tag//
          greeting.textContent = "Good morning, How are you doing today? ";
          quote.style.display = 'block'; 
          quote.textContent = morning();   //displays function with random quotes in HTML of selected ID//
     } else if(time > 12 && time <= 18){
         greeting.style.display = 'block';  // displays hidden greeting h2 tag//
         greeting.textContent = "Good Afternoon, How is your day going? ";
         quote.style.display = 'block';  
         quote.textContent = afternoon(); //displays function with random quotes in HTML of selected ID//
     } else {
         greeting.style.display = 'block';  // displays hidden greeting h2 tag//
         greeting.textContent = "Good Evening, How was your day? ";
         quote.style.display = 'block';
         quote.textContent = evening();//displays function with random quotes in HTML of selected ID//
     }
}


// Triggers the function 'finalQuote' on button click event//
button.addEventListener('click', finalQuote);


 