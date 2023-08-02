import React from "react";
import Carousels from "./carousels";
import "./home.css";
import "./carousels.css";



const HomPage = () => {
    
    return (
        <body>
            <div className="layout">

                
                <Carousels className="container"/>
                
            </div>
            <input type="file" id="fileUpload" />
        </body> 
    )
}


export default HomPage;