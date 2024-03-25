import React from 'react'
import './App.css'
// import './Style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner7 from './components/Banner7'
import Banner6 from './components/Banner6'
import Banner5 from './components/Banner5'
import Outstation from './components/tab/Outstation'
import Local from './components/tab/Local'
import Airport from './components/tab/Airport'
import Banner4 from './components/Banner4'
import Banner3 from './components/Banner3'
import Banner2 from './components/Banner2'
import { useState } from 'react'


const App = () => {
  const [type, setType] = useState('Outstation');


  const handleTypeChange = (newType) => {
    setType(newType);
  };
  const renderComponent = () => {
    switch (type) {
      case 'Outstation':
        return <Outstation handleTypeChange={handleTypeChange} />;
      case 'Local':
        return <Local handleTypeChange={handleTypeChange} />;
      case 'Airport':
        return <Airport handleTypeChange={handleTypeChange} />;
      default:
        return 'null';
    }
  };
  return (

    <div>
      <Header />
      <div className='banner text-center'>
        <h2 className='text-white'>​India's Leading One-Way Inter-City Cab Service Provider</h2>
        <div className='card'>
          {renderComponent()}

        </div>

      </div>
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 />
      <Banner7 />
      <Footer />
    </div>
  )
}

export default App