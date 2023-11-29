import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmbadedForm from '../EmbadedForm';
import LeaderBoard from '../LeaderBoard';

export default function IntegrationView() {
  const [component, setComponenet] = useState(<EmbadedForm />);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Button
          onClick={() => {
            setComponenet(<EmbadedForm />);
          }}
          variant="outlined"
          color="primary"
        >
          Embadded Form
        </Button>

        <Button
          onClick={() => {
            setComponenet(<LeaderBoard />);
          }}
          variant="outlined"
          color="primary"
        >
          LeaderBoard
        </Button>
      </Box>

      <Box>
        {component}
      </Box>

    </Container>
  );
}
