# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/images/Screenshot%202026-09-15%20101447.jpg)
![](/images/Screenshot%202026-09-15%20101638.jpg)
![](/images/Screenshot%202026-09-15%20101910.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Desktop-first workflow


### What I learned

This project helped me refresh my JavaScript skills and understand how JavaScript can be used to make a webpage interactive.
To see how you can add code snippets, see below:

- Selecting elements using querySelector() and querySelectorAll()
- Using addEventListener() to respond to user clicks
- Using forEach() to work with multiple elements
- Storing the selected rating in a variable
- Using textContent to get and change text
- Using template literals to display the selected rating
- Using style.display to hide and show elements
- Using JavaScript to switch between the rating card and the thank-you state

For example, I used JavaScript to store the rating selected by the user and display it:

```js
let selectedRating;

ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    selectedRating = rating.textContent;

    result.textContent = `You selected ${selectedRating} out of 5`;
  });
});
```

### Continued development

I want to continue improving my JavaScript fundamentals, especially working with DOM manipulation, events, and user interactions.

I also want to improve my responsive CSS skills and become more comfortable building interactive components.

### Useful resources

- (https://frontendmentor.io) - Used for the challenge and design reference.
- MDN Web Docs - Used as a reference for HTML, CSS, and JavaScript concepts. concept.

### AI Collaboration

I used ChatGPT as a learning and brainstorming tool while working on this project.

I mainly used it to:

- Refresh JavaScript concepts I had learned previously.
- Understand how DOM manipulation and event listeners work.
- Brainstorm solutions instead of directly copying a complete implementation.
- Debug mistakes in my JavaScript.
- Better understand why certain JavaScript methods were needed.

The goal was to understand the logic behind the code rather than simply copy a solution.

## Author
- Frontend Mentor - [@dd-boy22](https://www.frontendmentor.io/profile/dd-boy22)
