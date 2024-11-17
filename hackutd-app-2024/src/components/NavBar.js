import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <Link to="/">About </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact</Link>
        </div>
    );
}

export default NavBar;