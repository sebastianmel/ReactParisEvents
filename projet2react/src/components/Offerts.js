import React, { useEffect, useState} from "react";
import axios from "axios";


const Offerts = () => {
    const [ data, setData] = useState([]);
    
    
    useEffect( () => {
        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search='
            )
            .then((res) => setData(res.data.records));

            
    }, []) ; 
    console.log(data);
    

    return (
        <div className="offerts">
            <div className="offerts-list">
                {data.map((offert) => (
                    <div className="off"> 

                        
                        <div className="image-container">
                            <img alt="" id="cardImg"src={offert.record.fields.cover_url}></img>
                        </div>
                        
                     
                        <div>
                            {offert.record.fields.title} <br></br> <br></br>


                            {offert.record.fields.description} 
                        </div>
                        
                        <br></br>
                
                </div>))}
            </div>
        </div>
    );
}

export default Offerts;

/*
<ul className="offerts-list">
                {data.records.map((offert) => (
                    <li>{offert.record.fields.title}</li>
                ))}
            </ul>
            https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=theatre
            
*/