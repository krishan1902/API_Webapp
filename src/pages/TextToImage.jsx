import { useState } from "react";
import generate from '../service/textimgservice'
import serviceimg from '../assets/txt.png'
import '../style.css'

const TextIMG = () =>{
    const [imgsrc, setimgsrc] = useState('https://cdn.wheel-size.com/automobile/body/ford-c-max-2007-2010-1628169181.0916102.jpg');
    
    async function getValue(event){
        var query = document.getElementById('queries').value;

        event.preventDefault();
        // setimgsrc(generate(query, event));
        // generate(query, event);
        var output = await generate(query, event);
        console.log(output.props.src);
        setimgsrc(output.props.src);
    }

    return( 
        
        <div className="servicecontainer">
            <h1>Text to Image</h1>
            <img src={serviceimg} alt="" />

            <p>Type in a keyword and get a picture of it.</p>

            <form>
                <label htmlFor="query">Enter a keyword:</label> <br />
                <input type="text" id="queries" /> <br />
                <button onClick={(event)=>getValue(event)} id="btn">Get your image</button>
            </form>
            
            <h1>Here is the picture to your keyword: </h1>
           
            <img src={imgsrc} alt="" className="outputimage" />
            {/* Result component with the output image */}

        </div>

    )
}
export default TextIMG