import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BaseStyle } from 'theme/BaseStyle';

import { ThemeProvider } from 'styled-components';
import { Theme } from 'theme/Theme';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <BaseStyle>{children}</BaseStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
};
