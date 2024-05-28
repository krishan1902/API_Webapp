import {Link, Outlet} from "react-router-dom"
import '../style.css'
import logo from '../assets/logo.png'

function Layout(props){
    
    return(
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <img src={logo} alt="logo" />
            </div>

            <Outlet />
        </>
    )
}
export default Layout