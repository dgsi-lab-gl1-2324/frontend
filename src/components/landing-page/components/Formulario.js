import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import security from '../../../images/security.png';
import {postCont} from '../../../utils/apicalls';


function Hero() {
  const [nombre, setNombre] = React.useState('');
  const [ubicacion, setUbicacion] = React.useState('');
  const [fecha, setFecha] = React.useState('');
  const [hora, setHora] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [presupuesto, setPresupuesto] = React.useState('');

  const handleClear = () => {
    setNombre('');
    setUbicacion('');
    setFecha('');
    setHora('');
    setDescripcion('');
    setPresupuesto('');
  };
  const handleSave = () => {
    // Get user email from session storage
    const email = sessionStorage.getItem('email');
    const resolucion= "Pendiente";

    // Create JSON object
    const data = {
      email,
      nombre,
      ubicacion,
      fecha,
      hora,
      descripcion,
      presupuesto,
      resolucion,
    };
    postCont(data).then((response) => {
      if (response.status === 500) {
        console.log('Error');
      }  else if (email === response.email) {
        handleClear();
        alert('Contratación guardada exitosamente');
        console.log('Contratación guardada');
      } else {
        console.log(response.status);
        console.log('Error');
        alert('Error al guardar la contratación');
      }
    });
  };
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
      <Stack spacing={2} sx={{ width: '100%', maxWidth: 500 }}>
        <TextField label="Nombre" variant="outlined" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <TextField label="Ubicación" variant="outlined" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
        <TextField label="Fecha" variant="outlined" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <TextField label="Hora" variant="outlined" value={hora} onChange={(e) => setHora(e.target.value)} />
        <TextField label="Descripción" variant="outlined" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <TextField label="Presupuesto" variant="outlined" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={handleClear}>Clear</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
        </Stack>
      </Stack>
      </Container>
    </Box>
  );
}
export default Hero;
