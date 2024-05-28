import '../style.css'
import ImageText from '../components/Card'
import img from '../assets/txt.png'
import { Link } from 'react-router-dom'

const Service = () =>{
    return(
        <>
            <div className='servicecontainer'>
                <h1>Services</h1>
                <p>My services are: </p>

                <ImageText title="Text to Image" text="Convert text into a pic" to="/image" image={img}  />
                <br /><br />
                <ImageText title="Coming Soon" text="To test for more services in the future" to="/testing" />
                <br /><br />
                <ImageText title="Coming Soon" text="To test for more services in the future" to="/testing" />

            </div>
        </>
    )
}
export default Service