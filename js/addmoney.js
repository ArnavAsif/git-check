document.getElementById('donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    // main amount 
    const mainAmount = donationInnerText('#main-amount');
    const mainAmountHidden = donationInnerText('#main-amount-hidden');

    //    donate input
    const addMoney = inputFieldId('#noakhali-input');

    //    where donated
    const donateHolder = donationInnerText('#noakhali-amount');
    if (isNaN(addMoney)) {
        alert('Type Number');
        return;
    }

    // sum
    const mainBalance = mainAmount - addMoney;
    if (addMoney > mainAmount) {
        alert('not enough money');
        return;
    }
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('noakhali-amount').innerText = newAmount;
    alert('Thanks for money')


    // transaction history
    const p = document.createElement('p');
    p.innerHTML = `
    <p class="shadow-lg p-10 text-[#111111] opacity-70 text-center">Donated: ${addMoney} TK. to Donate for Flood at Noakhali, Bangladesh</p>

    `

    document.getElementById('history-section').appendChild(p);
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
    if (isNaN(addMoney)) {
        alert('Type Number');
        return;
    }
    // sum
    const mainBalance = mainAmount - addMoney;
    if (addMoney > mainAmount) {
        alert('not enough money');
        return;
    }
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('flood-balance').innerText = newAmount;
    alert('Thanks for money')

    const p2 = document.createElement('p');
    p2.innerHTML = `
    <p class="shadow-lg p-10 text-[#111111] opacity-70 text-center">Donated: ${addMoney} TK. to Donate for Flood Relief in Feni,Bangladesh</p>

    `

    document.getElementById('history-section').appendChild(p2);

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
    if (isNaN(addMoney)) {
        alert('Type Number');
        return;
    }
    // sum
    const mainBalance = mainAmount - addMoney;
    if (addMoney > mainAmount) {
        alert('not enough money');
        return;
    }
    document.getElementById('main-amount').innerText = mainBalance;
    const mainBalanceHidden = mainAmount - addMoney;
    document.getElementById('main-amount-hidden').innerText = mainBalance;
    const newAmount = donateHolder + addMoney;
    document.getElementById('aid-balance').innerText = newAmount;

    alert('Thanks for money')

    const p3 = document.createElement('p');
    p3.innerHTML = `
    <p class="shadow-lg p-10 text-[#111111] opacity-70 text-center">Donated: ${addMoney} TK. to Aid for Injured in the Quota Movement</p>

    `

    document.getElementById('history-section').appendChild(p2);

})