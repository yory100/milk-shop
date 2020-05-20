import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color_background};
  padding: ${(props) => props.theme.spacer_s};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: fit-content(100px) 1fr;
  grid-gap: ${(props) => props.theme.spacer_s};
  grid-template-areas:
    'header header header header'
    'content content content content';

  @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
    width: 90%;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacer_m};
    grid-template-columns: repeat(8, 1fr);
    grid-gap: ${(props) => props.theme.spacer_m};
    grid-template-areas:
      'header header header header header header header header'
      'nav nav nav content content content content content';
  }

  @media (min-width: ${(props) => props.theme.desktop_breakpoint}) {
    width: 70%;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacer_xl};
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${(props) => props.theme.spacer_xl};
    grid-template-areas:
      'header header header header header header header header header header header header'
      'nav nav nav nav content content content content content content content content';
  }
`;

const LayoutContainer = ({ children }) => {
  return <Conatiner>{children}</Conatiner>;
};

export default LayoutContainer;
