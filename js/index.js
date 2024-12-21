/* history button dom manupulation */
const assistantBtn = document.getElementById('assistant-tab');
const historyBtn = document.getElementById('history-tab');
/* add-even-listener */
/* history btn */
document.getElementById('history-tab').addEventListener('click', function(){
    historyBtn.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    document.getElementById('expense-form').classList.add("hidden");
    document.getElementById('history-section').classList.remove('hidden');
    assistantBtn.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
});

/* assistant btn */
document.getElementById('assistant-tab').addEventListener('click', function(){
    assistantBtn.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    document.getElementById('expense-form').classList.remove("hidden")
    historyBtn.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    document.getElementById('history-section').classList.add('hidden');
});


/* calculator btn */
document.getElementById('calculate').addEventListener('click', function(){
    const tottalIncome = parseFloat(document.getElementById('income').value);
    const softwareExpensive = parseFloat(document.getElementById('software').value);
    const courseExpensive = parseFloat(document.getElementById('courses').value);
    const internetExpensive = parseFloat(document.getElementById('internet').value);

    /* condition */
    if(tottalIncome <= 0 || isNaN(tottalIncome)){
        /* Income invalid amount */
        const incomeInvalidAmount = document.getElementById('income-error');
        incomeInvalidAmount.classList.remove("hidden");
        
        // document.getElementById('results').classList.add('hidden')

        document.getElementById('income').value = '';
    }
    if(softwareExpensive > tottalIncome || isNaN(softwareExpensive)){
        const softwareInvalidAmount = document.getElementById('software-error');
        softwareInvalidAmount.classList.remove('hidden');
    }
    if(courseExpensive > tottalIncome || isNaN(courseExpensive)){
        const courseInvalidAmount = document.getElementById('courses-error');
        courseInvalidAmount.classList.remove('hidden');
    }
    if(internetExpensive > tottalIncome || isNaN(internetExpensive)){
        const interInvalidAmount = document.getElementById('internet-error');
        interInvalidAmount.classList.remove('hidden');
    }

    /* software account */
    const tottalExpensive = softwareExpensive + courseExpensive + internetExpensive;
    const expensiveMinus = tottalIncome - tottalExpensive;
// console.log(tottalExpensive,expensiveMinus)
    const tottalExpensiveDoom = document.getElementById('total-expenses');
    tottalExpensiveDoom.innerText = tottalExpensive;


    let tottalBalance = document.getElementById('balance');
    tottalBalance.innerText = expensiveMinus;
    


    document.getElementById('results').classList.remove('hidden');




    /* history section added  */
    const createDiv = document.createElement('div');
    createDiv.className = "bg-white p-3 border-2 border-indego-500 space-y-4 rounded-lg";
    createDiv.innerHTML = `
<p class="text-xs font-normal text-black"></p>
<h3 class="text-xs text-black bg-white font-bold">${new Date()}</h3>
<h3 class="text-xs text-black bg-white font-bold">Tottal expensive: ${tottalExpensive}</h3>
<h3 class="text-xs text-black bg-white font-bold">Tottal balance: ${expensiveMinus}</h3>

    `
const added = document.getElementById('history-list');
added.appendChild(createDiv)

});

  /* saving account */
  document.getElementById('calculate-savings').addEventListener('click', function(){
     


    const reamingElement = document.getElementById('remaining-balance')
    const savingElement = Number(document.getElementById('savings').value);
    const balanceElement = Number(document.getElementById('balance').innerText);
    const savingAmountElement = document.getElementById('savings-amount');
    

    const savingAmount = balanceElement * savingElement / 100;
     
    savingAmountElement.innerText = savingAmount;

    const tottalReamingBalance = balanceElement - savingAmount;

    reamingElement.innerText = tottalReamingBalance;
    



    /* history  */


  })