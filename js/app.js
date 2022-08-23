
let cardArray = [];

function cardButton(element){
    const cardTitle = element.parentNode.children[0].innerText;
    cardArray.push(cardTitle);
    buttonDisabled(element)

    document.getElementById('list-number').innerText = cardArray.length;

    const tableBody = document.querySelector('.add-table');
    tableBody.innerHTML = '';
    
    for(let i = 0; i < cardArray.length; i++){
        const element = cardArray[i];
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th id="table-number">${i+1}.</th>
            <td>${element}</td>
        `;

        tableBody.appendChild(tr);
}
    tableNumberCalculate()
}


function buttonDisabled(element){
    const button = element.disabled = true;
    if(button == true){
        const buttonColor = element.classList;
        buttonColor.add('button-color')
    }
}


let number = [];
function tableNumberCalculate(){
    const numberTotal = document.getElementById('table-number')
    number.push(numberTotal);
    const tableBody = document.querySelector('.add-table');
    const listNumber = document.getElementById('list-number');
    if(number.length > 5){
        alert('card is full try again');
        tableBody.innerHTML = '';
        listNumber.innerText = 0;
    }
    
}

document.getElementById('calculate-button').addEventListener('click', function(){
    errorHandle()
    const perPlayerAmount = similar('per-Player-field');
    const totalAmount = perPlayerAmount * parseFloat(number.length);
    const playerExpenses = setAmount('total-player-cost', totalAmount);

})

document.getElementById('calculate-total-button').addEventListener('click', function(){
    errorHandle()
    const playerExpenses = anotherSimilar('total-player-cost');
    const managerAmount = similar('manager-amount');
    const coachAmount = similar('coach-amount');
    const totalPlayerAmount = playerExpenses + managerAmount + coachAmount;
    const playerTotalAmount = setAmount('player-total-amount',totalPlayerAmount );

})


function errorHandle(){
    const perPlayerAmount = document.getElementById('per-Player-field');
    const playerAmount = parseFloat(perPlayerAmount.value);
    const managerTotalAmount = document.getElementById('manager-amount');
    const managerAmount = parseFloat(managerTotalAmount.value);
    const coachTotalAmount = document.getElementById('coach-amount');
    const coachAmount = parseFloat(coachTotalAmount.value);
    const totalPlayerCost = document.getElementById('total-player-cost');
    const playerCost = parseFloat(totalPlayerCost.innerText)
    const totalPlayerAmount = document.getElementById('player-total-amount');
    const totalAmount = parseFloat(totalPlayerAmount.innerText)

    if(isNaN(perPlayerAmount.value) || perPlayerAmount.value === '' || playerAmount < 0){
        if(isNaN(managerTotalAmount.value) || managerTotalAmount.value === '' || managerAmount < 0){
            if(isNaN(coachTotalAmount.value) || coachTotalAmount.value === '' || coachAmount < 0){
                alert('Wrong input please enter a valid number');
                perPlayerAmount.value = '';
                managerTotalAmount.value = '';
                coachTotalAmount.value = '';
                totalPlayerCost.innerText = 00; 
                totalPlayerAmount.innerText = 00;
            }
        }
    }
    
}


