import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
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
export default function Vehicle() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [filterDriver, setFilterDriver] = React.useState(true);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterDriver(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterDriver(true);
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
              variant={filterDriver === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              Driver
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={3}
            mt="30px"
            display={
              desktop
                ? filterDriver == true
                  ? "flex"
                  : "none"
                : filterDriver == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Driver: </Typography>
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
              label="Driver' Name"
              variant="outlined"
              sx={{
                width: 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Driver' surname"
              variant="outlined"
              sx={{
                width: 320,
                mt: desktop ? "0px" : 2,
              }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterDriver === true ? "flex" : "none" }}
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
