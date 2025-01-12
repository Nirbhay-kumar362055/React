# namaste react

# parcel
what parcel do for us:- 
dev build
creates local host server
HMR =  hot module replacement (basically it automatically refresh pages as we save the files)
Bundling
caching
compresing the file
consistent hashing
it gives us error suggestion in better form
Tree shaking -- remove unused code for us

// Now we will make a swiggy app using React
structure of that app
/*
* Header
*  -logo
*  -navigation bar
*     -Home
*     -About
*     -contact us
*     -login 
*/

Two types of import and exports
1) default export which can be import in a normal way
2) Named export which can be import by name in curly brackets


# usestate variable
- the variable which maintains the state of our UI
eg --  if somewhere values of variable changes then the UI of this application also changes.
in a simple word , whenever state variable updates react will rerender the data

--steps--
1) we need to import it first wherever we want
2) to declare this variable , syntax of this variable is
let/const [name of variable] = useState(whatever value we want to sent to the variable);