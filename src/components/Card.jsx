import {Link} from "react-router-dom"

import '../style.css'

const Card = (props) =>{

    const {title, text, to, image} = props

    return(
        <div className="card">
            <img src={image} id="app-logo" className="image"/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2> 
                <p className="card-text">{text}</p> 
                <a href="#" className="linktoa"><Link to={to}>Visit this Service</Link></a>
            </div>
        </div>
    )
}
export default Card