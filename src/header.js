import { NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className="Header">
            <NavLink to={'/'}>Main page</NavLink>
            <NavLink to={'/about'}>About page</NavLink>
        </div>
    )
}

export default Header