const button = document.getElementById('btn');
const hello = document.getElementById('day');
const quote = document.getElementById('quote');
const greeting = document.getElementById('state_time');
let date = new Date();
let time = date.getHours();

const morningQuote = ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill', 'Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers', 'We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link'];

const afternoonQuote = ['It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi', 'Whether You Think You Can Or Think You Can’t, You’re Right. – Henry Ford', 'The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb'];

const eveningQuote = ['Imagine Your Life Is Perfect In Every Respect; What Would It Look Like? – Brian Tracy', 'Creativity Is Intelligence Having Fun.” – Albert Einstein (Try Again tomorrow)',  'To See What Is Right And Not Do It Is A Lack Of Courage.” – Confucius'];

randomEvening = eveningQuote[Math.floor(Math.random() * eveningQuote.length)]
randomAfternoon = afternoonQuote[Math.floor(Math.random() * afternoonQuote.length)]
 
function morning(){
    let mfortune = morningQuote[Math.floor(Math.random() * morningQuote.length)];
    return mfortune 
}

function afternoon(){
    let afortune = afternoon[Math.floor(Math.random() * morningQuote.length)];
    return afortune 
}

function evening(){
    let efortune = eveningQuote[Math.floor(Math.random() * morningQuote.length)];
    return efortune 
}

function finalQuote(){
      if(time < 12){
          greeting.style.display = 'block';
          greeting.textContent = "Good morning, How are you doing today? ";
          quote.style.display = 'block';
          quote.textContent = morning();
     } else if(time > 12 && time <= 16){
         greeting.style.display = 'block';
         greeting.textContent = "Good Afternoon, How is your day going? ";
         quote.style.display = 'block';
         quote.textContent = afternoon();
     } else {
         greeting.style.display = 'block';
         greeting.textContent = "Good Evening, How was your day? ";
         quote.style.display = 'block';
         quote.textContent = evening();
     }
}



button.addEventListener('click', finalQuote);


 