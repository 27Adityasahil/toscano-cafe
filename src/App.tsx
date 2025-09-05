import React from 'react';
import { CartProvider } from './contexts/CartContext';
import TopInfoBar from './components/TopInfoBar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Cart from './components/Cart';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* <TopInfoBar /> */}
        <main 
        // className="pt-16"
        >
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <GoogleMap />
          <Footer />
        </main>
        {/* <Cart /> */}
      </div>
    </CartProvider>
  );
}

export default App;