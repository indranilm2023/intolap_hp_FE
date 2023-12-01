import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
// import FormControl from '@mui/material/FormControl';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
// import Paper from '@mui/material/Paper';



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

export default function BlockSettings() {

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
        <Container sx={{ m: 2, borderRadius: 2, p: 2 , backgroundColor:"#fff"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Blocks</h3>
                    <p>Block certain users from joining your waitlist.</p>
                </Grid>

                <Grid item xs={8}>

                    <form onSubmit={handleSubmit}>

                        <div id="Block known temporary email domains switch" style={{ marginBottom: "10%" }}>
                            <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                                <div>
                                    <strong>Block known temporary email domains</strong>
                                    <p>Block users who use temporary email domains like mailinator.com, tempmail.com, temp-mail.com, etc. to join your waitlist.
                                        This will block more than 3000 temporary email domains. See the list at Blocked Domains.
                                    </p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </div>


                        <div id="Referral IDs" style={{ marginBottom: "10%" }}>
                            <strong>Referral IDs</strong><br />
                            <p>Enter the referral ID of users you want to block them from inviting other users.
                                Separate each ID with a comma.
                            </p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Referral IDs"
                                style={{ width: '100%', height: '100px' }}
                            />

                        </div>


                        <div id="Keyword Pattern Matching" >
                            <strong>Keyword Pattern Matching</strong>
                            <p>Enter the keyword pattern you want to block to join your waitlist.
                                Separate each keyword with a comma.
                            </p>
                            <Textarea
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                defaultValue="Keyword Pattern Matching"
                                style={{ width: '100%', height: '100px' }}
                            />

                        </div>

                        <strong>Show example of keywords pattern matching</strong> <br/>

                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
                            Save Email Settings
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    )
}