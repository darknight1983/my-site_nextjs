import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'



const styles = {
  root: {
    flexGrow: 1
  },
  primary: '#263238'
}

const theme = createMuiTheme({
  palette: {
    primary: { main: '#263238'},
    secondary: { main: '#D50000'}
  }
})

function Header(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
          <Typography variant="h6" color="secondary">
            Jacolby Green
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>

  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
