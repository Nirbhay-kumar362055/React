import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {About} from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";




// React functional Component
const Headingcomponent = () => (
    <div>
        <Header/>
        <Outlet/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Headingcomponent/>,
        children: [{
            path: "/",
            element: <Body/>,
            errorElement: <Error/>,
        },
        {
            path: "/About",
            element: <About/>
        },
        {
            path: "/Contact",
            element: <Contact/>
        },],
        errorElement: <Error/>,
    },
]);

// const reactRouter  = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path = "/" element = {<Headingcomponent/>}/>
//                 {/* <Route path = "/About" element = {<About/>}/> */}
//             </Routes>
//         </BrowserRouter>
//     )
// }

const access = ReactDOM.createRoot(document.getElementById("Root"));
access.render(<RouterProvider router={appRouter} />);
