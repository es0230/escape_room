import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../../components/common/common';

import DetailedQuest from '../../components/detailed-quest/detailed-quest';

import Contacts from '../../components/contacts/contacts';

import Home from '../../components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (): JSX.Element => (

  <ThemeProvider theme={appTheme}>

    <S.GlobalStyle />

    <Router>

      <Switch>

        <Route exact path="/detailed-quest/:id">
          <DetailedQuest />
        </Route>

        <Route exact path="/contacts">

          <Contacts />
        </Route>

        <Route path="/">

          <Home />
        </Route>

        <Route path="*">

          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
