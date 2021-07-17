import React, { useEffect, useState } from "react";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import Navigation from "../components/Navigation";
import Event from "../components/Event";
import { NavLink } from 'react-router-dom';





const Search = () => {

    const inputRef = useRef()
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

    useEffect(() => {
        axios
            .get(
                'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records'
            )
            .then((res) => setData(res.data.records));

            
    }, []);






    



    return (
        <div className="search">
            <Navigation />

            <h1>Liste des futurs évenements à Paris</h1>

            <form onSubmit={onValidateForm}>

                <input type="text" ref={inputRef} ></input>

                <button type="submit">Recherche</button>
            </form>


            <br />

            <h3>Résultats de la recherche</h3>

            <br />

            {data &&
                <div className="container">
                    {data.map((offert) => (
                        <div className="off">
                            <Card style={{ width: '60%' }}>
                                <Card.Img variant="top" src={offert.record.fields.cover_url} />
                                <Card.Body>
                                    <Card.Title>{offert.record.fields.title}</Card.Title>
                                    <Card.Text>
                                        {offert.record.fields.description.replace(/(<([^>]+)>)/gi, "")}
                                    </Card.Text>
                                    <NavLink exact to={`Event/${offert.record.id}`}>
                                        <Button variant="primary">Plus</Button>
                                    </NavLink>

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


