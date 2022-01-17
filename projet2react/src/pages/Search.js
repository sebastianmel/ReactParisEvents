import React, { useEffect, useState } from "react";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import Navigation from "../components/Navigation";
import { NavLink } from 'react-router-dom';

// Page de recherche

// Fonction de recherche avec pré chargements des evénements et recupération de la value de l'input "searcValue"

const Search = () => {

    const inputRef = useRef();
    const [data, setData] = useState([]);

    function onValidateForm(event) {

        event.preventDefault();
        const searchValue = inputRef.current.value;
        console.log(searchValue);

        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search='+searchValue
            )
            .then((res) => setData(res.data.records));



    }
//  Prechargement des événements
    useEffect(() => {
        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records'
            )
            .then((res) => setData(res.data.records));

            
    }, []);






    

// Affichage des informations des événements dans des cards

    return (
        <div className="search">
            <Navigation />

            <h1>Liste des futurs évenements à Paris</h1>

            <form onSubmit={onValidateForm}>

                <input type="text" ref={inputRef} ></input>
                &#160;
                <Button type="submit" variant="outline-secondary">Recherche</Button>
            </form>


            <br />

            <h3>Résultats de la recherche</h3>

            <br />

            {data &&
                <div className="container">
                    <p className="failSearch" >Aucun évenements trouvé...</p>
                    {data.map((EventSearch) => (
                        <div className="off">
                            <Card className="cardSizing" style={{ width: '60%' }}>
                                <Card.Img variant="top" src={EventSearch.record.fields.cover_url} />
                                <Card.Body>
                                    <Card.Title><strong>{EventSearch.record.fields.title}</strong></Card.Title>
                                    <Card.Text>
                                        {EventSearch.record.fields.date_description.replace(/(<([^>]+)>)/gi, "")} <br></br>
                                        {EventSearch.record.fields.lead_text.replace(/(<([^>]+)>)/gi, "")}
                                    </Card.Text>
                                    <NavLink exact to={`Event/${EventSearch.record.id}`}>
                                        <Button variant="primary">Plus</Button>
                                    </NavLink>
                                    &#160;
                                    <Button variant="outline-secondary" >Ajouter au favoris</Button>
                                </Card.Body>
                            </Card>
                            <hr></hr>

                        </div>))}

                   </div>
            }
        </div>


    )
}


export default Search;


// onClick={setData()}