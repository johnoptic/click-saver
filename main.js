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

window.onload = function() {
    const incrementInput = document.getElementById('incrementInput');

    // Increment function
    function incrementValue() {
        incrementInput.value = parseFloat(incrementInput.value) + 1 || 1;
    }

    // Decrement function
    function decrementValue() {
        incrementInput.value = Math.max((parseFloat(incrementInput.value) || 0) - 1, 0);
    }

    // Add event listeners to buttons
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    if (incrementButton && decrementButton) {
        incrementButton.addEventListener('click', incrementValue);
        decrementButton.addEventListener('click', decrementValue);
    } else {
        console.error("Increment or Decrement button not found");
    }

    // Prevent form submission on Enter key
    incrementInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });

    // Toggle functionality for your existing code
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


    //Stars Background
    const numStars = 100; // Number of stars
    const body = document.body;

    // Array of colors
    const colors = ['#b1fefe', '#fbc875', '#fb9275'];

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Randomly select a color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = randomColor;

        // Append star to the body
        body.appendChild(star);
    }



};

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


