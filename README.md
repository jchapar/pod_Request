# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./desktop.png)
![](./desktop-error.png)
![](./tablet.png)
![](./mobile.png)

### Links

- Solution URL: [View Github Code](https://github.com/jchapar/pod_Request)
- Live Site URL: [Visit Site](https://jchapar.github.io/pod_Request/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Figma - For design files

### What I learned

- I continued my practice with CSS Grid. Using the Chrome Developer Tools, I was able to have a much easier time visualizing how to set each elements Grid Rows and Columns.
- I visited Stack Overflow several times for getting the email validation to take effect. I found a code snippet to help verify if the users input passes as a valid email address based on its format.
- I visited Developer.mozilla.org to review on the setTimeout fuction and used it to hide the error message that is shown when the email address is incorrect or the input field is empty. I also looked up and used the resize event listener for the window object. I used this listener to view when the window is bigger than the mobile view. This defines the classes assigned to the main content element.

### Useful resources

- [Youtube](https://www.youtube.com/watch?v=9zBsdzdE4sM&t=793s) - I watched this video by Web Dev Simplified to review and practice working with grid. It's a great resource for any new or experienced developer when a CSS Grid review is needed.
- [Resize Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
- [setTimeout Function](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

## Author

- Frontend Mentor - [@jchapar](https://www.frontendmentor.io/profile/jchapar)
- Twitter - [@j_chapar](https://www.twitter.com/j_chapar)
