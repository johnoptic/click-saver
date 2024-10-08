const imgArray = [
    './newImgs/earth0.png',
    './newImgs/earth1.png',
    './newImgs/earth2.png',
    './newImgs/earth3.png',
    './newImgs/earth4.png',
    './newImgs/earth5.png',
    './newImgs/earth6.png',
    './newImgs/earth7.png',
    './newImgs/earth8.png',
    './newImgs/earth9.png',
    './newImgs/earth10.png',
    './newImgs/earth11.png'
];
let index = 0;
let animPlay = false;
let intervalId = null;
let increment = 0;

let money = 0;
let numDays = 0;
let numWeeks = 0;
let numMonths = 0;
let numYears = 0;

incrementInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

const toggler = document.getElementById('btnToggle');
toggler.addEventListener('click', () => {
    if (!animPlay) {
        let inputValue = incrementInput.value;
        if (!isNaN(inputValue) && inputValue >= 0) {
            increment = Number(inputValue);
        } else {
            alert("Please enter a valid positive number");
            return;
        }
        document.getElementById('moneyAmount').textContent = money;
    }

    animPlay = !animPlay;
    if (animPlay) {
        intervalId = setInterval(imgUpdate, 50);
    } else {
        clearInterval(intervalId);
    }
});

function imgUpdate() {
    document.getElementById('image').src = imgArray[index];
    document.getElementById('days').textContent = numDays;
    document.getElementById('weeks').textContent = numWeeks;
    document.getElementById('months').textContent = numMonths;
    document.getElementById('years').textContent = numYears;
    document.getElementById('moneyAmount').textContent = money;
    index = (index + 1) % imgArray.length;
    if (index === 11) {
        money += increment;
        numDays += 1;
        numWeeks = Math.floor(numDays / 7);
        numMonths = Math.floor(numDays / 30);
        numYears = Math.floor(numDays / 365);
    }
}
