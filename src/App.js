import './App.css';
import Footer from './components/Footer';
import FormSearch from './components/FormSearch'
import Navbar from './components/Navbar'

import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);


  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="h-screen dark:bg-gray-900 bg-gray-200 dark:text-gray-200 black">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <FormSearch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
