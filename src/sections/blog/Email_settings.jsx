import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
// import FormControl from '@mui/material/FormControl';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
// import Paper from '@mui/material/Paper';

import UpgradePlan from '../upgrade_section/upgradePlan'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

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

export default function EmailSettings() {


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
        <Container sx={{ m: 2, borderRadius: 2, p: 2 ,backgroundColor:"#fff"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Email settings</h3>
                    <p>How do you want to send emails?</p>
                    <div id="email_left_instruction" style={{ backgroundColor: "rgb(220 252 232)", borderLeft: "10px solid rgb(34 197 99)", padding: "2%  20% 2% 5%", borderRadius: "0% 10% 10% 0%" }}>
                        <strong style={{ color: "#158040" }}>Best practise for sending emails</strong>
                        <ul>
                            <li>We recommend sending either a verification email or a welcome email. Sending both will confuse your users</li>
                            <li>{`Use {position} and {referralLink} in your messages to replace your user's position and referral link.`}</li>
                            <li>We recommend using your own domain name to send emails. This will help you brand your emails and improve your email deliverability.</li>
                        </ul>
                    </div>
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

                        <div id="welcome_Email_switch" style={{ marginBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                <div>
                                    <strong>Send a welcome email</strong>
                                    <p>Choose whether to send a welcome email with referral link</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="custom_welcome_sub" style={{ marginBottom: "10%" }}>
                            <strong>Custom welcome mail subject</strong>

                            <TextField
                                label="Project Name"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                            <UpgradePlan prop="hhh" />
                        </div>

                        <div id="custom_Email_welcome_msg" style={{ marginBottom: "10%" }}>
                            <strong>Custom welcome message</strong><br />
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="current  position text"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <UpgradePlan prop="hhh" />


                        </div>

                        <div id="wcta_button_switch" style={{ marginBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                <div>
                                    <strong>Hide CTA button on Welcome mail</strong>
                                    <p>Disabling this will hide the CTA button (Check Your Position) on welcome mail</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <UpgradePlan prop="hhh" />


                        </div>

                        <div id="welcome_Email_switch" style={{ marginBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                <div>
                                    <strong>Send welcome mail after email is verified</strong>
                                    <p>Choose whether to send a welcome email with referral link after email is verified</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <UpgradePlan prop="hhh" />


                        </div>


                        <div id="send_Email_switch" style={{ marginBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                <div>
                                    <strong>Send an email verification mail</strong>
                                    <p>Choose whether to send a welcome email with referral link after email is verified</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <UpgradePlan prop="hhh" />


                        </div>

                        <div id="customVerification" style={{ marginBottom: "10%" }}>
                            <strong>Custom verification message</strong><br />
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="current  position text"
                                style={{ width: '100%', height: '100px' }}
                            />
                            <UpgradePlan prop="hhh" />


                        </div>

                        <div id="reply_sec" style={{ marginBottom: "10%" }}>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <strong>Reply to name</strong>

                                    <TextField
                                        label="Reply to name"
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
                                    <strong>Reply to email</strong>

                                    <TextField
                                        label="Reply to email"
                                        variant="outlined"
                                        fullWidth
                                        // value={projectName}
                                        // onChange={(e) => setProjectName(e.target.value)}
                                        margin="normal"
                                        sx={{ m: 0, p: 0 }}
                                    />
                                    <UpgradePlan prop="hhh" />


                                </Grid>
                            </Grid>

                        </div>

                        <div id="custom_welcome_sub" >
                            <strong>Send email from</strong>

                            <TextField
                                label="Project Name"
                                variant="outlined"
                                fullWidth
                                // value={projectName}
                                // onChange={(e) => setProjectName(e.target.value)}
                                margin="normal"
                                sx={{ m: 0, p: 0 }}
                            />
                            <UpgradePlan prop="hhh" />


                        </div>

                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
                            Save Email Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}