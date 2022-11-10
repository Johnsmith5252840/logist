import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function Active() {
  return (
    <>
      <div>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography fontWeight="700" mt={2}>
                Legal Address
              </Typography>
              <Box display="flex" gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                />
                <TextField id="outlined-basic" label="Fax" variant="outlined" />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight="700" mt={2}>
                Postal Address
              </Typography>
              <Box display="flex" gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                />
                <TextField id="outlined-basic" label="Fax" variant="outlined" />
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
