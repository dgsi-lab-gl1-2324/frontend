import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { getContratos } from '../../../utils/apicalls';
import { Button, IconButton } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { putContrato } from '../../../utils/apicalls';
function Hero() {
  const [data, setData] = React.useState([]);
  const getData = () => {
    getContratos().then((res) => {
      setData(res);
    }).catch((error) => {
      console.error(error);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handleButton = (id, resolucion) => {
    console.log(id, resolucion);
    putContrato(id, resolucion).then((res) => {
      console.log(res);
      getData();
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
   <Box id="hero" sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{bgcolor: 'primary.main'}}>
              <TableCell sx={{ color: 'white' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white' }}>Ubicación</TableCell>
              <TableCell sx={{ color: 'white' }}>Fecha</TableCell>
              <TableCell sx={{ color: 'white' }}>Hora</TableCell>
              <TableCell sx={{ color: 'white' }}>Descripción</TableCell>
              <TableCell sx={{ color: 'white' }}>Presupuesto</TableCell>
              <TableCell sx={{ color: 'white' }}>Resolución</TableCell>
              <TableCell sx={{ color: 'white' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.ubicacion}</TableCell>
                <TableCell>{row.fecha}</TableCell>
                <TableCell>{row.hora}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.presupuesto}</TableCell>
                <TableCell>{row.resolucion}</TableCell>
                <TableCell>
                  <IconButton color = "success" onClick={() => handleButton(row._id, 'Aceptado')}><CheckCircle /></IconButton>
                  <IconButton color='error' onClick={() => handleButton(row._id, 'Rechazado')}><Cancel /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>      
    </Box>
  );
}
export default Hero;