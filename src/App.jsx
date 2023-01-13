import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react';
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
