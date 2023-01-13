import { Box, useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react';
import './App.css'
import { Footer } from './Components/Footer.jsx/Footer';
import { Navbar } from './Components/Navbar/Navbar'
import { News } from './Components/News/News';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, []);

  return (
    <Box>
      <Navbar />
      <News />
      <Footer />
    </Box>
  )
}

export default App
