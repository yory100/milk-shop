import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { milkTheme, GlobalStyle } from './GlobalStyles';
import { LayoutContainer, Header } from './components/common';

const Profile = () => <div>on the Profile Tab</div>;
const Comments = () => <div>on the Comments Tab</div>;
const Contact = () => <div>on the Contact Tab</div>;

function App() {
  return (
    <ThemeProvider theme={milkTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/info" component={Comments} />
            <Route path="/admin" component={Contact} />
          </Switch>
        </Router>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
