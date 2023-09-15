
/*START MENU HEADER CODE*/
const toggle = document.querySelector('.toggle');//Select the .toggle class
const links = document.querySelector('.lists'); //Select the .lists class
const header = document.querySelector('header'); //Select the header element
const main = document.querySelector('main'); //Select the main element

// Create an arrow function for add 
toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate'); //Add the .rotate class to toogle variable
    links.classList.toggle('active'); // Add the .active class to header variable
    header.classList.toggle('expanded'); // Add the .expanded class to header variable
    main.classList.toggle('push-content'); // Add the .push-content class to main variable
})

/*END MENU HEADER CODE*/

/*START SCROLLING BOOKMARKS CODE*/

// Select all links that start with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener
    anchor.addEventListener('click', function (e) {
        // Prevent default action
        e.preventDefault();
        // Smooth scroll to element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Select all elements with class ".scroll-transition"
    document.querySelectorAll('.scroll-transition').forEach(el => {
        // If element is in viewport
        if (el.getBoundingClientRect().top < window.innerHeight) {
            // Add class "visible"
            el.classList.add('visible');
        }
    });
});

/*END SCROLLING BOOKMARKS CODE*/




