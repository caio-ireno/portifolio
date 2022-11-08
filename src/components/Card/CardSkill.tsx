import { Box } from '@mui/system';
import React from 'react';
interface CardSkillProps {
  name: string;
  url: string;
}

export default function CardSkill(props: CardSkillProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        '&:hover': {
          color: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
        },
      }}
      gap="5px"
      borderRadius="5px"
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      padding={'5px'}
    >
      <Box
        component="img"
        src={props.url}
        alt="React"
        width={{ xs: '5vh', md: '5vh' }}
        height={{ xs: '5vh', md: '5vh' }}
      ></Box>
      <Box fontSize={'22px'}>{props.name}</Box>
    </Box>
  );
}
