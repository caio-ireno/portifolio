import api from '../services/Api';
import { useEffect, useState } from 'react';
// import githubProps from '../types/GithubProps';
import CardProjetos from '../components/Card/CardProjetos';
import { Box } from '@mui/material';
interface GitProps {
  name: string;
  html_url: string;
  language: string;
  description: string;
  languages_url: {
    l1: number;
    l2: number;
    l3: number;
  };
}
export default function Portifolio() {
  const [users, setUsers] = useState<GitProps[]>([]);
  useEffect(() => {
    api.get('/users/caio-ireno/repos').then((r) => setUsers(r.data));
  }, []);

  return (
    <Box
      sx={{ backgroundColor: 'secondary.main' }}
      gap="100px"
      justifyContent={'center'}
      alignItems="center"
      display="flex"
      flexWrap={'wrap'}
      minHeight={'calc(100vh - 180px)'}
      py="100px"
    >
      {users.map((user) => (
        <CardProjetos
          name={user.name}
          url={user.html_url}
          language={user.language}
          description={user.description}
        />
      ))}
    </Box>
  );
}
