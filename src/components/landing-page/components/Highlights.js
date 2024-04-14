import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Nos adaptamos a ti',
    description:
      'Descubre un producto que se ajusta a tus necesidades, ofreciéndote la flexibilidad que buscas.',},
  {
    icon: <ConstructionRoundedIcon />,
    title: 'La mejor experiencia de usuario',
    description:
    'Descubre una web moderna y fácil de usar, con una interfaz intuitiva y sencilla.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Precisión en cada detalle',
    description:
    'Realizamos nuestros trabajos con la maxima profesionalidad'  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Gestiona las contrataciones de manera facil',
    description:
      'Gestiona tus contrataciones de manera sencilla y eficaz, con un sistema de contratación seguro y fiable.',},
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Apoyo fiable',
    description:

      'Disfruta de un soporte al cliente fiable y eficaz, que te ayudará a resolver cualquier problema que puedas tener.',},
   
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Lo que nos hace destacar
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explora las características que hacen de nuestra plataforma la mejor: desde la flexibilidad, la facilidad de uso y la precisión en cada detalle, hasta el soporte al cliente fiable y eficaz.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
