import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header'



const Layout = (props) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    {props.children}
  </React.Fragment>
)

export default Layout
