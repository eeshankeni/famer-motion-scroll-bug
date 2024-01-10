This repo reproduces a bug in framer motion wherein useScroll seems to be unable to track the scroll of the parent container.

UseScroll has a Container prop which is used to keep track of the scroll of a custom container instead of the default scrollable body.
Doing so requires a ref to be passed which references the scrollable continer. However if the ref is passed down a component and
then the ref is furthur passed along then useScroll seems to fail.

https://www.framer.com/motion/use-scroll/

Steps to reproduce:

`yarn install`

`yarn dev` to run development mode. everything works as expected here.

`yarn build` to build static files.

`npx serve@latest out` to run the static page. Notice how the animation breaks here.

demo:
https://youtu.be/oRjx-Drgt6U
