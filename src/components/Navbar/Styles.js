import {makeStyles, alpha} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
 appBar: {
   boxShadow: 'none',
   borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
   [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
   },
 },
 title: {
   flexGrow: 1,
   alignItems: 'center',
   display: 'flex',
   textDecoration: 'none'
 },
 image: {
   marginRight: '10px',
 },
 menuButton: {
   marginRight: theme.spacing(2),
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
 },
 grow: {
   flexGrow: 'relative',
 },
 search:{
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0,25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      width: 'auto',
   },
},
seachIcon: {
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignitems: 'center',
   justifyContent: 'center',
},
inputRoot: {
   color: 'inherit',
},
inputInput: {
   padiing: theme.spacing(1, 1, 1, 0),
   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   transition: theme.transitions.create('width'),
   witdh: '100%',
   [theme.breakpoints.up('md')]: {
      width: '20ch',
   },
},
 root: {
    maxWidth: '100%'
 },
 media: {
    height: 0,
    paddingTop: '56.25%', //16:9
 },
 cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
 },
 cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
 },
}));