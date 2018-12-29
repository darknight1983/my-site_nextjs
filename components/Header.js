import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styledAppBar } from './sharedStyles'


const styles = theme => ({
  appBar: {
    opacity: '0.95'
  }
})



function Header(props) {
  const { classes } = props;
  return (
      <div className={styledAppBar}>
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5"
                        color="primary"
                        component='h1'
                        className={classes.name}>
              Jacolby Green
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
