// ------------------------ card 1 js --------------------------- // 

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
    const div = document.createElement('div');
    div.classList = 'shadow-lg bg-slate-100'
    div.innerHTML = `
    <h1 class="text-2xl font-bold text-center" >Donate for Flood at Noakhali, Bangladesh</h1>
    <p class=" p-10 text-[#111111] opacity-70 text-center">Donated: ${addMoney} TK. to Donate for Flood at Noakhali, Bangladesh</p>

    `

    document.getElementById('history-section').appendChild(div);
})

// ------------------------ card 2 js --------------------------- // 

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

    const div2 = document.createElement('div');
    div2.classList = 'shadow-lg  bg-gray-300';
    div2.innerHTML = `
    <h1 class="text-2xl font-bold text-center" >Donate for Flood Relief in Feni,Bangladesh</h1>
    <p class=" p-10 text-[#111111] opacity-70 text-center">Donated: ${addMoney} TK. to Donate for Flood Relief in Feni,Bangladesh</p>

    `

    document.getElementById('history-section').appendChild(div2);

})


// ------------------------ card 3 js --------------------------- // 


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

    const div3 = document.createElement('div');
    div3.classList = 'bg-red-100 shadow-lg'; 
    div3.innerHTML = `
    <h1 class="text-2xl font-bold text-center" >Aid for Injured in the Quota Movement</h1>
    <p class=" p-10 text-[#111111] opacity-70 text-center ">Donated: ${addMoney} TK. to Aid for Injured in the Quota Movement</p>

    `

    document.getElementById('history-section').appendChild(div3);

})