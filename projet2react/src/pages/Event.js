// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import axios from "axios";
import Navigation from "../components/Navigation";

const Event = () => {

    // const eventSetting = useParams()
    // const [data, setData] = useState([]);

    
    // useEffect(() => {

    //     axios
    //         .get(
    //             'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/'+eventSetting.id
    //         )
    //         .then((res) => setData(res.data.records));
    // }, []);

    return (
        <div className="event">
            <Navigation />
            <h1>evennements</h1>
            <div>
                <h1></h1>
                <img></img>

                {/* <div className="container">
                    {data((event) => (
                        <div className="off">

                            <h1>{event.fields.title} <br></br> <br></br></h1>

                            <div className="image-container">
                                <img alt="" id="cardImg" src={event.fields.cover_url}></img>
                            </div>


                            <div>

                                {event.fields.description.replace(/(<([^>]+)>)/gi, "")}
                            </div>

                            <br></br>

                        </div>))}

                </div> */}
            </div>
        </div>
    )
}

            export default Event;