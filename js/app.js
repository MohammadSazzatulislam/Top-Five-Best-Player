
let cardArray = [];

function cardButton(element){
    
    const cardTitle = element.parentNode.children[0].innerText;
    const cardTitles = element.parentNode.children[2];
    cardTitles.style.visibility = 'hidden';

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
