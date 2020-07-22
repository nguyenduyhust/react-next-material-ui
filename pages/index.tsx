import { compose } from 'redux';
import { withRedux } from '../hocs/redux';
import * as AppActions from '../redux/actions/app-action';

import Home from '../views/home';

Home.getInitialProps = ({ req, reduxStore }: any) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {};
};

export default compose(
  withRedux,
)(Home);