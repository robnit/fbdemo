### Firebase Demo

Supplimentary repo for a tech talk I did a while ago. My talk was to demonstrate the value of Firebase's neat out-of-the-box features, and show off its value as a quick and easy backend for creative personal projects. The intention was to create a simple redux app (obviously, redux is not actually necessary in this contrived example), and demonstrate how well existing redux logic can mesh with firebase api listeners.



`master` contains the base app with no firebase logic. App is a simple "Lights out" style game where a user attempts to make all squares on a grid a single color. Clicking a square will invert the colors of all adjacent squares.

`yes-firebase` contains a basic firebase implementation. This turns the "Lights out" game into a fun chaotic mulitplayer experience, playable by you and everyone on the internet! Note: to run, you must set up your own firebase project and update the config data in `src/firebase/database.js`. 

`yes-functions` brings in cloud functions to help with keeping the app in a single cohesive state when being bombarded with mulitple user actions.

The tech talk was ulitmately ruined once a coworker decided to run some iterative logic on every button element, effectively DDOSing the demo :( I learned the hard lesson to always implement debounce/authentication logic in everything I do, even internally-facing demo apps.
