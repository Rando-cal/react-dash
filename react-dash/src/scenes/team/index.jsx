// Icons may be wrong import

import { Box, Typography, useTheme }from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData.js";
import  AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header.jsx";
import { color } from "@mui/system";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        // will grow
        {field: "id", headerName: "ID",}, 

        // won't grow
        {field: "name", 
        headerName: "Name", 
        flex: 1,
        cellClassName: "name-column--cell",
        },
        {field: "age", 
        headerName: "Age", 
        type: "number",
        headerAlign: "left",
        align: "left"
        },
        {field: "phone", 
        headerName: "Phone Number", 
        flex: 1,
        },
        {field: "email", 
        headerName: "Email", 
        flex: 1,
        },
        {field: "access", 
        headerName: "Access Level", 
        flex: 1,

        // lets us render a different icon based on access
        renderCell: ({ row: {access} }) => {
            return  (
                <Box
                    width ="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access === "admin"
                        ? colors.greenAccent[600]
                        : colors.greenAccent[700]
                    }
                    borderRadius="4px"
                >
                    { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                    { access === "manager" && <SecurityOutlined />}
                    { access === "user" && <SecurityOutlined />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {access}
                    </Typography>
                </Box>
            )
        }
        },
        

    ];


    return(
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                // can find properites in classNames via browser Inspect
                sx={{
                    "& .MuiDataGrid-root" :{
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column-cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer" : {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    }
                


                }}                
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                >    
                </DataGrid>
            </Box>
        </Box>
    )
}

export default Team;