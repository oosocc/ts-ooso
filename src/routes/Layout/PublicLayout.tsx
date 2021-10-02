import {Grid, makeStyles, Theme} from "@material-ui/core";
import {ErrorBoundary} from "../../components";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '100vh', // Full screen height
        paddingTop: 56, // on Small screen
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64, // on Large screen
        },
    },
     header: {},
    // toolbar: {
    //     paddingLeft: theme.spacing(1),
    //     paddingRight: theme.spacing(1),
    // },
    // title: {
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    //     flexGrow: 1,
    //     textAlign: 'center',
    //     whiteSpace: 'nowrap',
    // },
    // content: {
    //     flexGrow: 1, // Takes all possible space
    //     padding: theme.spacing(1),
    // },
    // footer: {},
}));


const PublicLayout: React.FC  = ({children}) => {
    const classes = useStyles();


    return (
        <Grid container direction={"column"} className={classes.root}>
            <Grid item className={classes.header} component={"header"}>

            </Grid>
        </Grid>


    );
};

export default PublicLayout;
