import { Box } from '@mui/material';
import React from 'react';
import AboutSkills from '../components/About/AboutSkills';
import AboutText from '../components/About/AboutText';

export default function AboutMe() {
  return (
    <Box
      sx={{ backgroundColor: 'secondary.main' }}
      component={'main'}
      display={'flex'}
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 180px)'}
    >
      <Box component={'section'}>
        <AboutText />
      </Box>
      <Box component={'section'}>
        <AboutSkills />
      </Box>
    </Box>
  );
}
