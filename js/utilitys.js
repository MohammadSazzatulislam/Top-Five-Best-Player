function similar(elementFieldId){
    const elementField = document.getElementById(elementFieldId);
    const element = parseFloat(elementField.value);
    return element;
}

function anotherSimilar(elementTextId){
    const elementText = document.getElementById(elementTextId);
    const element = parseFloat(elementText.innerText);
    return element;
}

function setAmount(elementId, value){
    const totalAmount = document.getElementById(elementId);
    totalAmount.innerText = value;
}