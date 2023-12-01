import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Switch from '@mui/material/Switch';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';

export default function TeamSettings() {

    // const [state, setState] = useState({
    //     emailFrequency: null,
    //     email: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(state);
    // };

    return (
        <Container sx={{ m: 2, borderRadius: 2, p: 2, backgroundColor:"#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Team</h3>
                    <p>Manage your waitlist with your team.</p>
                </Grid>
                <Grid item xs={8}>
                    <Button type="submit" variant="contained" color="primary">
                        Add New Team
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}