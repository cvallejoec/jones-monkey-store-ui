import { useEffect } from 'react';
import { useStore, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Helmet from 'react-helmet';
import { SnackbarProvider } from 'notistack';

import { wrapper } from '../store/index.js';
import Layout from '~/components/layout';
import { demoActions } from '~/store/demo';
import { currentDemo } from '~/server/queries';
import '~/public/sass/style.scss';
import { ApiProvider, StoreProvider } from '~/context';

const App = ({ Component, pageProps }) => {
  const store = useStore();

  useEffect(() => {
    if (store.getState().demo.current !== currentDemo) {
      store.dispatch(demoActions.refreshStore(currentDemo));
    }
  }, []);

  return (
    <SnackbarProvider
      maxSnack={50}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      hideIconVariant
      autoHideDuration={3000}
    >
      <ApiProvider>
        <Provider store={store}>
          <PersistGate
            // @ts-ignore
            persistor={store.__persistor}
            loading={
              <div className="loading-overlay">
                <div className="bounce-loader">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                  <div className="bounce4"></div>
                </div>
              </div>
            }
          >
            <StoreProvider>
              <Helmet>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <title>Riode - React eCommerce Template</title>

                <meta name="keywords" content="React Template" />
                <meta
                  name="description"
                  content="Riode - React eCommerce Template"
                />
                <meta name="author" content="D-THEMES" />
              </Helmet>

              <Layout>
                <Component {...pageProps} />
              </Layout>
            </StoreProvider>
          </PersistGate>
        </Provider>
      </ApiProvider>
    </SnackbarProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default wrapper.withRedux(App);
