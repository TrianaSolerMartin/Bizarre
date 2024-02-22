import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { SellProduct } from '../services/services';

const StyledSellProduct = styled.div`


height: 80vh;
display: flex;
align-items: center;

body {
    max-height: 100%;
  }

  form {
    font-family: 'Jost', sans-serif;
    max-width: 450px;
    min-width: 300px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 2%;
    color: #000000;
  }
  
  input[type="text"],
  input[type="file"],
  select {
    width: 100%;
    padding: 3%;
    margin-bottom: 5%;
    border: none;
    background-color: #D9D9D9;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 3%;
    border: none;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 15%;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #333333;
  }
  
  .add {
    margin-top: 10%;
  }
  
  .error-message {
    color: red;
  }  
  
  .cuadred {
    display: flex;
  }
  
  .frame,
  .electric {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    margin-right: 5%; /* Espacio entre los campos */
  }
  
  .frame label,
  .electric label {
    margin-right: 5%; /* Espacio entre el label y el input */
    
  }
  
  .frame select {
    flex: 1; /* El input ocupa todo el espacio restante */
    width: 125px;
    margin-top: 5%;
    
  }
  
  .electric input[type="checkbox"] {
    justify-content: flex-end;
    width: 50%;
    height: 50%;
  }
  
  input[type="submit"] {
    background-color: #3de161d2;
    margin-top: 1%;
  }
`;

const SellProduct= () => {  // Añade el hook useNavigate a la importación de react-router-dom y declara una constante navigate que almacena el hook useNavigate

    const { register, formState: { errors }, handleSubmit, reset} = useForm(); // Desestructura los métodos register, errors y handleSubmit del hook useForm

    const onSubmit = async (data) => {  // Crea una función asíncrona onSubmit que recibe un parámetro data y hace una petición a la API con el método addBicycle
        const { success, error } = await addProduct(data);  // Desestructura las propiedades success y error de la respuesta de la petición a la API con el método addBicycle

        if (success) {  // Si success es true
            // Mostrar mensaje de éxito
            alert('¡El producto se ha añadido correctamente!');
            // Reiniciar el formulario
            reset();
        } else {
            // Mostrar mensaje de error
            alert(error);  // Si success es false, muestra el mensaje de error
        }
    };

    return (
        <StyledSellProduct>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre del Producto</label>
                <input className='name' type="text" {...register('name', {
                    required: true,
                })}/>
                {errors.name?.type === 'required' && <p className="error-message">El campo nombre es requerido</p>}
            </div>
            <div>
                <label>Precio</label>
                <input className='Price' type="text" {...register('Price', {
                    pattern: /^[0-9]{1,3}$/,
                    required: true,
                })}/>
                {errors.price?.type === 'pattern' && <p className="error-message">Precio debe ser un valor numérico</p>}
                {errors.price?.type === 'required' && <p className="error-message">El campo precio es requerido</p>}
            </div>
            <div className='cuadred'>
                <div className='state'>
                    <label>Estado</label>
                    <select {...register('state')}>
                        <option value="new">Nuevo</option>

                    <p>añadir aqui el values o atributos que le hallan dado en el back a "en buen estado"// "dañado etc"...</p>

                        <option value="En perfecto estado">En perfecto estado</option>
                        <option value="Buen estado">Buen estado</option>
                        <option value="Usado">Usado</option>
                        <option value="Roto">Roto</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input className="Productimg" type="text" {...register('image', {
                pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                required:true,
                })}/>
                {errors.image?.type === 'pattern' && <p className="error-message">El formato de la url de la imagen es incorrecto</p>}
                {errors.image?.type === 'required' && <p className="error-message">El campo url de la imagen es requerido</p>}
            </div>
            <input type="submit" value="Añadir"/>
       </form>
        </StyledSellProduct>
    );
}
           
export default SellProduct; // Exporta el componente NewItem para poder utilizarlo en otros archivo