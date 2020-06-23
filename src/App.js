import React , {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import imagen from './turismo.jpg';
import Formulario from './components/Formulario';
import axios from 'axios';
import Spinner from './components/Spinner';
import Muestreador from './components/Muestreador';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`;

const Imagen = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 5rem;
`;


const Heading = styled.h1`
  font-family: 'Brush Script MT', cursive;
  color: #2F4F4F;
  text-align: left;
  font-weight: 700px;
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 120px;

  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #000080;
    display: block;
  }
`;

const Detalle = styled.p`
font-family:'Brush Script MT', Helvetica, sans-serif;
font-size: 30px;
color: #fff;
border-style: outset;
border-color: #DC143C;
text-align: center;
background-color: #191970;
margin-top: 50px;
padding: 20px;
`;

function App() {
    //extraer valores provincia
    const [provincia,guardarProvincia] = useState('');
    //extraer el municipio
    const [municipio, guardarMunicipio] = useState('');
  
    //trae array
    const [resultado, guardarResultado] = useState({});
  
    //spinner
    const [cargando, guardarCargando] = useState(false);
    
    useEffect(() => {
  
      const extraermunicipio = async () => {
      
        //evitar la ejecucion la primera vez --- 
      if (provincia === '') return;
  
      //consultar la api 
      const url = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&id=${municipio}`;
      const resultado = await axios.get(url)
  
      //mostrar el spinner
      guardarCargando(true);
  
      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
          guardarCargando(false)
  
          //guardar resultado
        guardarResultado(resultado.data.municipios[0]);
        }, 3000);
        guardarResultado(resultado.data.municipios[0]);
      }
      extraermunicipio();
    },[provincia,municipio])
  
    //mostrar spinner o resultado
const componente = (cargando) ? <Spinner/> : <Muestreador resultado={resultado}/> 
  
  
  
  
  
  return (
    <Contenedor>
          <div>
        <Imagen
        src={imagen}
        alt='imagen turismo'
        />
      <Detalle>
       La presidencia de la Nacion invita a ver detalles de cada municipio que desea visitar
      </Detalle>
     
      </div>

      <div>
      <Heading> Donde desea viajar</Heading>
      <Formulario
      guardarProvincia={guardarProvincia}
      guardarMunicipio={guardarMunicipio}
      />
      {componente}
      </div>
    </Contenedor>
  );
}
export default App;