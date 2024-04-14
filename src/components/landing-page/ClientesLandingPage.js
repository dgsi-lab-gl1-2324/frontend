import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ClientesAppAppBar from './components/ClientesAppAppBar';
import ClientesHero from './components/ClientesHero';

import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';



export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <ClientesAppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <ClientesHero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
