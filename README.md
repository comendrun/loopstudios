# loopstudios-landing-page

vist online [here](http://comendrun.com/loopstudios-landing-page/)

Frontend Mentor

Notes:

- i decided to change background images in different screen sizes dynamically using tailwind css. basically there are several ways to do it. using js to get screen width and then changing images with some state, or using css media queries, but in this particular project i decided to do it using tailwind css. why? because i love handling images dynamically using js and map method and not being desperate to apply media queries on all images in css.
  so at first i tried to use inline styles in my component. i had to have a media query, but i found out that its not possible inside a react component. but there is a npm package named Radium that give us ability to do so. but i couldn't apply several styles and also a media query inside it, so it didnt work. (update: i think i couldn't successfully install the library so maybe it was my fault)
  then i tried to use arbitrary mode in tailwind css so i tried adding images using this syntax:

      bg-[imageImportedInComponent]

      i dont know why but it didnt work either.

      then i tried adding my images inside tailwind css extended part inside confiq file. now i was able to apply a background image using the syntax, but when i tried to change it dynamically using a database file and props from a parent component, i failed. why? i think it was because that the property names inside database were saved using strings "", and when i tried to send them over using props, they were applied with those strings, so it didnt work.
      i tried to de-stringify those data strings using replace method, but it was a failure too.

      at the end i decided to modify my database file and change the image properties to include bg-... part so they would directly get applied as a string. but now i had to modify my classNames and with a (`{}` + mobileImage) syntax, it was all good.

      now i want to have several backgrounds (1 image and 1 linear gradient). and im researching the ways that i can apply this logic.

- implementing bottom line on nav items on desktop mode:

it was a bit hard to add that half width border under nav items. i tried ::after pseudo class and also other ways, but i liked this method the most:
this method was thanks to Mohammad Usman from stackoverflow. it was a great way of implementing bottom line when hover, and i liked his approach a lot.
link: https://stackoverflow.com/questions/4131490/any-way-to-limit-border-length

.nav-item-desktop:hover {
background-image: linear-gradient(white, white);
background-repeat: no-repeat;
background-size: 50px 10%;
background-position: bottom;
}
