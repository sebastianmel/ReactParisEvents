import React from 'react';
import Navigation from "../components/Navigation";

// Test de la fonction ajout de favoris
const Fav = () => {
    // const fav = () => {
    //     let favoris = document.getElementById('cardenregistré')
    //     let cardStorage = localStorage.getItem('card');

    //     if (cardStorage==null){
    //         favoris.innerHTML='yes';

    //     }else{
    //         favoris.innerHTML= `${cardStorage}`
    //     }
    // }
    // function setData(){
    //     let card1 = document.getElementsByClassName('image-container').value;
    //     localStorage.setItem('card',card1)
    // };
    // fav();

    return (
        <div className="favoris">
            <Navigation/>
        <h1 id="cardenregistré">Favoris</h1>

        
        </div>

    )
}

export default Fav;
