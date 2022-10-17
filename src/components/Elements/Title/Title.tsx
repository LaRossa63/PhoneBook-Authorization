import styled from 'styled-components';

interface Props {
  textAlign?: string;
  margin?: string;
}

export const Title = styled.h4<Props>`
  font-size: 24px;
  font-weight: 600;

  margin: ${(props) => props.margin || '0'};

  text-align: ${(props) => props.textAlign || 'center'};
`;
