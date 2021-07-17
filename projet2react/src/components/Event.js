import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";


function Event() {

    const eventSetting = useParams()
    const [data, setData] = useState(null);
    const id = eventSetting.id


    useEffect(() => {

        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/' + id
            )
            .then((res) => setData(res.data.record));
    }, []);

    return (

        <div className="event">
            <Navigation/>

            <h1>evenements</h1>
            
                <h1></h1>
                
                {data &&
                    <div className="container">
                        

                            <div className="off">

                                <h1>{data.fields.title} <br></br> <br></br></h1>

                                <div className="image-container">
                                    <div><img alt="" id="cardImg" src={data.fields.cover_url}></img></div>
                                    <div>
                                        <button>Ajouter au favoris</button>
                                        
                                        <h3>Dates :
                                            {data.fields.date_start}
                                            {data.fields.date_end}
                                        </h3>

                                        <br></br>

                                        <h3>Prix :
                                            {data.fields.price_type }
                                            {data.fields.price_detail }
                                        </h3>

                                        <br></br>

                                        <h3>S'y rendre :
                                            {data.fields.adress_name}
                                            {data.fields.adress_zipcode}
                                        </h3>

                                        <br></br>

                                        <h3>En transports :
                                            {data.fields.transport}
                                        </h3>

                                        <br></br>

                                        <h3>Plus d'infos :
                                            {data.fields.contact_phone}
                                            {data.fields.contact_mail}
                                            {data.fields.contact_facebook}
                                        </h3>

                                    </div>
                                </div>


                                <div>

                                    {data.fields.lead_text.replace(/(<([^>]+)>)/gi, "")}
                                </div>

                                <br></br>

                            </div>
                
                    </div>
            }
        </div>

    )
}

export default Event;