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


// get tip percentage

let tipPercentage

document.addEventListener('DOMContentLoaded', () => { // wait for DOM content to load, then add event listener to each button
    const percentageBtns = document.getElementsByClassName('perc-btn')

    for(let i = 0; i < percentageBtns.length; i++) {
        percentageBtns[i].addEventListener('click', getPercentage)
        percentageBtns[i].addEventListener('click', getTotalTip)

    }

})
custTipInput.addEventListener('click', getPercentage)

function getPercentage (e) {
    if (e.target === custTip) {
        tipPercentage = parseFloat(custTip)
    }
    tipPercentage = parseInt(e.target.value, 10)
    console.log(typeof tipPercentage)
}


// get total tip amount 


let totalTip

function getTotalTip () {
        totalTip = bill * (tipPercentage/100)
        console.log(totalTip)
}

// get tip /person

let tipPerPerson = document.getElementsByClassName('end-calc-tip')[0]

peopleInput.addEventListener('input', getTipPerPerson)



function getTipPerPerson () {
    tipPerPerson.innerHTML = totalTip / people
    console.log(tipPerPerson.innerHTML)
}


// get total per person

let totalPerPerson = document.getElementsByClassName('total')[0]

function getTotalPerPerson () {
    totalPerPerson.innerHTML = (bill + totalTip) / people
}

peopleInput.addEventListener('input', getTotalPerPerson)
