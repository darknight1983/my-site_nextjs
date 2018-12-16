import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styledAppBar } from './sharedStyles'








function Header(props) {
  return (
      <div className={styledAppBar}>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h5" color="primary" component='h1'>
              Jacolby Green
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Header;
