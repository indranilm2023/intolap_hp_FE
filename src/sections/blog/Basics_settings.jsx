import React,{useState} from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function BasicSettings() {
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    const [projectName, setProjectName] = useState('');
    const [projectUrl, setProjectUrl] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic, e.g., API call or state update
      console.log(`Project Name: ${projectName}`);
    };
  

    return (
        <Container sx={{m:2}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Basics</h3>
                    <p>Basic settings for your waitlist</p>
                </Grid>
                <Grid item xs={8}>

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
                            Save Basic Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}