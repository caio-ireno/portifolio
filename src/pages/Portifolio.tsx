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
  topics: [];
}
export default function Portifolio() {
  const [users, setUsers] = useState<GitProps[]>([]);
  useEffect(() => {
    api.get('/users/caio-ireno/repos').then((r) => {
      setUsers(r.data);
    });
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
          topics={user.topics}
        />
      ))}
    </Box>
  );
}
