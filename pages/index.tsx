import { GetServerSideProps } from 'next';
import * as AppActions from '../redux/actions/app-action';

import { initializeStore } from '../hooks/redux';

import Home from '../views/home';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {
    props: {
      title: 'Homepage',
      initialReduxState: reduxStore.getState(),
    }
  }
}

export default Home;