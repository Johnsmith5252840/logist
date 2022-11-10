import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { TextField, Divider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
export default function Templates() {
  const [tree, setTree] = React.useState(1);
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
      <Box sx={{ width: "100%", mt: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box backgroundColor="green" p={2} borderRadius="10px">
              <Typography
                color="white"
                fontSize="24"
                fontWeight="700"
                textAlign="left"
              >
                Template section
              </Typography>
            </Box>
            <Box p={1} textAlign="left">
              <Box
                className="tree"
                onClick={() => {
                  setTree(1);
                }}
                backgroundColor={tree === 1 ? "grey" : "white"}
              >
                <Typography>Requests</Typography>
              </Box>
              <Box
                className="tree"
                onClick={() => {
                  setTree(2);
                }}
                backgroundColor={tree === 2 ? "grey" : "white"}
              >
                <Typography>Departments</Typography>
              </Box>
              <Box
                className="tree"
                onClick={() => {
                  setTree(3);
                }}
                backgroundColor={tree === 3 ? "grey" : "white"}
              >
                <Typography>Employees</Typography>
              </Box>
              <Box
                className="tree"
                onClick={() => {
                  setTree(4);
                }}
                backgroundColor={tree === 4 ? "grey" : "white"}
              >
                <Typography>Groups of employees</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box backgroundColor="green" p={2} borderRadius="10px">
              <Typography color="white" fontSize="24" fontWeight="700">
                Companies
              </Typography>
            </Box>
            {tree === 1 && (
              <Box>
                <Box display="flex" justifyContent="end" mt={2}>
                  <Box display="flex" gap={3} alignItems="center">
                    <Button
                      variant="outlined"
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
              </Box>
            )}
            {tree === 2 && (
              <Box>
                <Box display="flex" justifyContent="end" mt={2}>
                  <Box display="flex" gap={3} alignItems="center">
                    <Button
                      variant="outlined"
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
              </Box>
            )}
            {tree === 3 && (
              <Box>
                <Box p={1}>
                  <Box className="filterBox" gap={3}>
                    <Typography sx={{ position: "absolute" }}>
                      Show Filters:{" "}
                    </Typography>
                    <Button
                      variant={filterOther === false ? "outlined" : "contained"}
                      sx={{ ml: "180px" }}
                      onClick={() => Display(1)}
                    >
                      Other
                    </Button>
                  </Box>

                  <Box
                    className="filterBox"
                    gap={3}
                    mt="30px"
                    display={filterOther == true ? "flex" : "none"}
                  >
                    <Typography sx={{ position: "absolute" }}>
                      Driver:{" "}
                    </Typography>
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
                      sx={{ ml: "60px" }}
                    />
                    <FormControl sx={{ minWidth: 320 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Group
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
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      label="Show only active"
                      sx={{ ml: "60px" }}
                    />
                  </Box>
                  <Divider
                    sx={{
                      mt: 1,
                      display: filterOther === true ? "flex" : "none",
                    }}
                  />
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Box display="flex" gap={3} alignItems="center">
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
                  <Box display="flex" gap={3} alignItems="center">
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
              </Box>
            )}
            {tree === 4 && (
              <Box>
                <Box display="flex" justifyContent="end" mt={2}>
                  <Box display="flex" gap={3} alignItems="center">
                    <Button
                      variant="outlined"
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
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
