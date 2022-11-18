import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../utils/Theme';

interface CardProjetosProps {
  name: string | null;
  url: string;
  language: string;
  description: string;
  topics: [];
}

export default function CardProjetos(props: CardProjetosProps) {
  return (
    <Box
      sx={{ backgroundColor: 'secondary.light' }}
      width={{ xs: '350px', sm: '600px' }}
      mx="10px"
      borderRadius={'10px'}
    >
      <Box
        gap={{ xs: '50px', sm: '80px' }}
        justifyContent={'center'}
        alignItems="center"
        display="flex"
        flexDirection={'row'}
        p="20px"
      >
        <Link
          fontSize={{ xs: '24px', sm: '32px', md: '48px' }}
          sx={{
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
            },

            fontWeight: '700',
          }}
          href={props.url}
          target="_blank"
        >
          {props.name}
        </Link>

        <Box
          justifyContent={'center'}
          alignItems="center"
          display="flex"
          flexDirection={'column'}
        >
          {props.topics.map((t) => (
            <Typography
              sx={{
                color: 'transparent',
                backgroundClip: 'text',
                backgroundImage:
                  'linear-gradient(19deg, #21D4FD 50%, #B721FF 100%)',

                fontWeight: '800',
              }}
              fontSize={{ xs: '16px', sm: '24px', md: '32px' }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </Box>

      <Typography
        justifyContent={'center'}
        alignItems="center"
        display="flex"
        p="20px"
        variant="h6"
        textAlign={'center'}
        sx={{ color: theme.palette.secondary.contrastText }}
      >
        {props.description}
      </Typography>
    </Box>
  );
}
