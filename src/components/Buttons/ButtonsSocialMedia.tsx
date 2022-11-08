import { Box, Link } from '@mui/material';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';

export default function ButtonsSocialMedia() {
  return (
    <Box display="flex" gap="10px">
      <Link
        href="https://www.linkedin.com/in/caio-eduardo-ireno-84941a142/"
        target="_blank"
      >
        <Box
          color={'white'}
          component="img"
          src={Linkedin}
          alt="React"
          width={{ xs: '5vh', md: '5vh' }}
          height={{ xs: '5vh', md: '5vh' }}
        ></Box>
      </Link>

      <Link href="https://github.com/caio-ireno" target="_blank">
        <Box
          color={'white'}
          component="img"
          src={Github}
          alt="React"
          width={{ xs: '5vh', md: '5vh' }}
          height={{ xs: '5vh', md: '5vh' }}
        ></Box>
      </Link>
    </Box>
  );
}
