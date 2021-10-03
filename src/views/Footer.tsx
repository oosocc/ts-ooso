import React from 'react';
import {Box, Container, Link, Typography} from "@material-ui/core";

function Copyright(){
    return (
        <Typography variant="body2" color={"textSecondary"}  align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://ooso.cc/">
                青年网络家园
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


interface FooterProps {
    description: string;
    title: string;
}

export default function Footer(props: FooterProps){
    const { description, title } = props;
    return (
        <Box component={"footer"}>
            <Container>
               <Typography variant={"h6"} align={"center"} gutterBottom>
                   {title}
               </Typography>
                <Typography variant={"subtitle1"} align={"center"} color={"textSecondary"} component={"p"}>
                   {description}
               </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}
