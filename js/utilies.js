function inputFieldId(id){
   const inputValue = document.querySelector(id).value;
   const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};

function donationInnerText(id){
    const innerTextValue = document.querySelector(id).innerText;
    const innerTextvalueNumber = parseFloat(innerTextValue)
    return innerTextvalueNumber;
};

function showSection(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')

}