import React from 'react';
import Document, { Head, Main, NextScript} from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import getContext from '../lib/context';


export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width initial-scale=1.0' />
          {/* Tells google not to translate modals */}
          <meta name='google' content='nontranslate' />
          {/* Specifies color of browser on mobile devices */}
          <meta name='theme-color' content='#1976D2' />
          <link
           rel="shortcut icon"
           href="/static/imgs/icon.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300"
            rel="stylesheet"
            />
          <link
           rel="stylesheet"
           href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* Global styles for the elements included */}
          <style>
           {`
             a, a:focus {
               font-weight: 400;
               color: #1565C0;
               text-decoration: none;
               outline: none
             }
             a:hover, button:hover {
               opacity: 0.75;
               cursor: pointer
             }
             blockquote {
               padding: 0 1em;
               color: #555;
               border-left: 0.25em solid #dfe2e5;
             }
             pre {
               display:block;
               overflow-x:auto;
               padding:0.5em;
               background:#FFF;
               color: #000;
               border: 1px solid #ddd;
             }
             code {
               font-size: 14px;
               background: #FFF;
               padding: 3px 5px;
             }
           `}
          </style>
        </Head>
        <body style={{
                 fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                 color: '#222',
                 margin: '0px auto',
                 fontWeight: '300',
                 lineHeight: '1.5em',
                 backgroundColor: '#F7F9FC',
               }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ({ renderPage }) => {
  const pageContext = getContext();
  const page = renderPage(Component => props => (
    <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}>

        <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{
          __html: pageContext.sheetsRegistry.toString()
        }}/>
    )
  }
}
