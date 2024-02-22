import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../services/service';  // Cambiado "service" por "services/service" donde tenemos los métodos de la API

const CardContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80vh;
    align-items: center;
    flex-wrap: wrap;


    img {
        max-height: 60vh;
        max-width: 60vw;
        border: 0.5rem solid #D9D9D9;
    }

    .properties {
        display: grid;
        width: 30vw;
        height: 20vh;
    }

    .container-properties {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 30vw;
        max-height: 70vh;
    }

    h2 {
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 20%;
        text-transform: uppercase;
        text-decoration: bold;
        text-shadow:  4px 4px 4px #D9D9D9;
    }

    p {
        font-family: 'Jost', sans-serif;
        text-align: center;
    }

  
`

const Card = () => {  // Cambiado "props" por "id" para que coincida con el nombre que le damos en el archivo App.jsx
    const { id } = useParams();  //UseParams es un hook que nos permite acceder a los parámetros de la URL
    const [Product, setProduct] = useState();  //Usamos el hook useState para guardar el estado de la bicicleta

    useEffect(() => {  //Usamos el hook useEffect para hacer la petición a la API
        const fetchProductDetails = async () => {           //fetchproductDetails es una función asíncrona que nos permite hacer la petición a la API
            const detailedProduct = await getOneProduct(id);  //Usamos el método getOneproduct de la API para obtener los detalles de la bicicleta
            setProduct(detailedProduct); //Usamos el método setproduct para guardar los detalles de la bicicleta en el estado
        };
        fetchProductDetails();          //Llamamos a la función fetchproductDetails
    }, [id]);   //Le pasamos el id como dependencia para que se ejecute cada vez que cambie el id
    
      if (!Product) {  //Si no hay bicicleta, devolvemos un mensaje de error
        return <div style={{height: "80vh", fontFamily: "Jost", fontSize: "2em", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>No se encontró la bicicleta</div>;
      }; //Si hay bicicleta, devolvemos la información de la bicicleta

    return ( //Usamos el componente CardContainer para mostrar la información de la bicicleta
        <CardContainer> 
        <img src={Product.image} alt={Product.name} />
        <section className="container-properties">
            <div className="properties">
                <h2>Nombre:</h2>
                <p>{product.name}</p>
            </div>
            <div className="properties">
                <h2>Precio:</h2>
                <p>{product.price}</p>
            </div>
            <div className="properties">
                <h2>Estado:</h2>
                <p>{product.estado}</p>
            </div>
            <div className="properties">
                <p>{product.description}</p>
            </div>
        </section>
        </CardContainer>
    )
}


export default Card