const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');
const startBtn = document.querySelector('.startBtn');

let welcomDisplay = document.querySelector('div.welcome')
let containerDisplay = document.querySelector('div.container')
let financeBar = document.querySelector('.financeBar'); // financeBar.style.width = "20%"
let moraleBar = document.querySelector('.moraleBar');
let researchBar = document.querySelector('.researchBar');

startBtn.addEventListener('click', () => {
    welcomDisplay.style.display = 'none'
    containerDisplay.style.display = 'grid'
})