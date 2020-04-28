import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { milkTheme, GlobalStyle } from './GlobalStyles';
import { LayoutContainer } from './components/common';

const TestContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

function App() {
  return (
    <ThemeProvider theme={milkTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <TestContent style={{ gridArea: 'header' }} />
        <TestContent style={{ gridArea: 'nav' }} />
        <TestContent style={{ gridArea: 'content' }} />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
