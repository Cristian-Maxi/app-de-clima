import React, { useState } from "react";
import Form from "./Form";
import Tarjeta from "./Tarjeta";

const PanelClima = () => {

  let climaURL = "https://api.openweathermap.org/data/2.5/weather?appid=da7c77b7e1bbb4c2e73c6f0c9d9a3daa&lang=es";
  let ciudadURL = "&q=";
  let pronosticoURL = "https://api.openweathermap.org/data/2.5/forecast?appid=da7c77b7e1bbb4c2e73c6f0c9d9a3daa&lang=es";

  const [clima, setClima] = useState([]);
  const [pronostico, setPronostico] = useState([]);
  const [carga, setCarga] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [ubicacion, setUbicacion] = useState("");

  const getUbicacion = async (loc) => {
    setCarga(true);
    setUbicacion(loc);

    //Clima
    climaURL = climaURL + ciudadURL + loc;

    await fetch(climaURL)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((climaData) => {
        console.log(climaData);
        setClima(climaData);
      })
      .catch((error) => {
        console.log(error);
        setCarga(false);
        setMostrar(false);
      });

    //pronostico
    pronosticoURL = pronosticoURL + ciudadURL + loc;

    await fetch(pronosticoURL)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((pronosticoData) => {
        console.log(pronosticoData);
        setPronostico(pronosticoData);
        setCarga(false);
        setMostrar(true);
      })
      .catch((error) => {
        console.log(error);
        setCarga(false);
        setMostrar(false);
      });
  };

  return (
    <React.Fragment>
        <Form nuevaUbicacion = {getUbicacion} />
        <Tarjeta cargarData = {carga} mostrarData = {mostrar} Clima = {clima} Pronostico = {pronostico}/>
    </React.Fragment>
  )
}

export default PanelClima;
