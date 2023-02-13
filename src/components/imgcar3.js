import React from "react";
 
import "../App.css";

import pincnictable from '../media/pincnictable.jpeg';
import reddoor from '../media/redGallery.JPG';
import triangleglass from '../media/kaleidescope1.JPG';
import logotxt from '../media/logotxt.png';



function Imgcar3() {

	const images = [`${pincnictable}`,`${reddoor}`,`${triangleglass}`,`${logotxt}`];
	const [imageIndex, setImageIndex] = React.useState(0);

	React.useEffect(() => {
	    setTimeout(()=>{
            setInterval(() => {
            
                setImageIndex(prev => (
                  prev === images.length - 1 ? 0 : prev + 1
                ));
                
              }, 4000);
    
    
        }, 3000);
	},[images.length])
	
	
    const leftArrowStyles = {
      
        zIndex:1,
        cursor: 'pointer',
    }
	return (
		<>
        
        
			<img className="navlink"  style={leftArrowStyles} alt='base' src={images[imageIndex]} />
			
            <br/>
            
		
		</>
	);
}

export default Imgcar3;
