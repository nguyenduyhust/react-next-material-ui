import React from 'react';
import { mount } from 'enzyme';
import firebase from 'firebase';
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { configureStore } from '~/redux/configure-store';
import { i18n } from '~/i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '~/styles/theme';
import Component from '.';

it('renders correctly', () => {
  const onClose = jest.fn();
  const user = {
    uid: 'uid',
    email: 'test@test.com',
    displayName: 'Test',
    photoURL: 'http://test.com',
  } as firebase.User;
  const store = configureStore();

  const tree = mount(
    <SnackbarProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component onClose={onClose} user={user} open={true} />
          </Provider>
        </ThemeProvider>
      </I18nextProvider>
    </SnackbarProvider>,
  ).html();
  expect(tree).toMatchSnapshot();
});
