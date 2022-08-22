
let cardArray = [];

function cardButton(element){
    
    const cardTitle = element.parentNode.children[0].innerText;

    cardArray.push(cardTitle);

    const secectToAddCards = document.getElementById('add-table-row');
    secectToAddCards.innerHTML = '';
    
    for(let i = 0 ; i < cardArray.length; i++){
        const index = cardArray[i];

        const tableRawCreate = document.createElement('tr')
        tableRawCreate.innerHTML = `
            <th id ="table-number">${i+1}.</th>
            <td>${index}</td>
        `; 
        secectToAddCards.appendChild(tableRawCreate);  
    } 
    tableNumberCalculate()
}


let number = [];
function tableNumberCalculate(){
    const numberTotal = document.getElementById('table-number')
    number.push(numberTotal);
    const secectToAddCards = document.getElementById('add-table-row');
    if(number.length > 5){
        alert('card is full');
        secectToAddCards.innerHTML = '';
    }
    
}

document.getElementById('calculate-button').addEventListener('click', function(){

    const perPlayerAmount = similar('per-Player-field');
    const totalAmount = perPlayerAmount * parseFloat(number.length);
    const playerExpenses = setAmount('total-player-cost', totalAmount);

})

document.getElementById('calculate-total-button').addEventListener('click', function(){

    const playerExpenses = anotherSimilar('total-player-cost');
    const managerAmount = similar('manager-amount');
    const coachAmount = similar('coach-amount');
    const totalPlayerAmount = playerExpenses + managerAmount + coachAmount;
    const playerTotalAmount = setAmount('player-total-amount',totalPlayerAmount );

})


