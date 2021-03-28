import React from 'react';

const HolaMundo = () => {
  const Hello = 'Hola mundo';
  const isTrue = false;

  return (
    <div className="holamundo">
      <h1>{Hello}</h1>
      <h2>curso de react</h2>
      <img src="" alt=""/>
      {isTrue?<h4>Es verdadero</h4> : <h4>Es Falso</h4>}
      {isTrue&&<h4>Es verdadero</h4>}
    </div>
  )
}

export default HolaMundo;