import React, { FC } from 'react';
import styled from 'styled-components';

import { TextField, TextFieldProps } from '@mui/material';

export const MuiInput = styled(TextField)`
  width: fit-content;
`;

export const Input: FC<TextFieldProps> = (props) => {
  return (
    <>
      <MuiInput {...props} />
    </>
  );
};
