import Head from 'next/head';
import posed from 'react-pose';
import Grid from '@material-ui/core/Grid';
import withLayout from '../lib/withLayout';
import { myPhoto, indexPageImg } from '../components/sharedStyles';
import AboutMe from '../components/AboutMe';





const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
  }
});



const Index = () => (
  <div>
    <Head>
      <title>Index Page</title>
      <meta name='description' content='This is the Index page' />
    </Head>
    <section style={{'marginTop': '100px'}}>
      <Grid container justify='center'>
        <Grid item xs={8} sm={6} md={5} lg={4}>
          <Box style={indexPageImg}>
            <img src='/static/imgs/JacolbyGreen.jpeg' style={myPhoto} />
          </Box>
        </Grid>
      </Grid>
    </section>
    <AboutMe />
  </div>
)

export default withLayout(Index);
