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
    // document.getElementById('results').classList.remove('hidden');
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
    const tottalIncome = document.getElementById('income').value;
    const softwareExpensive = document.getElementById('software').value;
    const courseExpensive = document.getElementById('courses').value;
    const internetExpensive = document.getElementById('internet').value;
    /* condition */
    if(tottalIncome <= 0 || isNaN(tottalIncome)){
        /* Income invalid amount */
        const incomeInvalidAmount = document.getElementById('income-error');
        incomeInvalidAmount.classList.remove("hidden");
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
    
})