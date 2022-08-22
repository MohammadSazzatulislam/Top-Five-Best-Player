
let cardArray = [];

function cardButton(element){
    
    const cardTitle = element.parentNode.children[0].innerText;

    cardArray.push(cardTitle);

    const secectedCard = document.getElementById('addToSelectedCard');
    secectedCard.innerHTML = '';
    
    for(let i = 0 ; i < cardArray.length; i++){
        const index = cardArray[i];

        const tableCreate = document.createElement('table')
        tableCreate.innerHTML = `
            <tbody>
                <tr>
                    <th id ="thNumber">${i+1}.</th>
                    <td>${index}</td>
                </tr>
            </tbody>
        `; 
        secectedCard.appendChild(tableCreate);  
    } 
    numberCalculate()
}


let number = [];
function numberCalculate(){
    const numberTotal = document.getElementById('thNumber')
    number.push(numberTotal);
    const secectedCard = document.getElementById('addToSelectedCard');
    if(number.length > 5){
        alert('card is full');
        secectedCard.innerHTML = '';
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