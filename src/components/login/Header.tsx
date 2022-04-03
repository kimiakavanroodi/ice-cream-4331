import React from 'react';
import "../../styles/Login.css"
export const Header = ({...restProps}) => 
{ 
    return ( 
    <div style={{display: "flex"}}> 
        <div>
             <p className='LoginHeader'> Hi </p> 
            <a> Link </a>
        </div>
        <div>
             <p className='LoginHeader'> Bye </p> 
        </div>
    </div>     
    );
}