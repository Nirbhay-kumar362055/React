
import { useState } from "react";
import { Link  }   from "react-router-dom";

const Header = () => {
    const [btnName , setBtnName] = useState("login");
    return (
    <div className="header">
        <div className = "logoimg">
            <img alt="food-logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?t=st=1736513820~exp=1736517420~hmac=39d9f43249dd2c5da0585a770064055e0a88e67170b7defba302be5c03153f20&w=740" />
        </div>
        <div className="nav-bar">
            <ul>
                <li><link to ="/">Home</link></li>
                <li>About</li>
                <li>contact us</li>
                <li>cart</li>
                <button className="btn-login" onClick={() => {
                    btnName === "login" ? setBtnName("logout") : setBtnName("login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
);
};

export default Header;