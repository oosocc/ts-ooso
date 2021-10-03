import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {ErrorBoundary} from "../../components";
import {Footer} from "../../views";

const TITLE_PUBLIC ="ooso学习"
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '100vh', // Full screen height
        paddingTop: 56, // on Small screen
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64, // on Large screen
        },
    },
     header: {},
    toolbar: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    title: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexGrow: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    content: {
        flexGrow: 1, // Takes all possible space
        padding: theme.spacing(1),
    },
    footer: {},
}));


const PublicLayout: React.FC  = ({children}) => {
    const classes = useStyles();

    const title = TITLE_PUBLIC;
    document.title = title;


    return (
        <Grid container direction={"column"} className={classes.root}>
            <Grid item className={classes.header} component={"header"}>
                <AppBar component={"div"}>
                    <Toolbar className={classes.toolbar} disableGutters >
                        <Typography className={classes.title} variant={"h6"} >
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>

            </Grid>

            <Grid item className={classes.content} component={"main"} >
                <ErrorBoundary name={"Content"}>{children}</ErrorBoundary>
            </Grid>

            {/*<Grid item className={classes.footer} component={"footer"}>

            </Grid>*/}
            <Footer
            title={title}
            description={"版权时雨讴"}
            />

        </Grid>


    );
};

export default PublicLayout;
