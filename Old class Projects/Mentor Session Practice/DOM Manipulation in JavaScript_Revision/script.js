// 1. Manipulating heading text
const header = document.getElementById('myHeading') // Select heading element, getElementById
header.innerText = 'Hello World' // EXPLAIN USE OF += & INNERTEXT #1d73bf
header.style.color = '#1d73bf' // Applying styles


// 2. Manipulating paragraph text

const paragraphs = document.getElementsByTagName('p'); // Selecting all p elements, getElementsByTagName
// Find how many p elements are there
paragraphs[0].innerText = 'this is the first paragragh tag' // Overwrite the text of 1st p tag
// 3. Manipulating image
const balloonImage = document.getElementById('Img'); // Select image element
const hyperlink = document.getElementById('hyperlink'); // Select hyperlink image
hyperlink.setAttribute('href', 'https://en.wikipedia.org/wiki/Hot_air_balloon');

// Events and Event Handling - Hover effect on image
balloonImage.addEventListener('mouseover', function () {
    balloonImage.style.borderRadius = '50%';
});
balloonImage.addEventListener('mouseout', function () {
    balloonImage.style.borderRadius = '0';
});
// Events and Event Handling - Alternating image on click
balloonImage.addEventListener('click', function () {
    if (balloonImage.className == 'one') {
        balloonImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Cloudhoppers.jpg/330px-Cloudhoppers.jpg';
        balloonImage.className = 'two';

    }
    else {
        balloonImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2006_Ojiya_balloon_festival_011.jpg/270px-2006_Ojiya_balloon_festival_011.jpg';
        balloonImage.className = 'one';
    }
})


// 4. Manipulating list
const listItems = document.querySelectorAll('#parentList li');
const firstListItem = listItems[0];
firstListItem.innerHTML = "<b>LIST ITEM 1</b>"
firstListItem.classList.add('highlight');


// 5. Manipulating table
const table = document.querySelector('#mytable')
const newRow = document.createElement('tr');
const newCell1 = document.createElement('td');
newCell1.innerHTML = 'Draco';
const newCell2 = document.createElement('td');
newCell2.innerHTML = '14';
newRow.appendChild(newCell1);
newRow.appendChild(newCell2);
table.appendChild(newRow);

// 6. Manipulating form
const form = document.getElementById('myForm'); // Select form element
form.elements.fullname.placeholder = "Enter your fullname here"; // Add a placeholder to fullname element
// Events and Event Handling - Form submission event
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent reloading the form on submission
    const username = form.elements.username.value;
    // Validating user input
    if (username === '') {
        alert('Please enter a username');
    }
    else {
        form.elements.username.value = '';
    }
});