# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://comendrun.com/loopstudios/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TailwindCSS
- React Router DOM
- React-Icons

### What I learned

- I changed background images in different screen sizes dynamically using Tailwind CSS. there are several ways to do it. using JS to get screen-width and then changing images with some state, or using CSS media queries, but in this project, I did it using Tailwind CSS. why? because I love handling images changing dynamically using JS.
  so at first, I tried to use inline styles in my component. i had to have a media query, but I found out that it's not possible inside a react component. but there is an npm package named Radium that gives us the ability to do so. But it didn't work. (update: I think I couldn't successfully install the library so maybe it was my fault)
  then I tried to use arbitrary mode in tailwind cos so I tried adding images using this syntax:

```html
<div className="bg-[imageImportedInComponent]"></div>
```

i don't know why but it didn't work either.
Then I tried adding my images inside the tailwind CSS extended part inside the tailwind.config file. Now I could apply a background image using classes, but when I tried to change it dynamically using a database file and props from a parent component, I failed. Why? I think it was because the property names inside the database were saved as strings, and when I tried to send them over using props, it applied them with those strings, so it didn't work.
I tried to de-stringify those data strings using the replace method, but no success.
In the end, I decided to modify my database file and change the image properties to include "bg-... " part so they would directly get applied as a string. But now I had to change my class names and with a (`{}` + mobileImage) syntax, it was all done.

- implementing the bottom line on nav items on desktop mode:
  It was difficult to add that half-width border under nav items. I tried ::after pseudo class and also other ways, but I liked this method the most:
  this method was thanks to Mohammad Usman from stackoverflow. it was great for implementing the bottom line when hovering, and I liked his approach a lot.
- [link](https://stackoverflow.com/questions/4131490/any-way-to-limit-border-length)

```css
.nav-item-desktop:hover {
  background-image: linear-gradient(white, white);
  background-repeat: no-repeat;
  background-size: 50px 10%;
  background-position: bottom;
}
```

### Continued development

### Useful resources

- [stackoverflow](https://stackoverflow.com/questions/4131490/any-way-to-limit-border-length) - implementing the bottom line on nav items on desktop mode

## Author

- Personal Website - [Portfolio](https://comendrun.com/)
- Github - [@comendrun](https://github.com/comendrun)
- Frontend Mentor - [@comendrun](https://www.frontendmentor.io/profile/comendrun)
- Twitter - [@comendrun](https://twitter.com/comendrun)

## Acknowledgments
