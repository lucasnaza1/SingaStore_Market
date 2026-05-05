import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Header from './components/Header';
import Home from './routes/home';
import Itens from './routes/itens';
import Favoritos from './routes/favoritos';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.fontBody};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontDisplay};
    color: ${props => props.theme.primary};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  code, label {
    font-family: ${props => props.theme.fontCode};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Custom Scrollbar estilo Zaun */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.secondary};
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/itens' element={<Itens />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
