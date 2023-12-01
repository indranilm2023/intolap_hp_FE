import React, { useState } from 'react';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { MuiColorInput } from 'mui-color-input';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { border, styled } from '@mui/system';
import Box from '@mui/material/Box';

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
  `
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const allStyles = {
    h4: {
        color: 'red',
    },
    p: {
        margin: 0,
        padding: 0,
    },
};

export default function LeaderBoard() {
    const [state, setstate] = useState({ type: "10px" });

    const handleChange = (event) => {
        setstate(event.target.value);
    };

    const [borderWidth, setBorderWidth] = useState('');

    const handleBorderWidthChange = (event) => {
        setBorderWidth(event.target.value);
    };

    const [color, setColor] = React.useState({
        hBackground: '#000000',
        hText: '#FFFFFF',
        oddRowBackground: '#F3F4F6',
        oddRowText: '#374151',
        evenRowBackground: '#FFFFFF',
        evenRowText: '#222222',
    });

    const handleColorChange = (newValue) => {
        setColor(newValue);
    };

    return (
        <Container sx={{ m: 2, borderRadius: 2, p: 2 }}>
            <div style={{marginBottom:"5%"}}>
                <strong>Leaderboard</strong><br />
                <p>Want to show the leaderboard on your website?
                    You can use the below code to show the leaderboard on your website.
                </p>
            </div>

            <Grid container spacing={2}>
                <Grid
                    item
                    xs={7}
                    style={{ borderRadius: '20px', padding: '2%',backgroundColor:"#fff" }}
                >
                    <h2>Customize widget</h2>

                    <div id="Type" style={{ marginBottom: "10%" }}>
                        <strong> Type</strong> <br />
                        <FormControl sx={{ m: 1, width: '100%' }}>
                            {/* <InputLabel id="demo-select-large-label">Type</InputLabel> */}
                            <Select
                                // labelId="demo-select-large-label"
                                id="demo-select-large"
                                value={state.type}
                                // label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10px">10px</MenuItem>
                                <MenuItem value="12px">12px</MenuItem>
                                <MenuItem value="16px">16px</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div id="Show title_switch" style={{ marginBottom: "10%" }}>
                        <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                            <div>
                                <strong>Show title</strong>
                                <p style={allStyles.p}>If enabled, title and description will be shown at the top</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>

                    <div id="Title" style={{ marginBottom: '5%' }}>
                        <strong>Title</strong>
                        <TextField
                            // label="Title"
                            variant="outlined"
                            fullWidth
                            // value={projectName}
                            // onChange={(e) => setProjectName(e.target.value)}
                            margin="normal"
                            sx={{ m: 0, p: 0 }}
                        />
                    </div>

                    <div id="sub_title" style={{ marginBottom: '5%' }}>
                        <strong>Sub title</strong>
                        <TextField
                            // label="Title"
                            variant="outlined"
                            fullWidth
                            // value={projectName}
                            // onChange={(e) => setProjectName(e.target.value)}
                            margin="normal"
                            sx={{ m: 0, p: 0 }}
                        />
                    </div>


                    <div id="user_limit_switch" style={{ marginBottom: '5%' }}>
                        <strong>Users limit</strong><br />
                        <p style={allStyles.p}>Maximum number of users to show in the leaderboard. Limit is 100</p>
                        <TextField
                            // label="Sub title"
                            variant="outlined"
                            fullWidth
                            type='number'
                            // value={projectName}
                            // onChange={(e) => setProjectName(e.target.value)}
                            margin="normal"
                            sx={{ m: 0, p: 0 }}
                        />
                    </div>



                    <div id="Input Fields">

                        <div id="Header Background Color" style={{ marginBottom: '5%' }}>
                            <strong>Header Background Color</strong>
                            <br />
                            <p style={allStyles.p}>
                                This color is used for the input border. Default is light gray.
                            </p>
                            <MuiColorInput value={color.hBackground} onChange={handleColorChange} />
                        </div>

                        <div id="Header Text Color" style={{ marginBottom: '5%' }}>
                            <strong>Header Text Color</strong>
                            <br />
                            <p style={allStyles.p}>
                                This color is used for the input background. Default is white.
                            </p>
                            <MuiColorInput value={color.hText} onChange={handleColorChange} />
                        </div>

                        <div id="Odd Row Background Color" style={{ marginBottom: '5%' }}>
                            <strong>Odd Row Background Color</strong>
                            <br />
                            <p style={allStyles.p}>This color appears when the input is filled</p>
                            <MuiColorInput value={color.oddRowBackground} onChange={handleColorChange} />
                        </div>

                        <div id="Odd Row Text Color" style={{ marginBottom: '5%' }}>
                            <strong>Odd Row Text Color</strong>
                            <br />
                            <p style={allStyles.p}>This color appears when the input is empty</p>
                            <MuiColorInput value={color.oddRowText} onChange={handleColorChange} />
                        </div>

                        <div id="Even Row Background Color" style={{ marginBottom: '5%' }}>
                            <strong>Even Row Background Color</strong>
                            <br />
                            <p style={allStyles.p}>This color appears when the input is filled</p>
                            <MuiColorInput value={color.evenRowBackground} onChange={handleColorChange} />
                        </div>

                        <div id="Even Row Text Color" style={{ marginBottom: '5%' }}>
                            <strong>Even Row Text Color</strong>
                            <br />
                            <p style={allStyles.p}>This color appears when the input is empty</p>
                            <MuiColorInput value={color.evenRowText} onChange={handleColorChange} />
                        </div>
                    </div>

                    <div id="Show referral count" style={{ marginBottom: "5%" }}>
                        <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                            <div>
                                <strong>Show referral count</strong>
                                <p style={allStyles.p}>If enabled, referral count will be added</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>

                    <div id="Show referral count" >
                        <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                            <div>
                                <strong>Show name</strong>
                                <p style={allStyles.p}>If enabled, name column will be added</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>


                </Grid>
                <Grid item xs={5} 
                // style={{backgroundColor:"#fff"}}
                >
                    <h4 style={allStyles.h4}>Preview</h4>
                    <Box
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            // border: '1px solid black',
                            borderRadius: '20px',
                            padding: '2%',
                            backgroundColor:"#fff"
                        }}
                    >
                        <h2>Leaderboard</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Email</th>
                                    <th>Referrals</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pos1</td>
                                    <td>email</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>

                    </Box>
                </Grid>

                <Grid
                    item
                    xs={10}
                    style={{
                        // border: '1px solid black',
                        borderRadius: '20px',
                        padding: '2%',
                        marginTop: '2%',
                        backgroundColor:"#fff"
                    }}
                >
                    <h4 style={allStyles.h4}>Instructions</h4>
                    <div>
                        <InputLabel>Paste the following code anywhere on your page where you want to display the leaderboard</InputLabel>

                        <TextField
                            // label="Project Name"
                            variant="outlined"
                            fullWidth
                            // value={projectName}
                            // onChange={(e) => setProjectName(e.target.value)}
                            margin="normal"
                            placeholder="code to paste"
                            sx={{ m: 0, p: 0 }}
                        />
                        <Button>Copy</Button>
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
}
