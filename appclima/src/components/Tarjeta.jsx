import React from 'react';
import Spinner from './Spinner';

const Tarjeta = ({ cargarData, mostrarData, Clima, Pronostico}) => {

    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let año = hoy.getFullYear();
    let fecha = dia + "/" + mes + "/" + año;

    let url = "";
    let iconoURL = "";

    let iconoURL3 = "";
    let iconoURL6 = "";
    let iconoURL9 = "";

    let pronosticoFecha3 = "";
    let pronosticoFecha6 = "";
    let pronosticoFecha9 = "";

    if (cargarData) {
      return <Spinner />;
    }

    if (mostrarData) {
        url = "http://openweathermap.org/img/w/";
        iconoURL = url + Clima.weather[0].icon + ".png";

        iconoURL3 = url + Pronostico.list[1].weather[0].icon + ".png";
        iconoURL6 = url + Pronostico.list[2].weather[0].icon + ".png";
        iconoURL9 = url + Pronostico.list[3].weather[0].icon + ".png";

        pronosticoFecha3 = Pronostico.list[0].dt_txt.substring(8, 10) + "/" + Pronostico.list[0].dt_txt.substring(5, 7) + "/" + Pronostico.list[0].dt_txt.substring(0, 4) + " " + Pronostico.list[0].dt_txt.substring(11, 13);
        pronosticoFecha6 = Pronostico.list[1].dt_txt.substring(8, 10) + "/" + Pronostico.list[1].dt_txt.substring(5, 7) + "/" + Pronostico.list[1].dt_txt.substring(0, 4) + " " + Pronostico.list[1].dt_txt.substring(11, 13);
        pronosticoFecha9 = Pronostico.list[2].dt_txt.substring(8, 10) + "/" + Pronostico.list[2].dt_txt.substring(5, 7) + "/" + Pronostico.list[2].dt_txt.substring(0, 4) + " " + Pronostico.list[2].dt_txt.substring(11, 13);
    }
  
    return (
      <div className='mt-5'>
        {mostrarData === true ? 
        <div className='container'>
            <div className='card mb-3 mx-auto bg-dark text-light'>
                <div className='row g-0' id='sombreado'>
                    <div className='col-md-4'>
                        <h3 className='card-title'>{Clima.name}</h3>
                        <p className='card-date'>{fecha}</p>
                        <h1 className='card-temp'>{(Clima.main.temp - 273.15).toFixed(1)}°C</h1>
                        <p className='card-desk'><img src={iconoURL} alt="icono" />{Clima.weather[0].description}</p>
                        <img src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid rounded-start' alt="Big Ben"/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body text-start mt-1'>
                            <h5 className='card-text'>Temperatura máxima: {(Clima.main.temp_max - 273.15).toFixed(1)}°C</h5>
                            <h5 className='card-text'>Temperatura mínina: {(Clima.main.temp_min - 273.15).toFixed(1)}°C</h5>
                            <h5 className='card-text'>Sensación térmica: {(Clima.main.temp_max - 273.15).toFixed(1)}°C</h5>
                            <h5 className='card-text'>Humedad: {Clima.main.humidity}%</h5>
                            <h5 className='card-text'>Velocidad del viento: {Clima.wind.speed}m/s</h5>
                        </div>
                        <hr />
                        <div className='row mt-4' id='pronostico'>
                          <div className='col-md'>
                            <p>{pronosticoFecha3}h</p>
                            <p className='description'><img src={iconoURL3} alt="icono" />{Pronostico.list[1].weather[0].description}</p>
                            <p className='temp'>{(Pronostico.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                          </div>
                          <div className='col-md'>
                            <p>{pronosticoFecha6}h</p>
                            <p className='description'><img src={iconoURL6} alt="icono" />{Pronostico.list[2].weather[0].description}</p>
                            <p className='temp'>{(Pronostico.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                          </div>
                          <div className='col-md'>
                            <p>{pronosticoFecha9}h</p>
                            <p className='description'><img src={iconoURL9} alt="icono" />{Pronostico.list[3].weather[0].description}</p>
                            <p className='temp'>{(Pronostico.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <h2 className='text-light'>Sin datos que mostrar</h2>}
      </div>
    );
  };
  
  export default Tarjeta;