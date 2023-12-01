import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function NotificationSettings() {

    const [state, setState] = useState({
        emailFrequency: null,
        email:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <Container sx={{ m: 2 ,borderRadius:2, p:2, backgroundColor:"#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Notification</h3>
                    <p>Set notification</p>
                </Grid>
                <Grid item xs={8}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <strong>Enable notification by email</strong>
                            <p>Choose whether to receive a mail on new submission</p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-label">Choose the frequency of emails</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select"
                                value={state.emailFrequency}
                                // label="Age"
                                name='emailFrequency'
                                onChange={(e) => handleChange(e)}
                            >
                                <MenuItem value="Once A Day">Once A Day</MenuItem>
                                <MenuItem value="Alternet day">Alternet day</MenuItem>
                                <MenuItem value="Every Monday">Every Monday</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Project Url"
                            variant="outlined"
                            fullWidth
                            name='email'
                            value={state.email}
                            onChange={(e) => handleChange(e)}
                            margin="normal"
                        />

                        <Button type="submit" variant="contained" color="primary" sx={{mt:4}}>
                            Save Notification Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}