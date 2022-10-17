import React, { FC } from 'react';
import { BaseStyle } from 'theme/BaseStyle';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <BaseStyle>{children}</BaseStyle>
    </>
  );
};
