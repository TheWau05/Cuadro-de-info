"use client";
import React, { useState, useEffect } from "react";
import BotonInfo from "./botonInfo";

interface Info {
    picture: { large: string };
    name: { first: string; last: string };
    email: string;
    location: { street: { name: string }; city: string };
    dob: { date: string };
    phone: string;
    login: { password: string };
}

const Usuario = () => {
    const [user, setUser] = useState<Info | null>(null); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/");
                const data = await response.json();
                setUser(data.results[0]);
            } catch (error) {
                console.error("Error al obtener usuario:", error);
            }
        };
        fetchUser();
    }, []);

    if (!user) return <p>Cargando usuario...</p>;

    return (
        <div className="card">
        <img src={user.picture.large} alt="User Avatar" className="avatar justify-center" />
        <div className="buttons">
            <BotonInfo label="Nombre: " value={`${user.name.first} ${user.name.last}`} />
            <BotonInfo label="Correo: " value={user.email} />
            <BotonInfo label="Dirección: " value={`${user.location.street.name}, ${user.location.city}`} />
            <BotonInfo label="Cumpleaños: " value={new Date(user.dob.date).toLocaleDateString()} />
            <BotonInfo label="Teléfono: " value={user.phone} />
            <BotonInfo label="Contraseña: " value={user.login.password} />
        </div>
    </div>
    );
};

export default Usuario;
