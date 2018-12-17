import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styledAppBar } from './sharedStyles'


const styles = theme => ({
  name: {
    fontWeight: 500
  }
})



function Header(props) {
  const { classes } = props;
  return (
      <div className={styledAppBar}>
        <AppBar position="fixed" color="secondary">
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
