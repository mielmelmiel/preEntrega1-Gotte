
/*jsx
import React from 'react';*/
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola desde el contenedor!" />
    </div>
  );
};

export default App;



/*import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Main from "./components/Main"

const App = () => {


  return (
    <>

      <NavBar nombre="Melany" edad={29}/>

      <Main tech={["React","Vite"]} />

      <Footer />

    </>
  )
}

export default App
*/