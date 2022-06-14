
import React, { useEffect } from "react"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setCatalog } from "../../store/slice/shop";
import { fetchCatalog } from "../../fetchers/fetchCatalog";
import {ItemCount} from "./ItemCount"

//mui
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ChildPageCategories } from "./ChildPageCategories ";



export const StroiCategory = () => {
    const { catalog } = useSelector((state) => state.shop);
    const {id} = useParams();   
    const dispatch = useDispatch();
    const navigate = useNavigate()


    useEffect(() => {
        fetchCatalog().then((data) => {
            dispatch(setCatalog(data));
        });
    }, [dispatch]);


    const handleClick = (node) => {
        navigate('/stroicategory/' + node.id)

    }
 
    const renderTree = (nodes) => (
  
        <TreeItem key={nodes.id} nodeId={nodes.id + ''}
            label = {<ItemCount nodes={nodes}/>}
            onClick={() => handleClick(nodes)}
        >
            {Array.isArray(nodes.childCategories)
                ? nodes.childCategories.map((node) => renderTree(node))
                : null}
        </TreeItem>
       
    );
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
                <p style={{ display: "flex", marginLeft: "50px" }}>Категория</p>
                <TreeView aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 580, flexGrow: 1, maxWidth: 300,
                          marginLeft: "50px",overflowY: 'auto'  }}
                >
                    {catalog.map((data) => (
                        renderTree(data)))}
                </TreeView>
            </div>
            {id && <ChildPageCategories id={id} />}
        </>
    )
}

// categories ? <img src={svg} alt="No categories"/> : 
// {catalog.map((data) => (

//     <TreeItem key={data.id} nodeId={data.id + ''} 
//        label={
//        <div>
//        <span>{data.name}</span>
//        <span>{data.childCount}</span>
//        </div>
//    } 
//        onClick={() => handleClick(data)}>

//     {Array.isArray(data.childCategories)
//     ? data.childCategories.map((node) => renderTree(node))
//      : null}   


// label={
//     <div style={{
//         display: "flex",
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     }}>
//         <span>{nodes.name}</span>
//         <span
//             style={{

//                 width: "24px",
//                 height: "24px",
//                 top: "calc(50% - 32px/2)",
//                 background: "#ABABAB",
//                 borderRadius: "16px",
//                 textAlign: "center"
//             }}>
//             {nodes.childCount}</span>
//     </div>}

// const iconCounter = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: "34px",
//     height: "34px",
//     marginLeft: "10px",
//     top: "calc(50% - 32px/2)",
//     background: "#ABABAB",
//     borderRadius: "16px",
//     textAlign: "right"
// }

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