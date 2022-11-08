import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ButtonMenuProps {
  name: string;
  url: string;
}

export default function ButtonMenu(props: ButtonMenuProps): JSX.Element {
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={props.url}>
        <Button
          sx={{
            color: 'white',
            '&:hover': {
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
            },
            fontSize: '18px',
            fontWeight: '700',
          }}
          variant="text"
        >
          {props.name}
        </Button>
      </Link>
    </div>
  );
}
