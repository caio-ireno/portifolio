import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import theme from '../../utils/Theme';
import ButtonMenu from '../Buttons/ButtonMenu';

export default function NavBar({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  return (
    <Box width="100%">
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item display="flex" gap={{ xs: '10px', md: '100px' }}>
              <ButtonMenu name="Home" url="/" />
              <ButtonMenu name="About" url="/about" />
              <ButtonMenu name="Portifolio" url="/portifolio" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}

      <Box
        component={'footer'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        py={'0.5rem'}
        sx={{ backgroundColor: 'secondary.main' }}
        width={'100%'}
      >
        <p
          style={{
            color: theme.palette.secondary.contrastText,
            marginLeft: '5px',
            marginRight: '5px',
            textAlign: 'center',
          }}
        >
          Template created by Caio Ireno, based on Payton Pierce
        </p>
        <p style={{ color: theme.palette.secondary.contrastText }}>
          &copy; 2022
        </p>
      </Box>
    </Box>
  );
}
