import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
title: {
    marginTop: '5%',
},
emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
        marginRight: '20px',
    },
    [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
    },
},
checkoutButton: {
    minWidth: '150px',
},
link: {
    TextDecoration: 'none',
},
cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
},
}));
