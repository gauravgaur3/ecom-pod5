import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";

const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart)
    return (
        <Fragment>
            <div className="clearfix"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky" style={{top:0,zIndex:"1000"}}>
            <img src="shop.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                <Link className="navbar-brand"  to="/">eCommerce Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cateories
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cats?cat=Mobile Phones">Mobile Phones</Link>
                        <Link className="dropdown-item" to="/cats?cat=Cameras">Cameras</Link>
                        <Link className="dropdown-item" to="/cats?cat=Laptops">Laptops</Link>
                        <Link className="dropdown-item" to="/cats?cat=Televisions">Televisions</Link>
                        <Link className="dropdown-item" to="/cats?cat=Refrigrators">Refrigrators</Link>
                        <Link className="dropdown-item" to="/cats?cat=Washing Machines">Washing Machines</Link>
                        </div>
                    </li> */}
                    </ul>
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
                </div>
                </nav>
        </Fragment>
    )
}

export default NavBar;
