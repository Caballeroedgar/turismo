import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #DC143C;
    padding: 1rem;
    color: #000080;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Arial Black', cursive;
    border-radius: 10px;

`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
    );
}

export default Error;