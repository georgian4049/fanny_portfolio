import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            {/* <Grid container display={'flex'} justifyContent={'center'} >
      
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source_ui={project.source_ui} source_api={project.source_api} source={project.source}  title={project.title} />
                   </Grid>
                ))}
            </Grid> */}

            <Grid container display={'flex'} justifyContent={'center'} >
               Content Loading soon! For the moment, Please check my instagram for my work. Thank you!
                </Grid>
        </Box>
    );
};