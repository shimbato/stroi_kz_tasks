
import { Pagination, Stack } from "@mui/material";
import React from "react";

export  const BasicPagination=()=>{
    return (
        <Stack spacing={2}>
            <Pagination count={10} 
                        color="primary"
                        sx={{
                             display: 'flex',
                             position: "relative",

                             margin: "0 auto" ,
                             alignItems: 'end'
                        }} />
            </Stack>
            
    );
}