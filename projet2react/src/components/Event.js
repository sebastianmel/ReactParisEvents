import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

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
            <Navigation />

            {data &&
                <div className="container">


                    <div className="off">

                        <h1>{data.fields.title} <br></br> <br></br></h1>

                        <div className="image-container">
                            <div><img alt="" id="cardImg" style={{ width: '90%' }} src={data.fields.cover_url}></img></div>
                            <div>
                                <Button variant="outline-secondary">Ajouter au favoris</Button>

                                <p>Dates : <br></br>
                                    {data.fields.date_start} <br></br>
                                    {data.fields.date_end}
                                </p>


                                <p><br></br>
                                    {data.fields.price_type + ":"} <br></br>
                                    {data.fields.price_detail}
                                </p>



                                <p>S'y rendre :<br></br>
                                    {data.fields.address_name}
                                    ({data.fields.address_zipcode})
                                </p>



                                <p>En transports :<br></br>
                                    <div>{data.fields.transport +"(a copier dans google map)"}</div>
        
                                </p>



                                    <p>Plus d'infos : <br></br>
                                        {"tel: " + data.fields.contact_phone} <br></br>
                                        {"mail: " + data.fields.contact_mail} <br></br>
                                        <a href="">{data.fields.contact_facebook}</a>
                                    </p>

                                    </div>
                            </div>

                            <br></br>
                            <div>

                                {data.fields.description.replace(/(<([^>]+)>)/gi, "")}
                            </div>

                            <br></br>

                        </div>

                    </div>
            }
                </div>

    )
}

            export default Event;