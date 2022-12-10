import './App.css';
import React from 'react';
import Description from './components/Description';
import UpInformation from './components/UpInformation'
import Responsability from './components/Responsability';
import Property from './components/Property';
import Links from './components/Links'
import Laws from './components/Laws'
import Data from './components/anexo-dos/Data';
import Contact from './components/anexo-dos/Contact'

function App() {
  return (
    <React.Fragment>
      <h1>Anexo I</h1>
      <Description/>
      <UpInformation/>
      <Responsability/>
      <Property/>
      <Links/>
      <Laws/>
      <h1>Anexo II</h1>
      <h2>POLÍTICA DE PRIVACIDAD DE LA APLICACIÓN MAMERAPP</h2>
      <p>AL DESCARGAR Y USAR LA APLICACIÓN MÓVIL COLABORO MANIFIESTAS QUE HAS LEÍDO Y ACEPTAS LA POLÍTICA DE PRIVACIDAD.</p>
      <p>Lee detenidamente esta política de privacidad para usuarios de la aplicación móvil MAMERAPP (en adelante “la APP”). Aquí podrás encontrar toda la información sobre los datos que recopilamos acerca de ti, cómo lo usamos y qué control tienes sobre los mismos.</p>
      <Data/>
      <Contact/>
    </React.Fragment>
  );
}

export default App;
