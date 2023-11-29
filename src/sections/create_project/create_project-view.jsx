import React, { useState } from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function CreateProjectView() {
  const [projectName, setProjectName] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., API call or state update
    console.log(`Project Name: ${projectName}`);
  };



  return (
      <Container>
        <Box
          sx={{
            py: 12,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* page */}
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Project Name"
                variant="outlined"
                fullWidth
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                margin="normal"
              />

              <TextField
                label="Project Url"
                variant="outlined"
                fullWidth
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
          
        </Box>
      </Container>

  );
}
