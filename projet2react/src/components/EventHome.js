import React, { useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const EventHome = () => {
    const [ data, setData] = useState([]);
    
    useEffect( () => {
        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=-date_start&rows=1'
            )
            .then((res) => setData(res.data.records));

            
    }, []) ; 
    console.log(data);
    

    return (
        <div className="eventHome">
            <div className="eventHome-list">
                {data.map((eventHome) => (
                    <div className="off"> 

                        
                            <Card style={{ width: '30%' }}>
                        <Card.Img variant="top" src={eventHome.record.fields.cover_url} />
                        <Card.Body>
                            <Card.Title>{eventHome.record.fields.title}</Card.Title>
                            <Card.Text>
                                {eventHome.record.fields.description.replace(/(<([^>]+)>)/gi, "")}
                            </Card.Text>
                            <NavLink exact to="/Event">
                                <Button variant="primary">Plus</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                        
                        <br></br>
                
                </div>))}
            </div>
        </div>
    );
}

export default EventHome;

/*
<ul className="offerts-list">
                {data.records.map((offert) => (
                    <li>{offert.record.fields.title}</li>
                ))}
            </ul>
            https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=theatre
            
*/