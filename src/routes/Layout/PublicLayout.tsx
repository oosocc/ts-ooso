import { Grid } from "@material-ui/core";
import {ErrorBoundary} from "../../components";


const PublicLayout: React.FC  = ({children}) => {


    return (
        <Grid>
            <Grid container>
                <Grid item>header</Grid>
                <Grid item component={"main"}>
                    <ErrorBoundary name={"Centent"} > {children} </ErrorBoundary>
                </Grid>
                <Grid item>footer</Grid>
            </Grid>
        </Grid>


    );
};

export default PublicLayout;
