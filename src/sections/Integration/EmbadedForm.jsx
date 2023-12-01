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

export default function EmbadedForm() {
  const [fontSize, setFontSize] = useState('');

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const [borderWidth, setBorderWidth] = useState('');

  const handleBorderWidthChange = (event) => {
    setBorderWidth(event.target.value);
  };

  const [color, setColor] = React.useState({
    iBorder: '#CCCCCC',
    iBackg: '#FFFFFF',
    iText: '#374151',
    iPlaceHolder: '#999999',
    btnColor: '#22c563',
    btnBorderColor: '#22c563',
    btnTextColor: '#000000',
  });

  const handleColorChange = (newValue) => {
    setColor(newValue);
  };

  return (
    <Container sx={{ m: 2, borderRadius: 2, p: 2 }}>
      <div style={{ marginBottom: "5%" }}>
        <strong>Integrate with embed code</strong><br />
        <p>Integrating using embed is the easiet and quickest way to show the signup form on your website.
          Customize the widget and follow the below steps to integrate on your website.
        </p>
      </div>

      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          style={{borderRadius: '20px', padding: '2%', backgroundColor:"#fff" }}
        >
          <h2>Customize widget</h2>

          <div id="Display settings">
            <h4 style={allStyles.h4}>Display settings</h4>

            <div id="rounded-corner" style={{ marginBottom: '2%' }}>
              <strong>Rounded corner</strong>
              <p style={allStyles.p}>This will appear around all inputs and button</p>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>

            <div id="Form position" style={{ marginBottom: '2%' }}>
              <strong>Form position</strong>
              <p style={allStyles.p}>Form will align to parent container</p>
              <Button variant="contained" shape="square" color="primary" sx={{ mr: 2 }}>
                Left
              </Button>
              <Button variant="contained" shape="square" color="primary" sx={{ mr: 2 }}>
                Center
              </Button>
              <Button variant="contained" shape="square" color="primary">
                Right
              </Button>
            </div>

            <div id="Items alignment" style={{ marginBottom: '2%' }}>
              <strong>Items alignment</strong>
              <p style={allStyles.p}>
                Show form items side by side or stack. Items will automatically align to stack on
                small screen devices.
              </p>
              <Button variant="contained" shape="square" color="primary" sx={{ mr: 2 }}>
                Stack
              </Button>
              <Button variant="contained" shape="square" color="primary" sx={{ mr: 2 }}>
                Inline
              </Button>
            </div>

            <div id="fontsize">
              <strong> Font Size</strong> <br />
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-select-large-label">Font Size</InputLabel>
                <Select
                  labelId="demo-select-large-label"
                  id="demo-select-large"
                  value={fontSize}
                  label="Age"
                  onChange={handleFontSizeChange}
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

            <div id="Border width">
              <strong> Border Width</strong> <br />
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel>Border Width</InputLabel>
                <Select
                  labelId="demo-select-large-label"
                  id="demo-select-large"
                  value={borderWidth}
                  label="Age"
                  onChange={handleBorderWidthChange}
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
          </div>

          <div id="Input Fields">
            <h4 style={allStyles.h4}>Input Fields</h4>

            <div id="Email Placeholder" style={{ marginBottom: '5%' }}>
              <strong>Email Placeholder</strong>
              <TextField
                label="Enter your email address here"
                variant="outlined"
                fullWidth
                // value={projectName}
                // onChange={(e) => setProjectName(e.target.value)}
                margin="normal"
                sx={{ m: 0, p: 0 }}
              />
            </div>

            <div id="Collect name_switch" style={{ marginBottom: '5%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 0, padding: 0 }}>
                <div>
                  <strong>Collect name</strong>
                  <p style={allStyles.p}>If enabled, a name input field will be displayed.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div id="Input Border Color" style={{ marginBottom: '5%' }}>
              <strong>Input Border Color</strong>
              <br />
              <p style={allStyles.p}>
                This color is used for the input border. Default is light gray.
              </p>
              <MuiColorInput value={color.iBorder} onChange={handleColorChange} />
            </div>

            <div id="Input Background Color" style={{ marginBottom: '5%' }}>
              <strong>Input Background Color</strong>
              <br />
              <p style={allStyles.p}>
                This color is used for the input background. Default is white.
              </p>
              <MuiColorInput value={color.iBackg} onChange={handleColorChange} />
            </div>

            <div id="Input Text Color" style={{ marginBottom: '5%' }}>
              <strong>Input Text Color</strong>
              <br />
              <p style={allStyles.p}>This color appears when the input is filled</p>
              <MuiColorInput value={color.iText} onChange={handleColorChange} />
            </div>

            <div id="Input Placeholder Color" style={{ marginBottom: '5%' }}>
              <strong>Input Placeholder Color</strong>
              <br />
              <p style={allStyles.p}>This color appears when the input is empty</p>
              <MuiColorInput value={color.iPlaceHolder} onChange={handleColorChange} />
            </div>
          </div>

          <div id="Button Fields">
            <h4 style={allStyles.h4}>Button</h4>

            <div id="Button Text" style={{ marginBottom: '5%' }}>
              <strong>Button Text</strong>
              <TextField
                label="Button Text"
                variant="outlined"
                fullWidth
                // value={projectName}
                // onChange={(e) => setProjectName(e.target.value)}
                margin="normal"
                sx={{ m: 0, p: 0 }}
              />
            </div>

            <div id="Button Color" style={{ marginBottom: '5%' }}>
              <strong>Button Color</strong>
              <br />
              <MuiColorInput value={color.btnColor} onChange={handleColorChange} />
            </div>

            <div id="Button Border Color" style={{ marginBottom: '5%' }}>
              <strong>Button Border Color</strong>
              <br />
              <MuiColorInput value={color.btnBorderColor} onChange={handleColorChange} />
            </div>

            <div id="Button Text Color" style={{ marginBottom: '5%' }}>
              <strong>Button Text Color</strong>
              <br />
              <MuiColorInput value={color.btnTextColor} onChange={handleColorChange} />
            </div>
          </div>

          <div id="Custom Code">
            <h4 style={allStyles.h4}>Custom Code</h4>

            <div id="Custom Code" style={{ marginBottom: '5%' }}>
              <strong>Head Code</strong>
              <br />
              <p style={allStyles.p}>
                Use this to add custom fonts, css, or any other code you want to add to the head of
                your waitlist.
              </p>
              <Textarea
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Reward Description"
                style={{ width: '100%', height: '100px' }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={5} 
        // style={{backgroundColor:"#fff"}}
        >
          <h4 style={allStyles.h4}>Preview</h4>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2%',
              alignItems: 'center',
              justifyContent: 'center',
              // border: '1px solid black',
              borderRadius: '20px',
              padding: '2%',
              height: '10%',
              backgroundColor:"#fff"
            }}
          >
            <InputLabel>Email</InputLabel>

            <TextField
              // label="Project Name"
              variant="outlined"
              // value={projectName}
              // onChange={(e) => setProjectName(e.target.value)}
              margin="normal"
              sx={{ m: 0, p: 0 }}
            />
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
            <InputLabel>{`Step 1. Copy and paste the below code in the <head> section LaunchList`}</InputLabel>

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

          <div>
            <InputLabel>
              Step 2. Paste the following code anywhere on your page where you want to display the
              form
            </InputLabel>

            <TextField
              // label="Project Name"
              variant="outlined"
              fullWidth
              placeholder="code to paste"
              // value={projectName}
              // onChange={(e) => setProjectName(e.target.value)}
              margin="normal"
              sx={{ m: 0, p: 0 }}
            />
            <Button>Copy</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
