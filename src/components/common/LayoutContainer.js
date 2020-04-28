import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 1fr;
  gap: ${(props) => props.theme.spacer_xl};
  grid-template-areas:
    'header header header header'
    'content content content content';

  @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      'header header header header header header header header'
      'nav nav nav content content content content content';
  }

  @media (min-width: ${(props) => props.theme.desktop_breakpoint}) {
    width: 70%;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
      'header header header header header header header header header header header header'
      'nav nav nav nav content content content content content content content content';
  }
`;

const LayoutContainer = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <Conatiner>{props.children}</Conatiner>;
};

export default LayoutContainer;
