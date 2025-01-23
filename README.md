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

note:- whenever state variable gets updated then react will re-render the page again 


# useEffect
--

useEffect(()=>{
    const api = await fetch('api url');
    const json =  await api.json()
    
    we will get the data into json form 


},[])
# some points about useEffect 2nd argument i.e dependency array
--it is not mendatory to take 2nd argument so if we do not take then every time page rendered useEffect will also rerender
-- if we take empty dependency array then useEffect will render only once
-- if we give some inputs to dependency array like i give state variable to it then as many time state variable updates it then useEffect will also render.


# search input
when we need to filter a restaurant letter by letter then we need search button where we can 
search for something we want to extract
-- there is some concept here for searching anything 
-- we need to take first useState variable where we store whatever we searching
-- then we give value to <input value = {searchtext--> useState variable store name} onChange = {(el) => {
    setSearchText(el.target.value);
}}>

-- we need to apply event listener "onChange"


# route creation in react 
-- first we need to download a npm package called react-router-dom.
-- then in app.js we need to import {createBrowserRouter} from react-router-dom in app.js file or in root file.
-- now we have make a config for router. 
eg. const approuter = createBrowserRouter([
    {
        path : "/" ,--> routes
        element: <headingComponent/> component name which we want to send on this path
    },
    {},
    etc
]);

# note
--> if you will write "rafce" in your code . then it will automatically give you the basic component structure . means "rafce" will work as a boilerplate .


# error hooks i.e {useRouteError}
--> it allows us to thorw a custom error based upon error.
--> jo vv component ke ander likhenge (waise toh ye error component ke ander hi likha jata hai)
toh uss component ko hum jaha pe routes bana rhe the waha pe ek or key aata (errorElement : <Error/ >) ye dal denge.