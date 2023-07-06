const initial = document.querySelector('#in-price');
const stocks = document.querySelector('#stocks');
const current = document.querySelector('#curr-price');
const checkBtn = document.querySelector('#btn');
const output = document.querySelector('#output-div');

checkBtn.addEventListener('click', () => {
    const ini = Number(initial.value);
    const curr = Number(current.value);
    const stks = Number(stocks.value);

    if(ini && curr && stks){
        calculatePNL(ini,curr,stks);

    } else{
        output.style.display = "block";  
        output.innerText = "Please fill every field";
        output.style.color = "white";
    }
    

});

function calculatePNL(ini,curr,stks){

   
    if(ini > curr){
        var loss = (ini - curr) * stks;
        var lossper = (loss/ini) * 100;
        output.style.display = "block"; 
        output.innerText = `Oops! the loss is -${loss} and loss percentage is ${lossper.toFixed(2)}%` 
        output.style.color = "red";

    }else if(curr > ini){

        var profit = (curr - ini) * stks;
        var profitper = (profit/ini) * 100;
        output.style.display = "block"; 
        output.innerText = `Yay! the profit is ${profit} and profit percentage is ${profitper.toFixed(2)}%`
        output.style.color = "#4ade80";
    }
    else{

        output.style.display = "block"; 
        output.innerText = "No pain no gain, no gain no pain!";
        output.style.color = "white";
    
    }
}