import * as React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin, GoogleOAuthProvider,googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { postClientes,getEmpleados } from '../../../utils/apicalls';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ToggleColorMode from './ToggleColorMode';
import config from '../../../config'

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };
  const navigate = useNavigate();
    const onSuccess=(res)=>{
        var email=jwtDecode(res.credential).email;
        var name=jwtDecode(res.credential).name;
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', name);
        //parte logica de la comprobacion de si es empleado o cliente
       /* getEmpleados(email)
          .then((response) => {
            if (response.status === 500) 
              cerrarSesion();
             else if (response.status === 200) 
              // Es un empleado
              navigate("/HomeEmpleados");
             else {
              postClientes(email).then((response) => {
                if (response.status === 500) 
                  cerrarSesion();
                 else 
                  // Es un cliente
                  navigate("/HomeClientes");
                
              });
            }
          });*/
        navigate("/HomeClientes");
    }
    const cerrarSesion = () => {
      googleLogout();
      sessionStorage.clear();
      navigate("/");
    }
    const onEror=()=>{
        console.log("error");
    }

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'hsla(220, 60%, 99%, 0.6)'
                : 'hsla(220, 0%, 0%, 0.7)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
                : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('features')}
              >
                Features
              </Button>
              
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('highlights')}
              >
                Highlights
              </Button>
             
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('faq')}
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          <GoogleOAuthProvider clientId={config.clientID}>
          <GoogleLogin onSuccess={onSuccess} 
          onError={onEror}
          />
          </GoogleOAuthProvider>

          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
