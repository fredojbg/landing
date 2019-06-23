import React from 'react';

// Importando los estilos
import './scss/index.scss';

// Importando los componentes
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
