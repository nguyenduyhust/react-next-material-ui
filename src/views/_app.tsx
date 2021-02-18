import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App, { AppProps, AppContext } from 'next/app';
import { appWithTranslation } from '@i18n';
import theme from '@styles/theme';
import { useStore } from '@redux/with-redux';
import { InitialState } from '@redux/configure-store';
import '@services/firebase.service';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(
    pageProps.initialReduxState ? JSON.parse(pageProps.initialReduxState) : InitialState,
  );

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuration={3000}
        >
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default appWithTranslation(MyApp);
