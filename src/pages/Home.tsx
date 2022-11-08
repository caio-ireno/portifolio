import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import img from '../assets/caio.png';
import ButtonsSocialMedia from '../components/Buttons/ButtonsSocialMedia';

export default function HomeCard() {
  return (
    <Box
      sx={{ backgroundColor: 'secondary.main' }}
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 180px)'}
    >
      <Box
        component="img"
        src={img}
        alt="caio"
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <Box display="flex">
          <Typography
            sx={{
              fontWeight: '800',
            }}
            color="white"
            variant="h3"
            fontSize={{ xs: '2rem', md: '3rem' }}
          >
            Hi, I'm
          </Typography>
          <Typography
            sx={{
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
              fontWeight: '800',
            }}
            variant="h3"
            marginLeft="10px"
            fontSize={{ xs: '2rem', md: '3rem' }}
          >
            Caio
          </Typography>
          <Typography fontSize={{ xs: '2rem', md: '3rem' }} variant="h3">
            🖖
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: '800',
          }}
          color="white"
          variant="h5"
          marginBottom="20px"
        >
          Front End Developer
        </Typography>
        <Box marginBottom={'20px'}>
          <Typography
            fontSize={{ xs: '1rem', md: '1.5rem' }}
            color="white"
            variant="h5"
            marginBottom="10px"
          >
            🇧🇷 Living in Brazil
          </Typography>
          <Typography
            fontSize={{ xs: '1rem', md: '1.5rem' }}
            color="white"
            variant="h5"
            marginBottom="10px"
          >
            👨‍💻 Engineer{' '}
          </Typography>
          <Typography
            fontSize={{ xs: '1rem', md: '1.5rem' }}
            color="white"
            variant="h5"
          >
            📧 caio_ireno@hotmail.com
          </Typography>
        </Box>
        <Box>
          <ButtonsSocialMedia />
        </Box>
      </Box>
    </Box>
  );
}
