import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Switch from '@mui/material/Switch';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import UpgradePlan from '../upgrade_section/upgradePlan'

export default function TranslationSettings() {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(state);
    };

    return (
        <Container sx={{ m: 2, borderRadius: 2, p: 2, backgroundColor:"#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Translation</h3>
                    <p>Customize the default text to match your language</p>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={handleSubmit}>

                        <FormControl variant="standard" fullWidth>

                                <Grid container spacing={2}>

                                    <Grid item xs={6}>
                                        <strong>Hi</strong><br/>
                                        <p>Appear on emails</p>

                                        <TextField
                                            label="Hi"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <strong>Thanks for signing up!</strong><br/>
                                        <p>Appear on thank you page title</p>

                                        <TextField
                                            label="Thanks for signing up!"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <strong>Verify Email Address</strong><br/>
                                        <p>Appear on verification email cta button and subject</p>

                                        <TextField
                                            label="Verify Email Address"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <strong>Check your position</strong><br/>
                                        <p>Appear on welcome email cta button</p>

                                        <TextField
                                            label="Thanks for signing up!"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <strong>All rights reserved</strong><br/>
                                        <p>Appear on emails footer</p>

                                        <TextField
                                            label="All rights reserved"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                        <UpgradePlan prop="hhh" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <strong>Trouble clicking verify button</strong><br/>
                                        <p>Appear on verification email</p>

                                        <TextField
                                            label="Trouble clicking verify button"
                                            variant="outlined"
                                            fullWidth
                                            // value={projectName}
                                            // onChange={(e) => setProjectName(e.target.value)}
                                            margin="normal"
                                            sx={{ m: 0, p: 0 }}
                                        />
                                    </Grid>

                                </Grid>
                                

                        </FormControl>

                        <p>Missing Something? Tell us</p>

                        <Button type="submit" variant="contained" color="primary" sx={{mt:4}}>
                            Save Notification Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}