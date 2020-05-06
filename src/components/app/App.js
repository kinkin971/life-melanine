import React from 'react';
import Footer from '../views/footer/footer';
import Header from '../views/header/header';
import Accueil from '../views/pages/accueil.page'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Accueil />
      </div>
      <Footer />
    </div>
  );
}

export default App;
