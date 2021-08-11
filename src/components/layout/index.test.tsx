// libs
import React from 'react';
import { shallow } from 'enzyme';
import firebase from 'firebase';
// providers
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
// redux
import { configureStore, InitialState } from '~/redux/configure-store';
// i18n
import { i18n } from '~/i18n';
// theme
import theme from '~/styles/theme';
// components
import Component from '.';
// mocks
jest.spyOn<any, any>(firebase, 'auth').mockImplementation(() => {
  return {
    onAuthStateChanged: jest.fn(),
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      emailVerified: true,
    },
  };
});
import { FirebaseService } from '~/services/firebase.service';
jest.spyOn<any, any>(FirebaseService, 'snapshotUserPreference').mockImplementation(() => {
  return {};
});
jest.spyOn<any, any>(require('next/router'), 'useRouter').mockImplementation(() => {
  return {
    pathname: '/',
  };
});

describe('Component test', () => {
  test('Renders correctly', () => {
    const store = configureStore({
      ...InitialState,
      appState: {
        ...InitialState.appState,
        profile: {
          ...InitialState.appState.profile,
          user: {
            uid: 'uid',
            email: 'test@test.com',
            displayName: 'Test',
            photoURL: 'http://test.com',
          } as firebase.User,
        },
      },
    });
    const tree = shallow(
      <SnackbarProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Component />
            </Provider>
          </ThemeProvider>
        </I18nextProvider>
      </SnackbarProvider>,
    ).html();
    expect(tree).toMatchSnapshot();
  });
});
