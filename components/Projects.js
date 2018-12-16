import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
  items: {
    width: '30%',
    height: '30%'
  }
})

class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          title: 'Node Server',
          description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
          link: 'http://github.com',
          technologies: ['React', 'Node', 'Express']
        },
        {
          title: 'Node Server',
          description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
          link: 'http://github.com',
          technologies: ['React', 'Node', 'Express']
        },
        {
          title: 'Node Server',
          description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
          link: 'http://github.com',
          technologies: ['React', 'Node', 'Express']
        }
      ]
    }
  }
  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    return (
      <div>
        <Typography variant='h2' component='h1' color='primary' align='center'>
          Projects
        </Typography>
        <Grid container justify='center' spacing={8}>
          {projects.map((project, i) => (
            <Grid item key={i} className={classes.items}>
              <Paper square={true}>
                <h1>{project.title}</h1>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);
