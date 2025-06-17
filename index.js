// THE CROSS FADE EFFECT

/* In this project you will make the simple slideshow a little more complex. It will use a CSS animation to have a nice cross fade effect, going from slide to slide. */

// STACKING THE IMAGES

/* This time, the strategy will be to put the new image right on top of the old image, and then bring it's opacity up from zero to 100%. */

// STARTING THE SCRIPT

let currentImage = 0;
const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

const container = document.getElementById('content');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

// ADD THE NEXT BUTTON EVENT LISTENER

/*nextBtn.addEventListener('click', event => {
    event.preventDefault();

    currentImage++;

    if(currentImage > myPhotos.length - 1) {
        currentImage = 0;
    };

    document.getElementById('myimage').src = myPhotos[currentImage];
});*/

// ADDING THE NEW SLIDE ON TOP

/*Now for the new bit, you will do four things:
1) Create a new image element;
2) Set the source attribute;
3) Set the class name; and
4) Append it to the container.
 */

/*nextBtn.addEventListener('click', event => {
    event.preventDefault();

    currentImage++;

    if(currentImage > myPhotos.length - 1) {
        currentImage = 0;
    };

    var newSlide = document.createElement('img');
    newSlide.src = `./slides/${myPhotos[currentImage]}`;
    // newSlide.setAttribute('src', `./slides/${myPhotos[currentImage]}`);
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if(container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
});*/

// THE IMAGES ARE STACKING

/* The next button is working, but there is on thing that you can make a bit better. */

// REMOVE EXTRA CHILDREN

/* Add this 'if' statement to the bottom of the script.

Challenge: Can you write the click handler for when someone clicks the previous photo button? */

/*prevBtn.addEventListener('click', event => {
    event.preventDefault();

    currentImage--;

    if(currentImage < 0) {
        currentImage = myPhotos.length - 1;
    };

    swapImage();
    var newSlide = document.createElement('img');
    newSlide.src = `./slides/${myPhotos[currentImage]}`;
    // newSlide.setAttribute('src', `./slides/${myPhotos[currentImage]}`);
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if(container.children.length > 2) {
        container.removeChild(container.children[0]);
    };
});*/

// DUPLICATE CODE

/* The script is working, but you can make it better! */

function swapImage() {
    const newSlide = document.createElement('img');
    newSlide.src = `./slides/${myPhotos[currentImage]}`;
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if(container.children.length > 2) {
        container.removeChild(container.children[0]);
    };
}

nextBtn.addEventListener('click', event => {
    event.preventDefault();

    currentImage++;

    if(currentImage > myPhotos.length - 1) {
        currentImage = 0;
    };

    swapImage();
});

prevBtn.addEventListener('click', event => {
    event.preventDefault();

    currentImage--;

    if(currentImage < 0) {
        currentImage = myPhotos.length - 1;
    };

    swapImage();
});