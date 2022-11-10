import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";

const columns = [
  { field: "id", headerName: "Request Number", width: 120 },
  { field: "status", headerName: "Status" },
  { field: "purpose", headerName: "Request Purpose", width: 150 },
  { field: "created", headerName: "Created" },
  { field: "transport", headerName: "Transport Type", width: 120 },
  { field: "cargo", headerName: "Cargo Information", width: 150 },
  { field: "loading", headerName: "Loading Place", width: 150 },
  { field: "unloading", headerName: "Unloading Place", width: 150 },
  { field: "ldate", headerName: "Loading Date", width: 150 },
  { field: "udate", headerName: "Unloading Date", width: 150 },
  { field: "status", headerName: "Status" },
  { field: "client", headerName: "Client" },
  { field: "seller", headerName: "Seller" },
  { field: "price", headerName: "Price propoals", width: 150 },
];

const rows = [
  {
    id: 1,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
  {
    id: 2,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
  {
    id: 3,
    status: "Snow",
    purpose: "Jon",
    created: "",
    transport: "",
    cargo: "",
    loading: "IE",
    unloading: "AM",
    ldate: "",
    udate: "",
    client: "UAB",
    seller: "Darius",
    price: "",
  },
];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function Issued() {
  const [payValue, setPayValue] = React.useState([null, null]);
  const [issueValue, setIssueValue] = React.useState([null, null]);
  const [orderValue, setOrderValue] = React.useState([null, null]);
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(false);
  const [filterClients, setFilterClients] = React.useState(false);
  const [filterUsers, setFilterUsers] = React.useState(false);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(false);
        break;
      case 2:
        setFilterDate(false);
        break;
      case 3:
        setFilterClients(false);
        break;
      case 4:
        setFilterUsers(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(true);
        break;
      case 2:
        setFilterDate(true);
        break;
      case 3:
        setFilterClients(true);
        break;
      case 4:
        setFilterUsers(true);
        break;
    }
  };
  return (
    <>
      <div>
        <Box p={1}>
          <Box className="filterBox" gap={1}>
            <Typography sx={{ position: "absolute" }}>
              Show Filters:{" "}
            </Typography>
            <Button
              variant={filterID === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              ID
            </Button>
            <Button
              variant={filterDate === false ? "outlined" : "contained"}
              onClick={() => Display(2)}
            >
              Date
            </Button>
            <Button
              variant={filterClients === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Clients
            </Button>
            <Button
              variant={filterUsers === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Users
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={1}
            mt="30px"
            display={filterID == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>ID: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(1)}
            >
              Del
            </Button>
            <Box>
              <Box display="flex" gap={1}>
                <TextField
                  id="outlined-basic"
                  label="Order Number"
                  variant="outlined"
                  sx={{ ml: "60px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Number Invoices"
                  variant="outlined"
                />
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Invoices are seen
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User"
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Group by
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User"
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Invoice type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User"
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display="flex" gap={1} ml="60px">
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="Hide negative invoices"
                />
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Order Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User"
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Tags
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User"
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterID === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterDate == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Date: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(2)}
            >
              Del
            </Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ml="60px">
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Pay until From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={payValue}
                  onChange={(newValue) => {
                    setPayValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Box>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ml="60px">
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Issued From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={issueValue}
                  onChange={(newValue) => {
                    setIssueValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Box>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box ml="60px">
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Order Status date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={orderValue}
                  onChange={(newValue) => {
                    setOrderValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Box>
            </LocalizationProvider>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Payment type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="User"
              >
                <MenuItem value={1}>Admin</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{
              mt: 1,
              display: filterDate === true ? "flex" : "none",
            }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterClients == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Clients: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(3)}
            >
              Del
            </Button>
            <TextField
              id="outlined-basic"
              label="Client"
              variant="outlined"
              sx={{ ml: "60px" }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterClients === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterUsers == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Users: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(4)}
            >
              Del
            </Button>
            <FormControl sx={{ m: 1, minWidth: 320, ml: "60px" }}>
              <InputLabel id="demo-simple-select-helper-label">User</InputLabel>
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
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Department
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
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Seller
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
          <Divider
            sx={{ mt: 1, display: filterUsers === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          mt={2}
          alignItems="center"
        >
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<FilterAltIcon />}
              sx={{ borderRadius: "20px" }}
            >
              To Filter
            </Button>
          </Box>
          <Box display="flex" gap={1} alignItems="center">
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Send all invoices
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              XML unloading
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Excel
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Box mt={2}>
          <div style={{ height: 400, width: "auto" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Box>
      </div>
    </>
  );
}
