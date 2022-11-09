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
export default function Acts() {
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  const [orderValue, setOrderValue] = React.useState([null, null]);
  const [orderStatusValue, setOrderStatusValue] = React.useState([null, null]);
  const [filterID, setFilterID] = React.useState(true);
  const [filterDate, setFilterDate] = React.useState(false);
  const [filterCarriers, setFilterCarriers] = React.useState(false);
  const [filterTrips, setFilterTrips] = React.useState(false);
  const [filterOther, setFilterOther] = React.useState(false);
  const [filterStatuses, setFilterStatuses] = React.useState(false);
  const [filterSort, setFilterSort] = React.useState(false);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterID(false);
        break;
      case 2:
        setFilterDate(false);
        break;
      case 3:
        setFilterCarriers(false);
        break;
      case 4:
        setFilterTrips(false);
        break;
      case 5:
        setFilterOther(false);
        break;
      case 6:
        setFilterSort(false);
        break;
      case 7:
        setFilterStatuses(false);
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
        setFilterCarriers(true);
        break;
      case 4:
        setFilterTrips(true);
        break;
      case 5:
        setFilterOther(true);
        break;
      case 6:
        setFilterSort(true);
        break;
      case 7:
        setFilterStatuses(true);
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
              variant={filterCarriers === false ? "outlined" : "contained"}
              onClick={() => Display(3)}
            >
              Carriers
            </Button>
            <Button
              variant={filterTrips === false ? "outlined" : "contained"}
              onClick={() => Display(4)}
            >
              Trips
            </Button>
            <Button
              variant={filterOther === false ? "outlined" : "contained"}
              onClick={() => Display(5)}
            >
              Other
            </Button>
            <Button
              variant={filterSort === false ? "outlined" : "contained"}
              onClick={() => Display(6)}
            >
              Sort
            </Button>
            <Button
              variant={filterStatuses === false ? "outlined" : "contained"}
              onClick={() => Display(7)}
            >
              Statuses
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
            <TextField
              id="outlined-basic"
              label="Trip Number"
              variant="outlined"
              sx={{ ml: "60px" }}
            />
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
                  Order date From:
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
            display={filterCarriers == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Carriers: </Typography>
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
              label="Carrier"
              variant="outlined"
              sx={{ ml: "60px" }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterCarriers === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterTrips == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Trips: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(4)}
            >
              Del
            </Button>
            <Box>
              <Box display="flex" gap={3} mt={1}>
                <Button variant="contained" sx={{ ml: "60px" }}>
                  Loading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                />
                <Box>
                  <FormControl sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
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
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                />
                <Box>
                  <FormControl sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
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

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={3} ml="60px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Loading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={loadingValue}
                      onChange={(newValue) => {
                        setLoadingValue(newValue);
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
              </Box>
              <Divider sx={{ mt: 1 }} />
              <Box display="flex" gap={3} mt={1}>
                <Button variant="contained" sx={{ ml: "60px" }}>
                  Unloading place
                </Button>
                <TextField
                  id="outlined-basic"
                  label="Place/Company"
                  variant="outlined"
                />
                <Box>
                  <FormControl sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
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
                <TextField
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                />
                <Box>
                  <FormControl sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Region
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

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
              </Box>
              <Box display="flex" gap={3} ml="60px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box>
                    <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                      Unloading date From:
                    </Typography>
                    <DateRangePicker
                      calendars={1}
                      value={unloadingValue}
                      onChange={(newValue) => {
                        setUnloadingValue(newValue);
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
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterTrips === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterOther == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Other: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(5)}
            >
              Del
            </Button>
            <Box>
              <Box display="flex" gap={3}>
                <TextField
                  id="outlined-basic"
                  label="Vehicle Number"
                  variant="outlined"
                  sx={{ ml: "60px" }}
                />
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Forwarder
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Driver"
                  variant="outlined"
                  sx={{ ml: "60px" }}
                />
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="No receive invoice"
                />
              </Box>
              <Box display="flex" gap={3} ml="60px" mt={1}>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Consolidation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Tags
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                  >
                    <MenuItem value={1}>ALL</MenuItem>
                    <MenuItem value={2}>Yes</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterOther === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterSort == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Sort: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(6)}
            >
              Del
            </Button>
            <FormControl sx={{ minWidth: 320, ml: "60px" }}>
              <InputLabel id="demo-simple-select-helper-label">By</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 320 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Order
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>ALL</MenuItem>
                <MenuItem value={2}>Yes</MenuItem>
                <MenuItem value={3}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterSort === true ? "flex" : "none" }}
          />
          <Box
            className="filterBox"
            gap={1}
            display={filterStatuses == true ? "flex" : "none"}
          >
            <Typography sx={{ position: "absolute" }}>Statuses: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(7)}
            >
              Del
            </Button>
            <Box ml="60px">
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Trip Status:
              </Typography>
              <FormControl sx={{ minWidth: 320 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Trip Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                >
                  <MenuItem value={1}>ALL</MenuItem>
                  <MenuItem value={2}>Yes</MenuItem>
                  <MenuItem value={3}>No</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box>
                <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                  Order Status date From:
                </Typography>
                <DateRangePicker
                  calendars={1}
                  value={orderStatusValue}
                  onChange={(newValue) => {
                    setOrderStatusValue(newValue);
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
            <Box>
              <Typography sx={{ mt: 2, mb: 1, textAlign: "left" }}>
                Distribution:
              </Typography>
              <FormControl sx={{ minWidth: 320 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Distribution
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Age"
                >
                  <MenuItem value={1}>ALL</MenuItem>
                  <MenuItem value={2}>Yes</MenuItem>
                  <MenuItem value={3}>No</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Divider
            sx={{ mt: 1, display: filterStatuses === true ? "flex" : "none" }}
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
            <Typography>Cost of Trips:</Typography>
            <span
              style={{
                backgroundColor: "#e0dddd",
                borderRadius: "5px",
                padding: "10px 20px",
                color: "green",
              }}
            >
              500
            </span>
            <Typography>USD</Typography>
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Auto Trip
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