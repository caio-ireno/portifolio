import { Box } from '@mui/material';
import React from 'react';
import CardSkill from '../Card/CardSkill';

export default function AboutSkills() {
  return (
    <Box
      sx={{ backgroundColor: 'secondary.main' }}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      paddingY="100px"
    >
      <Box
        gap="10px"
        display="flex"
        flexWrap={'wrap'}
        justifyContent="center"
        alignItems={'center'}
        // flexDirection={{ xs: 'column', md: 'row' }}
      >
        <CardSkill
          name="React"
          url="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        />
        <CardSkill
          name="JavaScript"
          url="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
        />
        <CardSkill
          name="TypeScript"
          url="
          https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
        />
        <CardSkill
          name="HTML"
          url="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <CardSkill
          name="CSS"
          url="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
        <CardSkill
          name="GitHub"
          url="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
        />
      </Box>
    </Box>
  );
}
