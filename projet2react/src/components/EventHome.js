import React, { useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Fonction qui permet d'afficher un element sur la page d'accueil

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
    
// Affichage de l'element dans une card suivant le meme schema que la page search

    return (
        <div className="eventHome">
            <div className="eventHome-list">
                {data.map((eventHome) => (
                    <div className="off"> 

                        
                            <Card style={{ width: '50%' }}>
                        <Card.Img variant="top" src={eventHome.record.fields.cover_url} />
                        <Card.Body>
                            <Card.Title><strong>{eventHome.record.fields.title}</strong></Card.Title>
                            <Card.Text>
                            {eventHome.record.fields.date_description.replace(/(<([^>]+)>)/gi, "")} <br></br>
                                {eventHome.record.fields.lead_text.replace(/(<([^>]+)>)/gi, "")}
                            </Card.Text>
                            <NavLink exact to={`Event/${eventHome.record.id}`}>
                                        <Button variant="primary">Plus</Button>
                            </NavLink>
                            &#160;
                                    <Button variant="outline-secondary">Ajouter au favoris</Button>
                        </Card.Body>
                    </Card>
                        
                        <br></br>
                
                </div>))}
            </div>
        </div>
    );
}

export default EventHome;
