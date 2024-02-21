import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { updateItem, getOneProduct } from '../services/services';
import { useParams } from 'react-router'; // Importa el hook useParams

const StyledEdit = styled.div`
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
  
  .state,
  .electric {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    margin-right: 5%; /* Espacio entre los campos */
  }
  
  .state label,
  .electric label {
    margin-right: 5%; /* Espacio entre el label y el input */
    
  }
  
  .state select {
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

const Edit = () => { //Edit es un componente funcional
  const { id } = useParams(); // Obtiene el parámetro id de la URL UseParams es un hook que nos permite acceder a los parámetros de la URL
  const { register, formState: { errors }, handleSubmit, reset, setValue, watch } = useForm(); // Utiliza el hook useForm para manejar el formulario
  const [loading, setLoading] = useState(false); // Utiliza el hook useState para guardar el estado de loading
  const [ProductData, setProductData] = useState();// Utiliza el hook useState para guardar el estado de productData

  useEffect(() => { // Utiliza el hook useEffect para hacer la petición a la API
    const fetchData = async () => { //fetchData es una función asíncrona que nos permite hacer la petición a la API
      const ProductData = await getOneProduct(id); //productData es una constante que almacena el resultado de la petición a la API
      setproductData(ProductData); //Usamos el método setproductData para guardar los detalles de la bicicleta en el estado


      //necesito saber como han llamado en el back a los atributos paraa modificarlos entodos los formularios 

      setValue('name', productData.name) // Utiliza el método setValue para actualizar el valor del campo name con el valor de productData.name
      setValue('speeds', productData.speeds) // Utiliza el método setValue para actualizar el valor del campo speeds con el valor de productData.speeds
      setValue('state', productData.state) // Utiliza el método setValue para actualizar el valor del campo state con el valor de productData.state
      setValue('electric', productData.electric) // Utiliza el método setValue para actualizar el valor del campo electric con el valor de productData.electric
      setValue('image', productData.image) // Utiliza el método setValue para actualizar el valor del campo image con el valor de productData.image
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, [id, setValue]) // Le pasa el id y el método setValue como dependencias para que se ejecute cada vez que cambien

  const onSubmit = async (data) => { // Define una función asincrónica llamada onSubmit que recibe los datos del formulario
    try { // Utiliza un bloque try...catch para manejar errores
      setLoading(true); // Actualiza el estado de loading a true
      await updateItem(id, data); // Utiliza el id capturado de la URL
      alert('¡Los datos del elemento han sido actualizados correctamente!');// Muestra un mensaje de éxito
      reset();// Reinicia el formulario
    } catch (error) {// Maneja el error
      console.error('Error al actualizar el elemento:', error);// Muestra un mensaje de error en la consola
      alert('Error al actualizar el elemento. Por favor, intenta nuevamente.');// Muestra un mensaje de error
    } finally { 
      setLoading(false); // Actualiza el estado de loading a false
    }
  };
        
  return ( // Renderiza el formulario
    <StyledEdit>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Nombre</label>
            <input className='name' type="text" {...register('name', {
                required: true,
            })}/>
            {errors.name?.type === 'required' && <p className="error-message">El campo nameo es requerido</p>} 
        </div>
        <div>
            <label>Velocidades</label>
            <input className='speeding' type="text" {...register('speeds', {
                pattern: /^[0-9]{1,3}$/,
                required: true,
            })}/>
            {errors.speeds?.type === 'pattern' && <p className="error-message">La velocidad debe ser un valor numérico</p>}
            {errors.speeds?.type === 'required' && <p className="error-message">El campo velocidades es requerido</p>}
        </div>
        <div className='cuadred'>
            <div className='state'>
                <label>Cuadro</label>
                <select {...register('state')}>
                    <option value="Aluminio">Aluminio</option>
                    <option value="Acero">Acero</option>
                    <option value="Plástico">Plástico</option>
                    <option value="Carbono">Carbono</option>
                    <option value="Otros">Otros</option>
                </select>
            </div>
            <div className='electric'>
                <label>Eléctrica</label>
                <input className="checkbox-css" type="checkbox" {...register('electric')} />
            </div>
        </div>
        <div>
            <label htmlFor="imageUpload">Img URL</label>
            <input className="Productsimg" type="text" {...register('image', {
            pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            required:true,
            })}/>
            {errors.image?.type === 'pattern' && <p className="error-message">El formato de la url de la imagen es incorrecto</p>}
            {errors.image?.type === 'required' && <p className="error-message">El campo url de la imagen es requerido</p>}
        </div>
        <input type="submit" value="Editar"/>
   </form>
    </StyledEdit>
);
}
           
export default Edit;