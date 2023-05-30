import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
    },
    media: {
        paddingTop: "56.25%", //NOTE: Testing -> 16:9 aspect ratio (change as per your image aspect ratio)
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    description: {
        marginTop: theme.spacing(2),
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
}));