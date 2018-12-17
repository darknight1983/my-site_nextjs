import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import React from 'react';


const styles = theme => ({
  items: {
    width: '30%',
    height: '30%'
  },
  projects: {
    width: '70%',
    height: '70%',
    marginTop: '10px'
  },
  projectImg: {
    width: '100%',
    height: '100%'
  },
  margin: {
    marginTop: '100px',
    marginBottom: '40px'
  },
  h1: {
    padding: '10px',
    backgroundColor: '#0D47A1'
  },
  description: {
    padding: '10px',
    marginBottom: '15px'
  },
  content: {
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary,
  },
  contentWrapper: {
    padding: '10px'
  },
  clickDesc: {
    marginTop: '20px',
  }
})

const ImgBox = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.6,
  }
})

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
})

class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
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
    const { projects, open } = this.state;
    return (
      <div className={classes.margin}>
        <Typography variant='h2'
                    component='h1'
                    color='primary'
                    align='center'
                    className={classes.margin}>
          Projects
        </Typography>
        <Grid container justify='center' spacing={16}>
          {projects.map((project, i) => (
            <Grid item key={i}
                  className={classes.items}
                  xs={10}
                  sm={10}
                  md={3}
                  lg={3}>
              <Paper square={true}>
                <Typography variant='h5'
                            component='h1'
                            color='secondary'
                            align='center'
                            className={classes.h1}>
                  {project.title}
                </Typography>
                <Typography variant='title'
                            component='h5'
                            align='center'
                            onClick={() => this.setState({ open: open === i ? false : i })}
                            className={classes.clickDesc}>
                        {`Click for description`}
                </Typography>
                <Content className={classes.content} pose={open === i ? 'open' : 'closed'}>
                  <Typography className={classes.contentWrapper}
                              component='div'
                              variant='subheading'>
                    {project.description}
                  </Typography>
                </Content>
                {/*

                  <Typography variant='subheading'
                              component='p'
                              align='center'
                              className={classes.description}>
                    {project.description}
                  </Typography>
                  */}

                <Grid container justify='center'>
                  <Grid item className={classes.projects}>
                    <ImgBox>
                      <img src='/static/imgs/testProject.png'
                           alt='Image of project'
                           className={classes.projectImg}/>
                    </ImgBox>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <List>
                      {project.technologies.map((tech, i) => (
                        <ListItem button={true}>{tech}</ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Projects);
