// get bill amount and number of people

const billInput = document.getElementById('total-bill-input')
let bill 

const peopleInput = document.getElementById('total-people-input')
let people

const custTipInput = document.getElementById('custom-tip')
let custTip

function getValue (e) {
    if (e.target === billInput) {
        bill = parseFloat(billInput.value)
    } else if (e.target === peopleInput) {
        people = parseInt(peopleInput.value, 10)
    } else if (e.target === custTipInput) {
        custTip = custTipInput.value
    }
}

billInput.addEventListener('input', getValue)
peopleInput.addEventListener('input', getValue)
custTipInput.addEventListener('input', getValue)
custTipInput.addEventListener('input', handleCustTip)
peopleInput.addEventListener('input', getTotals)
billInput.addEventListener('input', getTotals)
custTipInput.addEventListener('blur', getTotals)
billInput.addEventListener('blur', checkFields)
peopleInput.addEventListener('blur', checkFields)
resetBtn.addEventListener('click', reset)

let percentageBtns
document.addEventListener('DOMContentLoaded', () => { // wait for DOM content to load, then add event listener to each button
    percentageBtns = document.getElementsByClassName('perc-btn')

    for(let i = 0; i < percentageBtns.length; i++) {
        percentageBtns[i].addEventListener('click', getPercentage)
        percentageBtns[i].addEventListener('click', getTotals)

    }

})


// get tip percentage

let tipPercentage

function getPercentage (e) {
    tipPercentage = parseInt(e.target.value, 10)
    for(let i = 0; i < percentageBtns.length; i++) {
        if (percentageBtns[i].value == tipPercentage) {
            percentageBtns[i].classList.add('selected')
        } else {
            percentageBtns[i].classList.remove('selected')
        }
    }
}

function handleCustTip (e) {
    if (e.target === custTipInput) {
        tipPercentage = e.target.value
    }
}

// get tip and total /person

let tipPerPerson = document.getElementsByClassName('end-calc-tip')[0]
let totalPerPerson = document.getElementsByClassName('total')[0]
let totalTip




function getTotals (e) {
    totalTip = bill * (tipPercentage/100)
    if (tipPercentage > 0 && bill > 0 && people > 0) {
        tipPerPerson.innerHTML = formatter.format((totalTip / people))
        totalPerPerson.innerHTML = formatter.format((bill + totalTip) / people)
    }
}

let formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD'
})


// reset 

const resetBtn = document.getElementsByClassName('reset-btn')[0]


function reset () {
    billInput.value = ''
    peopleInput.value = ''
    for(let i = 0; i < percentageBtns.length; i++) {
        percentageBtns[i].classList.remove('selected')
    }
    custTipInput.value = ''
    tipPerPerson.innerHTML = '--'
    totalPerPerson.innerHTML = '--'
}

// check for empty fields


function checkFields (e) {
    if (e.target.value < 1) {
        e.target.classList.add('empty')
        if (e.target === billInput) {
            document.getElementsByClassName('error')[0].classList.remove('hidden')
        } else if (e.target === peopleInput) {
            document.getElementsByClassName('error')[1].classList.remove('hidden')
        }
    } else {
        e.target.classList.remove('empty')
        if (e.target === billInput) {
            document.getElementsByClassName('error')[0].classList.add('hidden')
        } else if (e.target === peopleInput) {
            document.getElementsByClassName('error')[1].classList.add('hidden')
        }
    }
}
