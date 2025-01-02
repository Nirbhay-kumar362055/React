// const heading = React.createElement("h2", {id: "heading"}, "Namaste React");
// const access = ReactDOM.createRoot(document.getElementById("htmll"));

// console.log(heading);
// access.render(heading);

/*
if we want create html in a nested form in react so what we do 
eg: <div id = "parent">
        <div id = "child">
            <h1></h1>
        </div>
    </div>

    now we will going to create this which is in nested form
*/

const heading = React.createElement("div",{id: "parent"} ,React.createElement("div",{id: "child"} ,React.createElement("h1",{} , "hey this h1 tag is in nested form ")));
const access = ReactDOM.createRoot(document.getElementById("htmll"));
console.log(heading);
access.render(heading);