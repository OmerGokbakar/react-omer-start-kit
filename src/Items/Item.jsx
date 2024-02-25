import PropTypes from 'prop-types'
import { useState } from 'react';
function Items({name, isPacked}){

    

    
    return(
        <li className='item'>
            {isPacked ? (<del>{name} ✅</del>) : (name)}
        </li>
    );
        
    
}

function PacketList(){

    
    return(
    
        <>
        <Items name= "Auto reparieren" isPacked={true}/>
        <Items name= "Einkaufen" isPacked={false} />
        <Items/>
        
        </>
           
    );
}

Items.defaultProps = {
    name : "Leer",
    isPacked : false,
}


export default PacketList