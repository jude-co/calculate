const foodPrice = document.querySelector('.price');
const foodTip = document.querySelector('.tip');
const numOfPeople = document.querySelector('.Num');
const clearAll = document.querySelector('.clearBtn');

function Calc(){
    let tip = (foodPrice.valueAsNumber) * (foodTip.value / 100);
    let totalAmount = (foodPrice.valueAsNumber) + (tip);
    let tipPerPerson = tip / numOfPeople.value;
    let totalPerPerson = totalAmount / numOfPeople.value;
   
    
    if (foodPrice.valueAsNumber=="" || foodTip.value=="" || numOfPeople.value=="") {
        setTimeout(() => {
            document.querySelector('h2').textContent = "Try this again and i will bite you.";
            document.querySelector('h2').style.textAlign = "center"
            setTimeout(() => {
                header.textContent = "";
            }, 1500)
        }, 100)
        
      } else{
        document.querySelector('.bar1').innerHTML = "Tip:";
        document.querySelector('.bar5').innerHTML = "$" + tip;

        document.querySelector('.bar2').innerHTML = "Total Amount:";
        document.querySelector('.bar6').innerHTML = "$" + totalAmount;

        document.querySelector('.bar3').innerHTML = "Tip Per Person:";
        document.querySelector('.bar7').innerHTML = "$" + tipPerPerson;

        document.querySelector('.bar4').innerHTML = "Total Per Person:";
        document.querySelector('.bar8').innerHTML = "$" + totalPerPerson;

        document.querySelector('h2').innerHTML = "RESULT";
        document.querySelector('h2').style.backgroundColor = "#518428";
        document.querySelector('h2').style.color = "#ffffff";
        document.querySelector('h2').style.padding = "10px";
      }
}

let inputs = document.querySelectorAll('input');

clearAll.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');

    document.querySelector('h2').innerHTML = '';
    document.querySelector('h2').style = '';

    document.querySelector('.bar1').innerHTML = '';
    document.querySelector('.bar5').innerHTML = '';

    document.querySelector('.bar2').innerHTML = '';
    document.querySelector('.bar6').innerHTML = '';

    document.querySelector('.bar3').innerHTML = '';
    document.querySelector('.bar7').innerHTML = '';
    
    document.querySelector('.bar4').innerHTML = '';
    document.querySelector('.bar8').innerHTML = '';
});