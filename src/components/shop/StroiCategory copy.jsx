import { Header } from "../general/Header"
import React, { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

//mui
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { setCatalog } from "../../store/slice/shop";
import { fetchCatalog } from "../../fetchers/fetchCatalog";





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


export const StroiCategory = () => {
    const { catalog } = useSelector((state) => state.shop);
    const dispatch = useDispatch();


    useEffect(() => {
        fetchCatalog().then((data) => {
            dispatch(setCatalog(data));
        });
    }, [dispatch]);


    const iconCounter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "34px",
        height: "34px",
        marginLeft: "10px",
        top: "calc(50% - 32px/2)",
        background: "#ABABAB",
        borderRadius: "16px",
        textAlign: "right"
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <NavLink className="link_btn" to="/shop"><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            E-stroi.kz
                        </Typography>
                        </NavLink>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <Box sx={{ flexGrow: 1, margin: "45px" }}>
                    <p>Главная</p>
                    <Grid container spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 4, md: 8 }}
                    >
                        {catalog.map((data) => (
                            <Grid item xs={2}>
                                <Item sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                    onClick={() => { setCatalog(data) }}
                                >
                                    {data.name}
                                    <span style={iconCounter}>
                                        {data.childCount}
                                    </span>

                                </Item>
                            </Grid>
                        ))}
                    </Grid>

                    {/* {catalog && (
                      <Grid container spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 4, md: 8 }}
                  >
                      {selectedCategory.childCategories.map((data) => (
                          <Grid item xs={2}>
                              <Item sx={{ display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center' }}
                              onMouseEnter={() => {setSelectedSubcategory(data)}}
                              >
                                  {data.name}
                                  <span style={iconCounter}>
                                      {data.childCount}
                                  </span>
                                  
                              </Item>
                          </Grid> 
                      ))}
                  </Grid>
                    )} */}
                </Box>
            </div>


        </>
    )

}
