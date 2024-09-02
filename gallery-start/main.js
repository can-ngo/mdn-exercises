const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const altTexts = {
    [filenames[0]]: 'Closeup to human eye',
    [filenames[1]]: 'Closeup to granite rock',
    [filenames[2]]: 'Purple flowers',
    [filenames[3]]: 'Acient Egypt picture',
    [filenames[4]]: 'A butterfly'
}

/* Looping through images */
filenames.forEach((image, i) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${image}`);
    newImage.setAttribute('alt', `${altTexts.image}`);
    thumbBar.appendChild(newImage);

    //Click event on each newImage
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `${newImage.getAttribute('src')}`);
    })
})


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken') {
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = '';
    }
})