import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, Grid, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function TripBasic() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  return (
    <>
      <div>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={desktop ? 6 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Forwarder
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Carrier Comapny
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
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Contract person
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Carrier contract number with carrier
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
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Vehicle Number"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Trailers Number"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Transport Type
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
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Loading Method
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
              </Box>
            </Grid>
            <Grid item xs={desktop ? 6 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Trip Number"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Tags
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
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Currency
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
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Price With VIT"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    VIT rate
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
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Terms and conditions of payments
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
                  label="Payment Delay"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="SurName"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Passport Number"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
