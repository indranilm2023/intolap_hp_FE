import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
// import Paper from '@mui/material/Paper';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { MuiColorInput } from 'mui-color-input'

import UpgradePlan from '../upgrade_section/upgradePlan'


const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

export default function TYSettings() {

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

    const [checkbox, setcheckbox] = useState({
        Twitter: false,
        Facebook: false,
        WhatsApp: false,
        LinkedIn: false,
        Reddit: false,
        Telegram: false,
        VK: false,
        Email: false
    });
    const { Twitter, Facebook, WhatsApp, LinkedIn, Reddit, Telegram, VK, Email } = checkbox;

    const handleChange = (event) => {
        setcheckbox({
            ...checkbox,
            [event.target.name]: event.target.checked,
        });
    };


    const [color, setColor] = React.useState('#ffffff')

    const handleColorChange = (newValue) => {
        setColor(newValue)
    }



    return (
        <Container sx={{ m: 2, borderRadius: 2, p: 2, backgroundColor:"#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Thank you page</h3>
                    <p>Customize the thank you page after submission</p>
                </Grid>
                <Grid item xs={8}>

                    <form onSubmit={handleSubmit}>

                        <div id="upload_img_email_setting" style={{ marginBottom: "10%" }}>
                            {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                                 Delete
                            </Button> */}
                            <div style={{ height: 100, width: 100, border: "1px solid black", borderRadius: "50%", overflow: "hidden" }}>
                                upload
                            </div>
                            <UpgradePlan prop="hhh" />

                        </div>

                        <div id="TY_title" style={{ marginBottom: "10%" }}>
                            <strong>Title</strong>

                            <TextField
                                label="TY_title"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="TY_subheading" style={{ marginBottom: "10%" }}>
                            <strong>Subheading</strong><br />
                            <TextField
                                label="Subheading"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Reward_Description" style={{ marginBottom: "10%" }}>
                            <strong>Reward Description</strong><br />
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Reward Description"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="current_position_text" style={{ marginBottom: "10%" }}>
                            <strong>current  position text</strong><br />
                            <p>{`User's current position will be determined by #[POSITION]. You can show the total users using #[TOTAL] variable.`}</p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="current  position text"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Users_referred_text" style={{ marginBottom: "10%" }}>
                            <strong>Users referred text</strong><br />
                            <p>{`User's current position will be determined by {POSITION}. You can show the total users using {TOTAL} variable.`}</p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Users referred text"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Social_media_share_message" style={{ marginBottom: "10%" }}>
                            <strong>Social media share message</strong><br />
                            <p>{`User's current position will be determined by {POSITION}. You can show the total users using {TOTAL} variable.`}</p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Social media share message"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <p><strong>Preview :</strong>I have joined PROJECT 1 waitlist. https://getlaunchlist.com/sites/create</p>

                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Social_media_type" style={{ marginBottom: "10%" }}>
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                <FormLabel component="legend"><strong>Pick one or more social media share buttons</strong></FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Twitter} onChange={handleChange} name="Twitter" />
                                        }
                                        label="Twitter"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Facebook} onChange={handleChange} name="Facebook" />
                                        }
                                        label="Facebook"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={WhatsApp} onChange={handleChange} name="WhatsApp" />
                                        }
                                        label="WhatsApp"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={LinkedIn} onChange={handleChange} name="LinkedIn" />
                                        }
                                        label="LinkedIn"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Reddit} onChange={handleChange} name="Reddit" />
                                        }
                                        label="Reddit"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Telegram} onChange={handleChange} name="Telegram" />
                                        }
                                        label="Telegram"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={VK} onChange={handleChange} name="VK" />
                                        }
                                        label="VK"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Email} onChange={handleChange} name="Email" />
                                        }
                                        label="Email"
                                    />

                                </FormGroup>
                            </FormControl>

                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="Background_Color" style={{ marginBottom: "10%" }}>
                            <strong>Background Color</strong><br />
                            <MuiColorInput value={color} onChange={handleColorChange} />

                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="CTA_btn_text" style={{ marginBottom: "10%" }}>
                            <strong>CTA button Text</strong>

                            <TextField
                                label="CTA button Text"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                        </div>

                        <div id="CTA_btn_url" style={{ marginBottom: "10%" }}>
                            <strong>CTA button url</strong>

                            <TextField
                                label="CTA button url"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                        </div>

                        <div id="social_media_sec" style={{ marginBottom: "10%" }}>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <strong>X/Twitter</strong>
                                    <TextField
                                        label="Twitter"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <strong>Instagram</strong>
                                    <TextField
                                        label="Instagram"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <strong>Linkedln</strong>
                                    <TextField
                                        label="Twitter"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <strong>Facebook</strong>
                                    <TextField
                                        label="Facebook"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <strong>Redit</strong>
                                    <TextField
                                        label="Redit"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                </Grid>
                            </Grid>

                        </div>

                        <div id="tracking_code" style={{ marginBottom: "10%" }}>
                            <strong>Tracking code</strong><br />
                            <p>Add js code to track conversion from thank you page. The below code will be added before head tag.</p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Tracking code"
                                style={{ width: '100%', height: '100px' }}
                            />

                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="TY_switch_sec" style={{ marginBottom: "10%" }}>
                            <div id="Hide_Confetti" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Hide Confetti from thank you page</strong>
                                        <p>Confetti is shown when a user reaches the thank you page. You can hide it if you want.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>

                            <div id="Hide_Referral" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Hide Referral</strong>
                                        <p>Activating this will hide the user current position and number of referrals on thank you page. However,
                                            LaunchList will still be able to track the number of referrals.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>

                            <div id="Hide success page" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Hide success page until email is verified</strong>
                                        <p>If you enable this option, the success page will be hidden until the user verifies their email address.
                                            Please make sure to enable email verification.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>


                            <div id="Hide powered by LaunchList" >
                                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                    <div>
                                        <strong>Hide powered by LaunchList</strong>
                                        <p>Choose whether to show powered by logo or not</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <UpgradePlan prop="hhh" />
                            </div>


                        </div>


                        <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
                            Save Thank You Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}