import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';

// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
// import { styled } from '@mui/system';
// import Paper from '@mui/material/Paper';

// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import FormLabel from '@mui/material/FormLabel';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
// import { MuiColorInput } from 'mui-color-input'

import UpgradePlan from '../upgrade_section/upgradePlan'


export default function SubmissionSettings() {

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
                    <h3>Submissions</h3>
                    <p>Manage what happen when you receive a new submisison</p>
                </Grid>
                <Grid item xs={8}>

                    <form onSubmit={handleSubmit}>

                        <div id="Initial Position" style={{ marginBottom: "10%" }}>
                            <strong>Initial Position</strong><br />
                            <p>Use this to inflate the number of submissions. The new submission position will start from the below number.
                                The number should be greater than the last submission position.
                            </p>

                            <TextField
                                label="Initial Position"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                             <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Position to move" style={{ marginBottom: "10%" }}>
                            <strong>Position to move</strong><br />
                            <p>How many spots should a referred by user move up on a successful referral?
                                5 is the default. Set to 0, if you do not want to track referrals.
                            </p>

                            <TextField
                                label="Position to move"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                             <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Sub_switch_sec" >
                            <div id="Enable Google recaptcha protection" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Enable Google recaptcha protection</strong>
                                        <p>Protect your waitlist from spam submissions.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>

                            <div id="Auto validate email on signup" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Auto validate email on signup</strong>
                                        <p>Validate the authenticity of email addresses by checking for syntax errors, hard bounces, risky domains, 
                                            disposable domains, duplicates, spam traps, business domain, and deliverability.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <strong>You have 10 email validation credits left. Buy more</strong>
                            </div>

                            <div id="Hide success page" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Disable new submissions</strong>
                                        <p>Disable new submissions for this waitlist. 
                                            Enabling this will not allow users to register for this waitlist.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>


                        </div>


                        <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
                            Save Submission Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}