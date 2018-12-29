import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    marginTop: 40,
    marginBottom: 40
  },
  h1: {
    marginTop: 60,
  },
  text: {
    marginTop: 40
  }
})

const ContactMe = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant='h2'
                  component='h1'
                  color='primary'
                  align='center'
                  className={classes.h1}>
        Contact Me
      </Typography>
      <Grid container justify="center">
        <Grid item xs={9}>
          <Typography variant="title" paragraph={true} className={classes.text}>
            I'm currently available for freelance projects or full-time work.
            Im also interested in working on projects that you think will
            have an impact. If you're interested in working with me, please get in touch
            through <a href="mailto:gjacolby83@gmail.com.">gjacolby83@gmail.com</a>.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

ContactMe.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ContactMe)
