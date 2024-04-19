import {useState,useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { getContratosByCliente } from '../../../utils/apicalls';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Container from '@mui/material/Container';

function Hero() {
  const [data, setData] = useState([]);
  const getData= () => {
    getContratosByCliente(sessionStorage.getItem("email")).then((res) => {
      setData(res);
    }).catch((error) => {
      console.error(error); 
    });
  }
  useEffect(() => {
    getData();
  }, []);

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