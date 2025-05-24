document.getElementById('donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    // main amount 
    const mainAmount = donationInnerText('#main-amount');
    const mainAmountHidden = donationInnerText('#main-amount-hidden');

    //    donate input
    const addMoney = inputFieldId('#noakhali-input');

    //    where donated
    const donateHolder = donationInnerText('#noakhali-amount');

    // sum
    const mainBalance = mainAmount - addMoney;
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('noakhali-amount').innerText = newAmount;
    alert('Thanks for money')

    // transaction history
    
})
document.getElementById('flood-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // main amount 
    const mainAmount = donationInnerText('#main-amount');
    const mainAmountHidden = donationInnerText('#main-amount-hidden');

    //    donate input
    const addMoney = inputFieldId('#input-flood');

    //    where donated
    const donateHolder = donationInnerText('#flood-balance');

    // sum
    const mainBalance = mainAmount - addMoney;
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('flood-balance').innerText = newAmount;
    alert('Thanks for money')
})
document.getElementById('aid-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // main amount 
    const mainAmount = donationInnerText('#main-amount');
    const mainAmountHidden = donationInnerText('#main-amount-hidden');

    //    donate input
    const addMoney = inputFieldId('#aid-input');

    //    where donated
    const donateHolder = donationInnerText('#aid-balance');

    // sum
    const mainBalance = mainAmount - addMoney;
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('aid-balance').innerText = newAmount;

    alert('Thanks for money')

})