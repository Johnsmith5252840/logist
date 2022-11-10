import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function Index() {
  const [show, setShow] = React.useState(false);
  const handleHide = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Box sx={{ width: "100%", textAlign: "left", padding: "50px" }}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ borderRadius: "3px" }}
        >
          Add
        </Button>
        <Box display="flex" gap={2} alignItems="center" mt={2}>
          <Typography>Filter</Typography>
          <Button
            variant="outlined"
            startIcon={
              show === true ? <VisibilityIcon /> : <VisibilityOffIcon />
            }
            sx={{ borderRadius: "3px" }}
            onClick={show === true ? () => handleHide() : () => handleShow()}
          >
            {show === true ? "Show" : "Hide"}
          </Button>
          <Button variant="contained" sx={{ borderRadius: "3px" }}>
            To Filter
          </Button>
        </Box>
        {show === false ? (
          <Box>
            <Box display="flex" gap={2}>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Author:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Assigned to:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Contragent:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Deadline:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box display="flex" gap={2}>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Status:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Label:
                </Typography>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Value
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}
