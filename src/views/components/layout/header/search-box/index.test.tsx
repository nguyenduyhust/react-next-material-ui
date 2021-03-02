import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@styles/theme';
import Component from '.';

describe('Component test', () => {
  test('Renders correctly', () => {
    const tree = mount(
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </I18nextProvider>,
    ).html();
    expect(tree).toMatchSnapshot();
  });
});
