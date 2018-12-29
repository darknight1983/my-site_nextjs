import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Link from 'next/link';




const styles = theme => ({
  root: {
    backgroundColor: '#0D47A1',
    opacity: 0.9,
    height: '35vh',
    color: 'white',
  },
  icons: {
    width: '30px',
    height: '30px'
  },
  margin: {
    marginTop: 50
  }
});

const IconBox = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" xs={12}>
        <Grid item className={classes.margin}>
          <h2>Lets Connect!</h2>
        </Grid>
        <Grid container justify="center" spacing={24}>
          <Grid item>
            <IconBox onClick={() => window.location.href = "https://github.com/darknight1983"}>
              <img src='/static/imgs/GitHub-Mark-64px.png' className={classes.icons}/>
            </IconBox>
          </Grid>
          <Grid item>
            <IconBox onClick={() => window.location.href = "https://twitter.com/CoodyMac"}>
              <img src='/static/imgs/Twitter_Social_Icon_Circle_Color.png' className={classes.icons}/>
            </IconBox>
          </Grid>
          <Grid item>
            <IconBox onClick={() => window.location.href = "https://linkedin.com/in/jacolby-green"}>
              <img src='/static/imgs/linkedin.png' className={classes.icons}/>
            </IconBox>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Footer);
