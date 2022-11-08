import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardSkill from './CardSkill';

interface CardProjectProps {
  nameProject: string;
  img: string;
  skill1: {
    name: string;
    url: string;
  };
  skill2: {
    name: string;
    url: string;
  };
  skill3: {
    name: string;
    url: string;
  };
}

export default function CardProjetos(props: CardProjectProps) {
  return (
    <Box
      display={'flex'}
      sx={{
        backgroundColor: 'secondary.dark',
      }}
      borderRadius="10px"
    >
      <Box
        display={{ xs: 'none', md: 'flex' }}
        component="img"
        src={props.img}
        borderRadius="10px 0 0 10px"
        alt="men working"
        width={{ xs: '10vh', md: '30vh' }}
        height={{ xs: '10vh', md: '30vh' }}
      />
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        // alignItems={'center'}
        marginLeft={'20px'}
        marginRight={'20px'}
        gap="5px"
      >
        <Typography variant="h3" mb="50px">
          {props.nameProject}
        </Typography>

        <Box
          display="flex"
          flexWrap={'wrap'}
          justifyContent="center"
          alignItems={'center'}
          gap="5px"
        >
          <CardSkill name={props.skill1.name} url={props.skill1.url} />
          <CardSkill name={props.skill2.name} url={props.skill2.url} />
          <CardSkill name={props.skill3.name} url={props.skill3.url} />
        </Box>
      </Box>
    </Box>
  );
}
