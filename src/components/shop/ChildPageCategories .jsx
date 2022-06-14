import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { experimentalStyled as styled } from '@mui/material/styles';
import { fetchCategoriesId } from "../../fetchers/fetchCatalog";
import { setCategoriesId, shopReducer } from "../../store/slice/shop";

import { NoProduct, NotFoundPage } from "./NoProduct";
import { BasicPagination } from "../styles/BasicPagination";
import { OverFlow} from "../styles/OverFlow";

export const ChildPageCategories = ({ id }) => {

const {categoriesId, totalPage} = useSelector((state)=> state.shop);

const dispatch = useDispatch();

useEffect(()=> {
    fetchCategoriesId({id}).then(data =>{
       dispatch(setCategoriesId(data))
    });
}, [id, dispatch]);

console.log(categoriesId.content)

const Item = styled(Paper)(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: "#EAEAEA",
    color: theme.palette.text.secondary,
    textTransform: "lowercase",
    minHeight: "88px",
    width: "295px",
   
}));

 return (
     <div style={{marginLeft: "400px"}}>
            {categoriesId.content?.length > 0 ?
                 <Box>
                     <Grid container spacing = {{xs: 2, md: 3}}
                           columns={{xs:2, sm: 8, md: 12 }}  
                           style ={{marginTop: "-600px"}}>
                             {categoriesId.content.map((data)=>(
                                 <Grid item xs={2} sm={4} md={4} 
                                       key={data.name} 
                                      >
                                     <Item 
                                          onClick={() => {setCategoriesId(data)}} 
                                          data={data}> 
                                             
                                              {data.name}
                                             
                                     </Item>  
                                 </Grid>
                                ))}
                     </Grid>
                        <BasicPagination/>
                 </Box>
                : <NoProduct/>
             }
     </div>
 )
}






// export const ChildPageCategories = () => {
//     const {categoriesId} = useSelector((state)=> state.shop);
//     const dispatch = useDispatch();
    
    
    
    
//     useEffect(()=> {
//         fetchCategoriesId().then((data)=>{
//            dispatch(setCategoriesId(data))
//         });
//     }, [dispatch]);
    
    
//     console.log(categoriesId.content)
    
    
//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(2),
//         textAlign: 'left',
//         color: theme.palette.text.secondary,
//     }));
    
//      return (
//          <div>
    
//              {categoriesId.content == false ? "Error 404 " : 
//              <Box sx={{flexGrow: 1, margin: "45px"}}>
//                  <Grid container spacing = {{xs: 2, md: 3}}
//                         columns={{xs:4, sm: 4, md: 8 }}
                        
//                         >
             
//                 {categoriesId.map((data)=>(
//                         <Grid item xs={2}>
//                             <Item>{data.name}</Item>
//                         </Grid>
    
//                     ))}
              
//                  </Grid>
//              </Box>
//             }
    
//          </div>
//      )
//     }