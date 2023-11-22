import { useState } from 'react'
import './App.css'
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import { BrowserRouter, Routes , Route, Link, NavLink } from 'react-router-dom';
import ResponsiveAppBar from './pages/Nav';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import { Container, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e0e0e'
    },
    secondary: {
      main:'#10ff10'
    }
  }
})

function LightMode(){

}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Container sx={{marginTop: 8}}>
        <Routes>
        <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
        </Routes>
      </Container >
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

//haaaaaaaaaa