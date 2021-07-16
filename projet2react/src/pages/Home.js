import React from "react";
import Navigation from "../components/Navigation";
import EventHome from "../components/EventHome";



const Home = () => {

    return (
        <div className="home">
            <Navigation/>

            <br></br>   
        <h1>Bienvenue sur Paris Events</h1>
        <h5>L'application qui permet de rechercher en direct les prochains événements Parisiens</h5>
        
        
        <br></br>
        <h2>Actualité</h2>
        <h6>Le dernier événement publié :</h6>
        <br></br>
        
        <EventHome/>
        </div>

    )
}

export default Home;