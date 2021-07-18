import React from 'react';
import { NavLink } from 'react-router-dom';

// Barre de navigation réutiliser sur toutes les pages
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>    
            <NavLink exact to="/seach" activeClassName="nav-active">
                Liste des évenements
            </NavLink>    
            <NavLink exact to="/favoris" activeClassName="nav-active">
                Favoris
            </NavLink>    
        </div>

    );
};

export default Navigation;