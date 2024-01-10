UseScroll has a Container prop which is used to keep track of the scroll of a custom container instead of the default scrollable body.
Doing so requires a ref to be passed which references the scrollable container. However, if the ref is passed down a component and
then the ref is further passed along then useScroll seems to fail.

https://www.framer.com/motion/use-scroll/

https://github.com/eeshankeni/famer-motion-scroll-bug
Now in this case useScroll seems to fail when the ref is passed to a component which is inside of another component (2 levels down). 

However, I've noticed that this bug also was happening in a client project when the ref was being passed only 1 component down. I have included this case as well (GreenChildComponent.tsx) in the example but that does not seem to be reproducing.


Steps to reproduce:

`yarn install`

`yarn dev` to run development mode. everything works as expected here.

`yarn build` to build static files.

`npx serve@latest out` to run the static page. Notice how the animation breaks here.

video demo:

https://github.com/framer/motion/assets/19875557/17c409a7-cc95-4bc3-bb79-e208339fb83a



Edit : Setting `layoutEffect:false` seems to be a workaround.  As documented on https://github.com/framer/motion/issues/2452

Couldn't find any documentation on what layoutEffect does. Was able to get it [figured out.](https://velocilabs.com)

