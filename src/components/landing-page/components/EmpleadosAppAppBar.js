import * as React from 'react';
import PropTypes from 'prop-types';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ToggleColorMode from './ToggleColorMode';
import { Typography } from '@mui/material';

function AppAppBar({ mode, toggleColorMode }) {


  const navigate = useNavigate();

    const cerrarSesion = () => {
      googleLogout();
      sessionStorage.clear();
      navigate("/");
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
            <Typography
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                mr: 2, // Ajusta el margen a tu gusto
              }}
            >
              {sessionStorage.getItem('name')} 
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button>
                Administrar contratos
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
          <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              onClick={cerrarSesion}
              target="_blank"
            >
              Cerrar sesión
            </Button>
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
