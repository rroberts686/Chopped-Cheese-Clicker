let myButton = document.getElementById("myButton")
let bttnDisplay = document.getElementById("buttonDisplay")

let resetBttn = document.getElementById("reset")

let myCounter = document.getElementById("counter");

let count = 0;
let autoCount = 0;
let countMulti = 1;
let multiPrice = 100;
let autoPrice = 100;

// Use this for the decimal places variable.toFixed()

function startCounter(){
    count+= countMulti;
   myCounter.innerHTML = "Number of Chopped Cheeses: " + count 
   
   }
   //making the multiplier
let multiplierButton = document.getElementById('buymulti') 
multiplierButton.addEventListener('click', increaseMulti) 


function increaseMulti() {
    
    if(count >= multiPrice){
        let countMulti = 1;
        countMulti = countMulti * 1.2; 
        count -= multiPrice; 
        multiPrice = multiPrice * 1.1;
        multiPriceItem.innerHTML= "Multi Clicker Price: " + multiPrice;
        myCounter.innerHTML = "Number of Chopped Cheeses: " + count 
        bttnDisplay.innerHTML="Chopped Cheeses Per Click: " + countMulti
    } else if(count<multiPrice){
        alert("Not enough Chopped Cheeses to purchase!")
    }

}
let autoButton = document.getElementById("buycounter");

let newBttn = document.getElementById("newButton");
let secretWords = document.getElementById("secret");
const buttonSound = document.getElementById("buttonSound");
function clickButton() { 
buttonSound.
    count = count + 500;
secretWords.innerHTML="Sureee Sureee!" 
alert("You now receive 500 chopped cheeses the ocky way!")
}
newBttn.addEventListener("click", clickButton)
myButton.addEventListener("click", startCounter)
bttnDisplay.innerHTML="Chopped Cheeses Per Click: " + countMulti
let interval;

//making the auto counter
function autoCounter(){
    if(count >= autoPrice){
        autoCount++
        autoCount = autoCount * countMulti;
        autoButton.innerHTML="Auto Clickers in effect: "+ autoCount
       interval = setInterval(startCounter, 1000);
        count -= autoPrice; 
        autoPrice = autoPrice * 1.1;
        autoPriceItem.innerHTML= "Auto Clicker Price: " + autoPrice;
        myCounter.innerHTML = "Number of Chopped Cheeses: " + count 
        
    } else if(count < autoPrice){ 
        
        alert("Not enough Chopped Cheeses to purchase!")
    }
    
}

autoButton.addEventListener("click", autoCounter)
//adding the price list
let priceList = document.getElementById("prices");
let autoPriceItem = document.createElement("li") 
autoPriceItem.innerHTML= "Auto Clicker Price: " + autoPrice;
priceList.appendChild(autoPriceItem); 
let multiPriceItem = document.createElement("li") 
multiPriceItem.innerHTML= "Multi Clicker Price: " + multiPrice;
priceList.appendChild(multiPriceItem);

//making a reset button 
function resetGame(){
    count = 0;
    
    countMulti = 1;
    autoCount = 0;
     
    
    multiPrice = 100;
    autoPrice = 100; 
    clearInterval(interval); 
    myCounter.innerHTML = "Number of Chopped Cheeses: " + count
    multiPriceItem.innerHTML= "Multi Clicker Price: " + multiPrice;
    autoPriceItem.innerHTML= "Auto Clicker Price: " + autoPrice; 
    autoButton.innerHTML="Auto Clickers in effect: "+ autoCount;
    bttnDisplay.innerHTML="Chopped Cheeses Per Click: " + countMulti;
    
}
resetBttn.addEventListener("click", resetGame)

