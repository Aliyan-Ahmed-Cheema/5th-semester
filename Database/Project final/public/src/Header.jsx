import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="row">
            
                <NavLink to="/" className="col-3">Admin</NavLink>
                <NavLink to="/Land_owner" className="col-3">Land_owner</NavLink>
                <NavLink to="/Client" className="col-3">Client</NavLink>
        </header>
    );
}