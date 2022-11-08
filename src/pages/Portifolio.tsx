import { Grid } from '@mui/material';
import CardProjetos from '../components/Card/CardProjetos';
import urlaImg from '../assets/urla2.png';
import pokeImg from '../assets/pokemon.png';
import portifolioImg from '../assets/portifolio.png';

export default function Portifolio() {
  const React = {
    name: 'React',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  };

  const Javascript = {
    name: 'javaScript',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
  };
  const Typescript = {
    name: 'TypeScript',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  };
  const Html = {
    name: 'HTML',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  };
  const Css = {
    name: 'CSS',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  };
  const Chakra = {
    name: 'Chakra',
    url: 'https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS',
  };
  const MaterialUi = {
    name: 'MaterialUi',
    url: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/materialui/materialui-plain.svg',
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      minHeight={'calc(100vh - 180px)'}
      sx={{ backgroundColor: 'secondary.main' }}
      color="secondary.contrastText"
      spacing={4}
    >
      <Grid item xs={5}>
        <CardProjetos
          nameProject="Urla Sorvetes"
          img={urlaImg}
          skill1={React}
          skill2={Typescript}
          skill3={Chakra}
        />
      </Grid>
      <Grid item xs={5}>
        <CardProjetos
          nameProject="Simple Pokedex"
          img={pokeImg}
          skill1={React}
          skill2={Typescript}
          skill3={MaterialUi}
        />
      </Grid>
      <Grid item xs={5}>
        <CardProjetos
          nameProject="Portifolio"
          img={portifolioImg}
          skill1={Javascript}
          skill2={Html}
          skill3={Css}
        />
      </Grid>
    </Grid>
  );
}
