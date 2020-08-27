import { makeStyles } from '@material-ui/core/styles'
class Estilo {
    
static useStyles = makeStyles((theme) => (
    {
        root: {
          display: 'flex',
        },
        drawer: {
          [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
          },
        },
        appBar: {
          [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
          },
        },
        menuButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
          width: 240,
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
      }
));
}
export default Estilo;