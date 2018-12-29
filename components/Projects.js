import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import React from 'react';


const styles = theme => ({
  items: {

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
  },
  techGrid: {
    backgroundColor: '#9E9E9E',
    marginTop: 40,
    opacity: 0.9
  },
  button: {
    margin: 10,
    cursor: 'pointer'
  }
})

const ImgBox = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
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
          title: 'Neighborhood Map (React)',
          description: 'Build a single page map application using React and the Google Maps API. Integrate a third-party data API and make your app accessible and usable offline.',
          link: 'https://github.com/darknight1983/neighboorhood-react-map',
          technologies: ['Google Maps API', 'React', 'Material-UI'],
          image: '/static/imgs/NeighboorhoodMap.png'
        },
        {
          title: 'Addison Treehouse Benefits',
          description: "Currently working on a web application for Addision Treehouse which serves as a hub for all member benefits and perks. Future iterations are in progress.",
          link: "https://github.com/darknight1983/Treehouse.git",
          technologies: ['Material-UI', 'Next.js', 'React', 'Pose'],
          image: '/static/imgs/AddisonTreehouse.png'
        },
        {
          title: 'MyReads: A Book Lending App',
          description: 'Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library.',
          link: "https://github.com/darknight1983/myReads",
          technologies: ['React', 'Node', 'Express'],
          image: '/static/imgs/testProject.png'
        },
        {
          title: 'Bamazon',
          description: 'A Node.js & MySQL digital storefront. This is a command line Node app that mimics a beloved online retailer.',
          link: 'https://github.com/darknight1983/bamazon_app',
          technologies: ['MYSQL', 'Inquirer', 'Cli-table', "Node.js"],
          image: '/static/imgs/bamazon.png'
        },
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
        <Grid container justify="center" alignContent="space-around" spacing={16}>
          {projects.map((project, i) => (
            <Grid item key={i}
                  className={classes.items}
                  xs={10}
                  sm={10}
                  md={5}
                  lg={5}>
              <Paper square={true}>
                <Typography variant='h5'
                            component='h1'
                            color='secondary'
                            align='center'
                            className={classes.h1}>
                  {project.title}
                </Typography>
                <Grid item xs={12} align="center">
                  <Button variant="contained"
                          color="secondary"
                          className={classes.button}
                          onClick={() => window.location.href = project.link}>
                    Code
                  </Button>
                </Grid>
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
                <Grid container justify='center'>
                  <Grid item className={classes.projects}>
                    <ImgBox>
                      <img src={project.image}
                           alt='Image of project'
                           className={classes.projectImg}/>
                    </ImgBox>
                  </Grid>
                </Grid>
                <Grid container className={classes.techGrid}>
                  {project.technologies.map((tech, i) => (
                    <Grid item xs={6} align="center">
                      <Typography variant="title" color="primary">
                        {tech}
                      </Typography>
                    </Grid>
                  ))}
                  {/*

                    <Grid item>
                      <List>
                        {project.technologies.map((tech, i) => (
                          <ListItem button={true}>{tech}</ListItem>
                        ))}
                      </List>
                    </Grid>

                    */}

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
