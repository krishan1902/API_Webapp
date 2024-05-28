import {Link, Outlet} from "react-router-dom"

import service from '../assets/service.png'
import '../style.css'


function Home(props){
    return(
        <div className='homecontainer'>
            <h1>Welcome to my website.</h1>

            <p>Hi, my name is Raj and this Website is a project for WMC. <br /> Click on Services</p>

            <a href="#"><Link to="/service"><img src={service} alt="" className="image"/></Link></a><br />
        </div>
    )
}
export default Home