import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";

const columns = [
  { field: "id", headerName: "Order Number", width: 120 },
  { field: "date", headerName: "Order Date" },
  { field: "status", headerName: "Order Status", width: 150 },
  { field: "cient", headerName: "Client" },
  { field: "carriers", headerName: "Carriers", width: 120 },
  { field: "trip", headerName: "Trip Number", width: 150 },
  { field: "routes", headerName: "Routes", width: 100 },
  { field: "cargo", headerName: "Cargo parameters", width: 150 },
  { field: "freight", headerName: "Freight", width: 100 },
  { field: "additional", headerName: "Additional expenses", width: 150 },
  { field: "profit", headerName: "Profit" },
  { field: "document", headerName: "Documents" },
];

const rows = [
  {
    id: 1,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 2,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 3,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
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
export default function Access() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [filterOther, setFilterOther] = React.useState(true);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterOther(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterOther(true);
        break;
    }
  };
  return (
    <>
      <div>
        <Box p={1}>
          <Box className="filterBox" gap={3}>
            <Typography sx={{ position: "absolute" }}>
              Show Filters:{" "}
            </Typography>
            <Button
              variant={filterOther === false ? "outlined" : "contained"}
              onClick={() => Display(1)}
              sx={{ ml: "180px" }}
            >
              Other
            </Button>
          </Box>
          <Box
            className="filterBox"
            gap={3}
            display={
              desktop
                ? filterOther == true
                  ? "flex"
                  : "none"
                : filterOther == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Other: </Typography>
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
              label="User"
              variant="outlined"
              sx={{
                width: 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />

            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Show only active"
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterOther === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
        >
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
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
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
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
