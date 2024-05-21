import React from "react";
import { Link} from 'react-router-dom';
import "./VendingMachine.css"



const VendingMachine = () => {

    return(
        <div className="VendingMachine">
         <img 
         src="https://i.redd.it/u96dvpq70oo71.jpg"
         alt="pixel art of Japanese vending machines"
         className="VendingMachine-image"
         />
         <div>
            <Link to="/chocolate">
                Chocolate Bar 
            </Link>

            <Link to="/chips">
                Chips 
            </Link>

            <Link to="/soda">
                Soda 
            </Link>
           </div>
        </div>
    );

}

export default VendingMachine;