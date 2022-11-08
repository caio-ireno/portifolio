import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import img from '../../assets/men-work.png';

export default function AboutText() {
  return (
    <Box
      sx={{ backgroundColor: 'secondary.main' }}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box sx={{ color: 'secondary.contrastText' }} width="50%">
        <Typography
          fontSize={{ xs: '2rem', md: '3rem' }}
          fontWeight={'700'}
          sx={{
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
          }}
          variant="h3"
          marginBottom={'50px'}
        >
          About Me
        </Typography>
        <Typography variant="h4" fontSize={{ xs: '1.5rem', md: '2rem' }}>
          Hello! I'm Caio Eduardo. I'm engineer and front end developer. In my
          free time, i enjoy read a good book, play video game and play with my
          cats.
        </Typography>
      </Box>
      <Box
        display={{ xs: 'none', md: 'flex' }}
        component="img"
        src={img}
        alt="men working"
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        p={'0.75rem'}
      />
    </Box>
  );
}
