import React,{ Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

import getContext from '../lib/context'


function withLayout(BaseComponent) {
  class App extends Component {
    constructor(props, context) {
      super(props, context)

      this.pageContext = this.props.pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
          >
          <CssBaseline />
          <div>
            <Header {...this.props}/>
            <BaseComponent {...this.props} />
            <Footer {...this.props} />
          </div>
        </MuiThemeProvider>
      );
    }
  }

  App.propTypes = {
    pageContext: PropTypes.object
  }

  App.defaultProps = {
    pageContext: null
  }
  App.getInitialProps = (ctx) => {
    // Checks if the BaseComponent has initialProps.
    if (BaseComponent.getInitialProps) {
      // Pass ctx to the BaseComponet
      return BaseComponent.getInitialProps(ctx)
    }
    // Pass an empty object
    return {};
  }
  return App;
}

export default withLayout;
