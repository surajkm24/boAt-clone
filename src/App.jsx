import { Box, useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react';
import './App.css'
import { AllRoutes } from './Components/AllRoutes';
import { Footer } from './Components/Footer.jsx/Footer';
import { Navbar } from './Components/Navbar/Navbar'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') {
      toggleColorMode();
    }
  }, []);

  return (
    <Box w='100%' overflowX='hidden'>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  )
}

export default App
